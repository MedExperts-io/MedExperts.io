const router = require("express").Router();
const {
  models: { User, Question_Answer, User_Question },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const allQAs = await Question_Answer.findAll();
    res.json(allQAs);
  } catch (err) {
    next(err);
  }
});
