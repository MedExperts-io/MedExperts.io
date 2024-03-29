const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/questions", require("./question_answer"));
router.use("/user_questions", require("./user_question"));
router.use("/user_feedback", require("./user_feedback"));
router.use("/recaptcha", require("./recaptcha"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
