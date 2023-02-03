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

//GET/api/questions/:singleQuestionId
router.get("/:singleQuestionId", getToken, async (req, res, next) => {
  const qaId = req.params.singleQuestionId;
  try {
    let singleQuestion = await Question_Answer.findOne({
      where: { id: qaId },
      include: {
        model: User_Question,
      },
    });
    if (singleQuestion) {
      //Condition 1 - If instance exists
      if (req.user.isAdmin) {
        //Condition 2A - IF ADMIN
        const allVersions = await Question_Answer.findAll({
          order: [["createdAt", "DESC"]],
          where: {
            [Op.or]: [
              { id: singleQuestion.ancestorId },
              { ancestorId: singleQuestion.ancestorId },
            ],
          },
          include: User_Question,
        });

        res.json(allVersions);
      } else {
        //Condition 2B - IF STUDENT

        if (singleQuestion.user_questions.length) {
          //Condition 3A - If student has responded to question
          res.json(singleQuestion);
        } else {
          //Condition 3B - If student has not yet responded
          const {
            question,
            questionImage,
            answerOptions,
            level,
            category,
            ancestorId,
          } = singleQuestion;
          res.json({
            question,
            questionImage,
            answerOptions,
            level,
            category,
            ancestorId,
          });
        }
      }
    } else {
      res.json({ error: "Question not found" });
    }
  } catch (err) {
    next(err);
  }
});

// api/questions/:singleQuestionId
// Admin submits form - Make sure form is populated with current QA data
// Thru req.body, if ancestorId = null (q has no older versions), then attach req.params.id to ancestorId in frontend.
router.post("/:singleQuestionId", getToken, isAdmin, async (req, res, next) => {
  const qaId = req.params.singleQuestionId;
  //NEED TO ADD CODE FOR IMAGE UPLOAD
  try {
    const newQA = await Question_Answer.create(req.body);
    console.log("NEW QA CREATED", newQA);
    const updateOld = await Question_Answer.update(
      { status: "Inactive" },
      {
        where: {
          questionAnswerId: qaId,
        },
      }
    );
    res.json(newQA); // Send new instance if redirecting on frontend with new QAID
    //OR
    //res.redirect(`/${}`)// Redirect with new QAID
  } catch (err) {
    next(err);
  }
});
