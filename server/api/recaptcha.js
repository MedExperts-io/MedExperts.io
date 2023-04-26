const router = require("express").Router();
const axios = require("axios");
router.post("/", async (req, res, next) => {
  try {
    const { token } = req.body;
    console.log(token, "TOKEN BACKEND");

    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`
    );
    console.log(data, "DATA BACKEND");

    if (data.success) {
      console.log("DATA.SUCCESS BACKEND", data.success);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
