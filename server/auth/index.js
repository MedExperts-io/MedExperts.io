const router = require("express").Router();
const {
  models: { User, Password_Reset },
} = require("../db");
const { getToken } = require("../api/userCheckMiddleware");
const crypto = require("crypto");
const handlebars = require("handlebars");
const nodemailer = require("nodemailer");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 5;
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const transport = nodemailer.createTransport({
  host: process.env.HOST,
  service: process.env.SERVICE,
  port: process.env.PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, expertise, school } =
      req.body;

    let tempId = uuidv4();
    let verificationToken = crypto.randomBytes(32).toString("hex");
    let fpSalt = await bcrypt.hash(
      verificationToken,
      Number(verificationToken)
    );

    const user = await User.create({
      tempId: tempId,
      verificationToken: fpSalt,
      firstName,
      lastName,
      email,
      password,
      expertise,
      school,
    });

    let source = fs.readFileSync(
      path.join(__dirname, "/verifyAcctTemplate.hbs"),
      "utf8"
    );
    let compiledTemplate = handlebars.compile(source);
    let htmlToSend = compiledTemplate({
      token: encodeURIComponent(fpSalt),
      uid: encodeURIComponent(tempId),
    });

    const message = () => {
      return {
        from: process.env.SENDER_ADDRESS,
        to: email,
        subject: process.env.VERIFY_ACCT_SUBJECT_LINE,
        html: htmlToSend,
      };
    };
    transport.sendMail(message(), function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("done");
      }
    });

    return res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/verifyEmail/:token?:tempId?", async function (req, res, next) {
  const token = req.query.token;
  const tempId = req.query.tempId;

  let user = await User.findOne({
    where: {
      tempId: tempId,
      verificationToken: token,
      status: false,
    },
  });

  if (!user) {
    return res.status(400).json("something's gone wrong");
  }

  await user.update(
    {
      status: true,
    },
    {
      where: {
        tempId: tempId,
      },
    }
  );

  return res.status(200).json("email verified");
});

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

router.put("/profile", getToken, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findByPk(userId);

    //Security2: Protecting against injection attacks in Sequelize via Insomnia/Postman (can't make isAdmin true)
    const { firstName, lastName, email, expertise } = req.body;
    const editUserDetails = await user.update({
      firstName,
      lastName,
      email,
      expertise,
    });

    res.json(editUserDetails);
  } catch (err) {
    next(err);
  }
});

router.post("/forgotPassword", async function (req, res, next) {
  const { email } = req.body;

  let user = await User.findOne({ where: { email: email } });

  if (user == null) {
    return res.json({ status: "ok" });
  }

  await Password_Reset.destroy({
    where: {
      email: email,
    },
  });

  let userId = uuidv4();
  let resetToken = crypto.randomBytes(32).toString("hex");
  let fpSalt = await bcrypt.hash(resetToken, Number(resetToken));
  let expireDate = Date.now() + 3600000;

  await Password_Reset.create({
    email: email,
    uid: userId,
    expiration: expireDate,
    token: fpSalt,
    used: 0,
  });

  let source = fs.readFileSync(path.join(__dirname, "/template.hbs"), "utf8");
  let compiledTemplate = handlebars.compile(source);
  let htmlToSend = compiledTemplate({
    token: encodeURIComponent(fpSalt),
    uid: encodeURIComponent(userId),
  });

  const message = () => {
    return {
      from: process.env.SENDER_ADDRESS,
      to: email,
      subject: process.env.FORGOT_PASS_SUBJECT_LINE,
      html: htmlToSend,
    };
  };

  transport.sendMail(message(), function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("done");
    }
  });

  return res.json({ status: "ok" });
});

router.get("/resetPassword/:token?:uid?", async function (req, res, next) {
  const token = req.query.token;
  const uid = req.query.uid;

  await Password_Reset.destroy({
    where: {
      expiration: { [Op.lt]: Date.now() },
    },
  });

  let record = await Password_Reset.findOne({
    where: {
      uid: uid,
      expiration: { [Op.gt]: Date.now() },
      token: token,
      used: 0,
    },
  });

  if (!record) {
    return res.status(400).json("Invalid or expired token");
  }

  await record.update(
    {
      used: 1,
    },
    {
      where: {
        uid: uid,
      },
    }
  );
  return res.status(200).json("valid token");
});

router.post("/resetPassword", async function (req, res, next) {
  const { password1, password2, token, uid } = req.body;

  if (password1 !== password2) {
    return res.status(400).json("Passwords do not match. Please try again");
  }

  let record = await Password_Reset.findOne({
    where: {
      uid: uid,
      expiration: { [Op.gt]: Date.now() },
      token: token,
      used: 1,
    },
  });

  if (!record) {
    return res
      .status(400)
      .json("Token not found. Please try the reset password process again.");
  }

  await Password_Reset.update(
    {
      used: 2,
    },
    {
      where: {
        uid: uid,
      },
    }
  );

  let newPassword = (await bcrypt.hash(password1, SALT_ROUNDS)).toString();

  await User.update(
    {
      password: newPassword,
    },
    {
      where: {
        email: record.email,
      },
    }
  );

  return res
    .status(200)
    .json("Password reset. Please login with your new password.");
});

module.exports = router;
