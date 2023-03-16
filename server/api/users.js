const router = require("express").Router();
const {
  models: { User, Question_Answer, User_Question },
} = require("../db");
module.exports = router;
const { getToken, isAdmin } = require("./userCheckMiddleware");

//GET/api/users ----- For admin (Hiding secrets & explicitly sending only a few fields)
router.get("/", getToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "email", "expertise", "school"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
