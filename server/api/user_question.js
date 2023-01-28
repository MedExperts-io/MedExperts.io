const router = require("express").Router();
const {
  models: { User, Question_Answer, User_Question },
} = require("../db");
module.exports = router;

const { getToken, isAdmin } = require("./userCheckMiddleware");

router.get("/", async (req, res, next) => {
  try {
    const allUserQs = await User_Question.findAll();
    res.json(allUserQs);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const allUserQs = await User_Question.findAll({
      where: { userId: userId },
    });
    res.json(allUserQs);
  } catch (err) {
    next(err);
  }
});
