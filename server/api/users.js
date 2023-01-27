const router = require("express").Router();
const {
  models: { User, Question_Answer, User_Question },
} = require("../db");
module.exports = router;
const { getToken, isAdmin } = require("./userCheckMiddleware");

router.get("/", getToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // Security1: Hiding secrets in Sequelize (explicitly select only a few fields to send)
      attributes: ["id", "email", "expertise", "school"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
