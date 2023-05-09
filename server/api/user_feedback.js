const router = require("express").Router();
const {
  models: { User, User_Feedback },
} = require("../db");

module.exports = router;

const { getToken, isAdmin } = require("./userCheckMiddleware");

// ----> GET/api/user_feedback <---- For admin dashboard (ALL feedback survey results)
router.get("/", getToken, isAdmin, async (req, res, next) => {
  try {
    const allFeedback = await User_Feedback.findAll({
      include: { model: User },
    });
    res.json(allFeedback);
  } catch (err) {
    next(err);
  }
});

// ----> GET/api/user_feedback/source , Admin Dash: (where did you hear about us?)
router.get("/source", getToken, isAdmin, async (req, res, next) => {
  try {
    const source = await User_Feedback.findAll({
      attributes: ["source"],
      include: { model: User },
    });
    res.json(source);
  } catch (err) {
    next(err);
  }
});

// ----> GET/api/user_feedback/frequency , Admin Dash: (how often do you use MedExperts?)
router.get("/frequency", getToken, isAdmin, async (req, res, next) => {
  try {
    const source = await User_Feedback.findAll({
      attributes: ["frequency"],
      include: { model: User },
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
      include: { model: User },
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
      include: { model: User },
    });
    res.json(otherFeedback);
  } catch (err) {
    next(err);
  }
});

// ---> POST/api/user_feedback/response
router.post("/response", getToken, async (req, res, next) => {
  const userId = req.user.id;
  const { Source, Frequency, Satisfaction, OtherFeedback, Features } = req.body;

  try {
    const userResponse = await User_Feedback.create({
      source: Source,
      frequency: Frequency,
      difficultyRating: Satisfaction.difficulty,
      helpfulRating: Satisfaction.helpful,
      qualityRating: Satisfaction.quality,
      recommendableRating: Satisfaction.recommendable,
      usabilityRating: Satisfaction.usability,
      otherFeedback: OtherFeedback,
      suggestedFeatures: Features,
      userId,
    });
    res.json(userResponse);
  } catch (err) {
    next(err);
  }
});
