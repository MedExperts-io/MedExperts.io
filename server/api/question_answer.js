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
        "displayId",
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
    //Condition 1 - If instance exists
    if (singleQuestion) {
      //Condition 2A - IF ADMIN
      if (req.user.isAdmin) {
        if (singleQuestion.ancestorId !== null) {
          // If child
          const allVersions = await Question_Answer.findAll({
            order: [["createdAt", "DESC"]],
            where: {
              [Op.or]: [
                { id: singleQuestion.ancestorId }, //ancestor
                { ancestorId: singleQuestion.ancestorId }, //siblings
              ],
            },
            include: User_Question,
          });
          res.json(allVersions);
        } else {
          //If an ancestor
          //May Delete this extra query if URL system is established
          const allVersions = await Question_Answer.findAll({
            order: [["createdAt", "DESC"]],
            where: {
              [Op.or]: [
                { id: singleQuestion.id }, // self
                { ancestorId: singleQuestion.id }, //children
              ],
            },
            include: User_Question,
          });
          res.json(allVersions);
        }
      } //Condition 2B - IF STUDENT
      else {
        //Condition 3A - If student has responded to question
        if (singleQuestion.user_questions.length) {
          res.json(singleQuestion);
        } //Condition 3B - If student has not yet responded
        else {
          const {
            id,
            question,
            questionImage,
            answerOptions,
            level,
            category,
            ancestorId,
            displayId,
          } = singleQuestion;
          res.json({
            id,
            question,
            questionImage,
            answerOptions,
            level,
            category,
            ancestorId,
            displayId,
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

//EDIT QA ROUTE --- api/questions/:singleQuestionId
// Thru req.body, if ancestorId = null (q has no older versions), then attach id or req.params.id to ancestorId in frontend.
router.post("/:singleQuestionId", getToken, isAdmin, async (req, res, next) => {
  const qaId = req.params.singleQuestionId;
  //NEED TO ADD CODE FOR IMAGE UPLOAD
  console.log("REQ BODY FROM EDITQA", req.body);
  try {
    const newQA = await Question_Answer.create(req.body);
    console.log("Edited NEW QA CREATED", newQA);
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

//CREATE NEW QA ROUTE --- api/questions
// Admin submits form on all qa page
router.post("/", getToken, isAdmin, async (req, res, next) => {
  //NEED TO ADD CODE FOR IMAGE UPLOAD
  try {
    const newQA = await Question_Answer.create(req.body);
    console.log("Completely NEW QA CREATED", newQA);
    res.json(newQA);
  } catch (err) {
    next(err);
  }
});

//DELETE---api/questions/:singleQuestionId (Feature should be in single QA page)
router.delete(
  "/:singleQuestionId",
  getToken,
  isAdmin,
  async (req, res, next) => {
    const qaId = req.params.singleQuestionId;

    try {
      ////-----------PREVIOUS
      // const allVersions = await Question_Answer.findAll({
      //   order: [["createdAt", "ASC"]],
      //   where: {
      //     [Op.or]: [{ id: qaId }, { ancestorId: qaId }],
      //   },
      //   include: User_Question,
      // });
      // console.log("INITIAL ALL VERSIONS", allVersions);

      //---------NEW------grab all versions of what's coming
      // let singleQuestion = await Question_Answer.findOne({
      //   where: { id: qaId },
      //   include: {
      //     model: User_Question,
      //   },
      // });

      // const allVersions = await Question_Answer.findAll({
      //   order: [["createdAt", "ASC"]],
      //   where: {
      //     [Op.or]: [{ id: qaId }, { ancestorId: qaId }, {ancestorId: singleQuestionId}],
      //   },
      //   include: User_Question,
      // });
      // console.log("INITIAL ALL VERSIONS", allVersions = [1,...201,.. 202]);

      //If deleting root ancestor and it has children
      // if (allVersions[0].id === qaId && allVersions.length > 1) {
      //   const updateChildren = await Promise.all(
      //     allVersions.map((aVersion, idx) => {
      //       if (idx === 1) {
      //         aVersion.update({ ancestorId: null });
      //       } else {
      //         aVersion.update({ ancestorId: allVersions[1].id });
      //       }
      //     })
      //   );
      //   console.log(qaId, "UPDATED VERSIONS", allVersions);
      // }
      //else if(allVersions[allVersions.length-1].id === qaId && allVersions.length > 1){
      // const updateOthers = await allVersions[allVersions.length-2].update({ status: "Active" })
      //   console.log(qaId, "UPDATED VERSIONS", updateOthers);
      // }
      // }

      const deleteInstance = await Question_Answer.destroy({
        where: {
          id: qaId,
        },
      });

      // if (allVersions.length === 1) {
      res.json(qaId); //deleteInstance only sends num of deletion back
      // } else {
      //   res.json(allVersions[allVersions.length - 1]);
      // }
    } catch (err) {
      next(err);
    }
  }
);
