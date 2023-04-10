const router = require("express").Router();
const {
  models: { User, Question_Answer, User_Question },
} = require("../db");
const { Op } = require("sequelize");
module.exports = router;

const { getToken, isAdmin } = require("./userCheckMiddleware");

//GET/api/questions ---- For allQA view for all (Answer & explanation restricted in case of Postman/Insomnia use)
router.get("/", getToken, async (req, res, next) => {
  try {
    const allQs = await Question_Answer.findAll({
      where: { status: "Active" },
      attributes: [
        "id",
        "question",
        "questionImage",
        "questionImageAltText",
        "answerOptions",
        "level",
        "category",
        "status",
        "displayId",
        "color",
      ],
    });
    res.json(allQs);
  } catch (err) {
    next(err);
  }
});

//GET/api/questions/:singleQuestionId - For single question view
router.get("/:singleQuestionId", getToken, async (req, res, next) => {
  const qaId = req.params.singleQuestionId;

  try {
    if (qaId) {
      //Condition 1 -- If instance exists
      if (req.user.isAdmin) {
        //Condition 2A -- If admin
        let singleQuestion = await Question_Answer.findOne({
          where: { id: qaId },
          include: {
            model: User_Question,
          },
        });
        if (singleQuestion.ancestorId !== null) {
          //Condition 3A -- If child
          const allVersions = await Question_Answer.findAll({
            order: [["createdAt", "DESC"]],
            where: {
              [Op.or]: [
                { id: singleQuestion.ancestorId }, //get ancestor
                { ancestorId: singleQuestion.ancestorId }, //get siblings
              ],
            },
            include: User_Question,
          });
          res.json(allVersions);
        } else {
          //Condition 3B -- If ancestor
          //May Delete this extra query if URL system is established
          const allVersions = await Question_Answer.findAll({
            order: [["createdAt", "DESC"]],
            where: {
              [Op.or]: [
                { id: singleQuestion.id }, //get self
                { ancestorId: singleQuestion.id }, //get children
              ],
            },
            include: User_Question,
          });
          res.json(allVersions);
        }
      } else {
        //Condition 2B -- If student
        let singleQuestion = await Question_Answer.findOne({
          where: { id: qaId },
        });
        res.json(singleQuestion);
        // //Condition 3A -- If student has responded to question
        // if (singleQuestion.user_questions.length) {
        //   res.json(singleQuestion);
        // } //Condition 3B -- If student has not yet responded
        // else {
        //   const { id, question, questionImage, answerOptions, level, category, ancestorId, displayId,correctAnswer } = singleQuestion;
        //   res.json({
        //     id,
        //     question,
        //     questionImage,
        //     correctAnswer,
        //     answerOptions,
        //     level,
        //     category,
        //     ancestorId,
        //     displayId,
        //   });
        // }
      }
    } else {
      res.json({ error: "Question not found" });
    }
  } catch (err) {
    next(err);
  }
});

//POST/api/questions/:singleQuestion ----- For admin to edit question
router.post("/:singleQuestionId", getToken, isAdmin, async (req, res, next) => {
  const qaId = req.params.singleQuestionId;
  try {
    const newQA = await Question_Answer.create(req.body);

    await Question_Answer.update(
      { status: "Inactive" },
      {
        where: {
          id: qaId,
        },
      }
    );
    res.json(newQA);
  } catch (err) {
    next(err);
  }
});

//POST/api/questions ----- For admin to add new question
router.post("/", getToken, isAdmin, async (req, res, next) => {
  try {
    console.log("REQ BODY", req.body);
    const newQA = await Question_Answer.create(req.body);
    res.json(newQA);
  } catch (err) {
    next(err);
  }
});

//DELETE/api/questions/:singleQuestionId ----- For admin to delete question
router.delete(
  "/:singleQuestionId",
  getToken,
  isAdmin,
  async (req, res, next) => {
    const qaId = +req.params.singleQuestionId;
    try {
      const singleQuestion = await Question_Answer.findByPk(qaId); //Step 1 -- Grab instance to get access to ancestorId

      if (singleQuestion.ancestorId !== null) {
        //Step 2A -- If a child is being deleted

        const allVersions = await Question_Answer.findAll({
          //Step 3 -- Grab all versions of this child version
          order: [["createdAt", "ASC"]],
          where: {
            [Op.or]: [
              { id: singleQuestion.id }, //get self
              { id: singleQuestion.ancestorId }, //get ancestor
              { ancestorId: singleQuestion.ancestorId }, //get siblings
            ],
          },
        });

        if (allVersions[allVersions.length - 1].id === qaId) {
          //Step 4 -- If deleting the latest child
          await allVersions[allVersions.length - 2].update({
            //Step 5 -- Update only second to latest sibling
            status: "Active",
          });
        }
      } else {
        //Step 2B -- If root ancestor is being deleted
        const allVersions = await Question_Answer.findAll({
          order: [["createdAt", "ASC"]],
          where: {
            [Op.or]: [
              { id: singleQuestion.id }, //get self
              { ancestorId: singleQuestion.id }, //get children
            ],
          },
        });

        if (allVersions.length > 1) {
          //Step 3 -- If multiple versions exist (as in if it has children)

          //4. Update children
          //SEE IF DISPLAYID NEEDS TO BE UPDATED ALSO. Note: Practically, we might see instances that have display id which is the id of an instance that no longer exists. Which means that this instance is a newer version of something old that got deleted. Based on the following update, ancestorId could exist. The displayId shows the fact that this instance had an ancestor before and is thus displayed on allQA page according to that ancestor's placement. Recall: DisplayId is set anytime a new version of a question is created so no need to update displayId of children in this update process.
          await Promise.all(
            allVersions.map((aVersion, idx) => {
              if (idx !== 1) {
                aVersion.update({ ancestorId: allVersions[1].id });
              }
            })
          );
        }
      }

      await Question_Answer.destroy({
        //Step 5 -- Delete row
        where: {
          id: qaId,
        },
      }); //This query only returns num of deletion
      res.json(qaId);
    } catch (err) {
      next(err);
    }
  }
);
