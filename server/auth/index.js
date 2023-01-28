const router = require("express").Router();
const {
  models: { User, Password_Reset },
} = require("../db");
const { getToken } = require("../api/userCheckMiddleware");
const crypto = require("crypto");
require("dotenv").config();
const nodemailer = require("nodemailer");

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

/** Route1: when a user requests a new password from the 'forgot password' link we
 * 1) check if the email exists in our db
 * 2) if another reset token was generated, we make it invalid/expired
 * 3) generate a new reset token
 * 4) store new token in our db **/

router.post("/forgotPassword", async function (req, res, next) {
  const { email } = req.body;

  let userEmail = await User.findOne({ where: { email: email } });

  if (userEmail == null) {
    /**
     * we don't want to tell attackers that an
     * email doesn't exist, because that will let
     * them use this form to find ones that do
     * exist.
     **/
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

  // creating random reset token
  let fpSalt = crypto.randomBytes(64).toString("base64");

  //token expires after one hour
  var expireDate = new Date(new Date().getTime() + 60 * 60 * 1000);

  await Password_Reset.create({
    email: email,
    expiration: expireDate,
    token: fpSalt,
    used: 0,
  });

  //HOLD OFF ON THIS STEP
  //create email
  // const message = {
  //   from: process.env.SENDER_ADDRESS,
  //   to: req.body.email,
  //   replyTo: process.env.REPLYTO_ADDRESS,
  //   subject: process.env.FORGOT_PASS_SUBJECT_LINE,
  //   text:
  //     "To reset your password, please click the link below.\n\nhttps://" +
  //     process.env.DOMAIN +
  //     "/user/reset-password?token=" +
  //     encodeURIComponent(token) +
  //     "&email=" +
  //     req.body.email,
  // };

  // //send email
  // transport.sendMail(message, function (err, info) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(info);
  //   }
  // });

  return res.json({ status: "ok" });
});

module.exports = router;
