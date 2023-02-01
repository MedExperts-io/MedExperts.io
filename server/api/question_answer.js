const router = require("express").Router();
const {
  models: { User, Question_Answer, User_Question },
} = require("../db");
module.exports = router;

const { getToken, isAdmin } = require("./userCheckMiddleware");

// GET/api/questions ------  Admin only
// router.get("/admin", getToken, isAdmin, async (req, res, next) => {
//   try {
//     const allQAs = await Question_Answer.findAll();
//     res.json(allQAs);
//   } catch (err) {
//     next(err);
//   }
// });

// ----- GET/api/questions ---- Answer & explanation restricted in case of Postman Insomnia use
router.get("/", getToken, async (req, res, next) => {
  try {
    const allQs = await Question_Answer.findAll({
      attributes: [
        "id",
        "question",
        "questionImage",
        "answerOptions",
        "level",
        "category",
      ],
    });
    res.json(allQs);
  } catch (err) {
    next(err);
  }
});


// GET/api/questions/:singleQuestionId
router.get("/:singleQuestionId", async (req, res, next) => {
  try {
    const singleQuestion = await Question_Answer.findOne({
      where: {id: req.params.singleQuestionId}      
    });
    if (singleQuestion) {
  
      res.json(singleQuestion);
    } 
    else {
      res.json({ error: "Product not found" });
    }
  } catch (err) {
    next(err);
  }
});


