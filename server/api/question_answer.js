const router = require("express").Router();
const {
  models: { User, Question_Answer, User_Question },
} = require("../db");
const { Op } = require("sequelize");
module.exports = router;

const { getToken, isAdmin } = require("./userCheckMiddleware");

//----- GET/api/questions ---- Answer & explanation restricted in case of Postman Insomnia use
router.get("/", getToken, async (req, res, next) => {
  try {
    const allQs = await Question_Answer.findAll({
      where: { status: "Active" },
      attributes: [
        "id",
        "question",
        "questionImage",
        "answerOptions",
        "level",
        "category",
        "status",
      ],
    });
    res.json(allQs);
  } catch (err) {
    next(err);
  }
});

//GET/api/questions/:singleQuestionId------- Hamza's coode FOR STUDENTS
router.get("/:singleQuestionId", async (req, res, next) => {
  try {
    const singleQuestion = await Question_Answer.findOne({
      where: { id: req.params.singleQuestionId },
    });
    if (singleQuestion) {
      res.json(singleQuestion);
    } else {
      res.json({ error: "Product not found" });
    }
  } catch (err) {
    next(err);
  }
});

//GET/api/questions/:singleQuestionId------- FOR ADMIN TO SEE VERSIONS, combine w above
// router.get("/:singleQuestionId", getToken, isAdmin, async (req, res, next) => {
//   const qaId = req.params.singleQuestionId;
//   try {
//     const singleQuestion = await Question_Answer.findOne({
//       where: { id: qaId },
//       include: {
//         model: User_Question,
//       },
//     });
//     if (singleQuestion) {
//       const allVersions = await Question_Answer.findAll({
//         order: [["createdAt", "DESC"]],
//         where: {
//           [Op.or]: [
//             { id: singleQuestion.ancestorId },
//             { ancestorId: singleQuestion.ancestorId },
//           ],
//         },
//         include: User_Question,
//       });

//       res.json(allVersions);
//     } else {
//       res.json({ error: "Question not found" });
//     }
//   } catch (err) {
//     next(err);
//   }
// });
