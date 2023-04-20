const router = require("express").Router();
const {
  models: { User, User_Feedback },
} = require("../db");
const { Op } = "sequelize";
module.exports = router;

const { getToken, isAdmin } = require("./userCheckMiddleware");

// get route (for admin)
// post route (for all)
router.post("/response", getToken, async (req, res, next) => {
  const userId = req.user.id;
  const { surveyResponse } = req.body;

  try {
    const userResponse = await User_Feedback.create({
      surveyResponse,
      userId,
    });
    res.json(userResponse);
  } catch (err) {
    next(err);
  }
});
