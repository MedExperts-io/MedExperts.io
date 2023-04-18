const { OAuth2Client } = require("google-auth-library");
const router = require("express").Router();

router.post("/submit-form", async (req, res, next) => {
  const { token } = req.body;

  const client = new OAuth2Client(process.env.RECAPTCHA_SECRET);
  const { data } = await client.verifyIdToken({
    idToken: token,
    audience: process.env.RECAPTCHA_SITE,
  });

  if (data) {
    res.sendStatus(200);
  } else {
    res.status(400).send("reCAPTCHA validation failed");
  }
});

module.exports = router;
