const router = require("express").Router();
const {
  models: { User, Password_Reset },
} = require("../db");
const { getToken } = require("../api/userCheckMiddleware");
const crypto = require("crypto");
require("dotenv").config();
const nodemailer = require("nodemailer");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 5;

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
    //Security2: Prrotecting against injection attacks in Sequelize via Insomnia/Postman (can't make isAdmin true)
    const { firstName, lastName, email, password, expertise, school } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      expertise,
      school,
    });
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
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

    //Security2: Prrotecting against injection attacks in Sequelize via Insomnia/Postman (can't make isAdmin true)
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

/** POST route to request password reset
 * when a user requests a new password from the 'forgot password' link we:
 * 1) check if the email exists in our db
 * 2) if another reset token was generated, we make it invalid/expired
 * 3) generate a new reset token
 * 4) store new token in our db **/

router.post("/forgotPassword", async function (req, res, next) {
  const { email } = req.body;

  let userEmail = await User.findOne({ where: { email: email } });

  if (userEmail == null) {
    return res.json({ status: "ok" });
  }

  await Password_Reset.update(
    {
      used: 1,
    },
    {
      where: {
        email: email,
      },
    }
  );

  let fpSalt = crypto.randomBytes(64).toString("base64");

  //token expires after one hour
  var expireDate = Date.now() + 360000;

  await Password_Reset.create({
    email: email,
    expiration: expireDate,
    token: fpSalt,
    used: 0,
  });

  //HOLD OFF ON THIS STEP
  //create email
  const message = {
    from: process.env.SENDER_ADDRESS,
    to: email,
    // replyTo: process.env.REPLYTO_ADDRESS,
    subject: process.env.FORGOT_PASS_SUBJECT_LINE,
    text:
      "To reset your password, please click the link below:\n\n" +
      `http://localhost:8080/resetPassword/?token=${encodeURIComponent(fpSalt)}&email=${email}`,
  };

  //send email
  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  return res.json({ status: "ok" });
});

// GET route to check if the token is expired or not. if it is valid, display password reset form
router.get("/resetPassword", async function (req, res, next) {
  // clearing expired tokens (look into cronjob for bigger site)
  await Password_Reset.destroy({
    where: {
      expiration: { [Op.lt]: Date.now() },
    },
  });

  // find token in db
  const { email, token } = req.body;
  let record = await Password_Reset.findOne({
    where: {
      email: email,
      expiration: { [Op.gt]: Date.now() },
      token: token,
      used: 0,
    },
  });

  if (record == null) {
    return res.render("/resetPassword", {
      message: "Token has expired. Please try password reset again.",
      showForm: false,
    });
  }

  res.render("/resetPassword", {
    showForm: true,
    record: record,
  });
});

// POST route to actually reset the password
router.post("/resetPassword", async function (req, res, next) {
  // compare the 2 password fields
  const { password1, password2, token, email } = req.body;

  if (password1 !== password2) {
    return res.json({ status: "error", message: "Passwords do not match. Please try again" });
  }

  /**
   * Ensure password is valid (isValidPassword
   * function checks if password is >= 8 chars, alphanumeric,
   * has special chars, etc)
   **/
  // if (!isValidPassword(req.body.password1)) {
  //   return res.json({
  //     status: "error",
  //     message: "Password does not meet minimum requirements. Please try again.",
  //   });
  // }

  let record = await Password_Reset.findOne({
    where: {
      email: email,
      expiration: { [Op.gt]: Date.now() },
      token: token,
      used: 0,
    },
  });

  if (record == null) {
    return res.json({
      status: "error",
      message: "Token not found. Please try the reset password process again.",
    });
  }

  let updating = await Password_Reset.update(
    {
      used: 1,
    },
    {
      where: {
        email: email,
      },
    }
  );
  let newPassword = (await bcrypt.hash(password1, SALT_ROUNDS)).toString();
  // console.log(newPassword);
  // let newSalt = crypto.randomBytes(64).toString("hex");
  // let newPassword = crypto.pbkdf2Sync(password1, newSalt, 10000, 64, "sha512").toString("base64");

  await User.update(
    {
      password: newPassword,
    },
    {
      where: {
        email: email,
      },
    }
  );

  return res.json({
    status: "ok",
    message: "Password reset. Please login with your new password.",
  });
});

module.exports = router;
