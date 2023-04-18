const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const { token } = req.body;

    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${
        process.env.RECAPTCHA_SECRET
      }&response=${{ token }}`
    );

    if (data.success) {
      console.log(data.sucess);
      res.sendStatus(200);
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});
module.exports = router;
