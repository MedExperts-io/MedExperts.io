const router = require("express").Router();
const {
  models: { User, Question_Answer, User_Question, QAHistory },
} = require("../db");
module.exports = router;


// GET/api/qahistory/:singleQuestionId
router.get("/:singleQuestionId", async (req, res, next) => {
  const qaId = req.params.singleQuestionId;
  try {
    const oldVersions = await QAHistory.findOne({
      where: { questionAnswerId: 1 },
      include: { model: Question_Answer },
    });
    res.json(oldVersions);
  } catch (err) {
    next(err);
  }
});
