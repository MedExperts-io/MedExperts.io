const router = require("express").Router();
const { sources } = require("webpack");
const {
  models: { User, User_Feedback },
} = require("../db");

module.exports = router;

const { getToken, isAdmin } = require("./userCheckMiddleware");

// ----> GET/api/user_feedback <---- For admin dashboard (ALL feedback survey results)
router.get("/", getToken, isAdmin, async (req, res, next) => {
  try {
    const allFeedback = await User_Feedback.findAll({});
    res.json(allFeedback);
  } catch (err) {
    next(err);
  }
});

// ----> GET/api/user_feedback/satisfaction , Admin Dash: (questions with ratings)
router.get("/satisfaction", getToken, isAdmin, async (req, res, next) => {
  try {
    const satisfaction = await User_Feedback.findAll({
      attributes: ["satisfaction"],
    });
    res.json(satisfaction);
  } catch (err) {
    next(err);
  }
});

// ----> GET/api/user_feedback/source , Admin Dash: (where did you hear about us?)
router.get("/source", getToken, isAdmin, async (req, res, next) => {
  try {
    const source = await User_Feedback.findAll({
      attributes: ["source"],
    });
    res.json(source);
  } catch (err) {
    next(err);
  }
});

// ----> GET/api/user_feedback/suggestedFeatures , Admin Dash: (features you'd like to see?)
router.get("/suggestedFeatures", getToken, isAdmin, async (req, res, next) => {
  try {
    const suggestedFeatures = await User_Feedback.findAll({
      attributes: ["suggestedFeatures"],
    });
    res.json(suggestedFeatures);
  } catch (err) {
    next(err);
  }
});

// ----> GET/api/user_feedback/otherFeedback , Admin Dash: (any other feedback?)
router.get("/otherFeedback", getToken, isAdmin, async (req, res, next) => {
  try {
    const otherFeedback = await User_Feedback.findAll({
      attributes: ["otherFeedback"],
    });
    res.json(otherFeedback);
  } catch (err) {
    next(err);
  }
});

// ---> POST/api/user_feedback/response
router.post("/response", getToken, async (req, res, next) => {
  const userId = req.user.id;
  const { Source, Satisfaction, Features, OtherFeedback } = req.body;

  try {
    const userResponse = await User_Feedback.create({
      source: Source,
      suggestedFeatures: Features,
      otherFeedback: OtherFeedback,
      satisfaction: Satisfaction,
      userId,
    });
    res.json(userResponse);
  } catch (err) {
    next(err);
  }
});
