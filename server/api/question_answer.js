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
      attributes: ["id", "question", "questionImage", "answerOptions", "level", "category", "status", "displayId", "color"],
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
          const { id, question, questionImage, answerOptions, level, category, ancestorId, displayId } = singleQuestion;
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

//DELETE---api/questions/:singleQuestionId
router.delete("/:singleQuestionId", getToken, isAdmin, async (req, res, next) => {
  const qaId = +req.params.singleQuestionId; // example [1, 201, 202]
  try {
    //1. Grab instance to get access to ancestorId
    const singleQuestion = await Question_Answer.findByPk(qaId);

    //2a. If any child is being deleted
    if (singleQuestion.ancestorId !== null) {
      //3. Grab all versions of this child version
      console.log("qaID", qaId, "I am a child");
      const allVersions = await Question_Answer.findAll({
        order: [["createdAt", "ASC"]],
        where: {
          [Op.or]: [
            { id: singleQuestion.id }, //self
            { id: singleQuestion.ancestorId }, //ancestor
            { ancestorId: singleQuestion.ancestorId }, //siblings
          ],
        },
      });
      //4. If deleting the latest child
      if (allVersions[allVersions.length - 1].id === qaId) {
        console.log("qaID", qaId, "I am the latest child");
        //5. Update only second to latest sibling
        await allVersions[allVersions.length - 2].update({
          status: "Active",
          //displayId: singleQuestion.ancestorId, // Extra step in case of edge cases
        });
        console.log("UPDATING 2TOLAST STATUS TO ACTIVE", allVersions);
      }
    }
    //2b. If root ancestor is being deleted
    else {
      console.log("qaID", qaId, "I am root");
      const allVersions = await Question_Answer.findAll({
        order: [["createdAt", "ASC"]],
        where: {
          [Op.or]: [
            { id: singleQuestion.id }, // self
            { ancestorId: singleQuestion.id }, //children
          ],
        },
      });
      //3. If multiple versions exist as in if it has children
      if (allVersions.length > 1) {
        console.log("qaID", qaId, "I have children");
        //4. Update children
        //(SEE IF DISPLAYID NEEDS TO BE UPDATED ALSO. Note: Practically, we might see instances that have display id which is the id of an instance that no longer exists. Which means that this instance is a newer version of something old that got deleted. Based on the following update, ancestorId could exist. The displayId shows the fact that this instance had an ancestor before and is thus displayed on allQA page according to that ancestor's placement. Remember: DisplayId is set anytime a new version of a question is created so no need to update displayId of children in this update process.)
        await Promise.all(
          allVersions.map((aVersion, idx) => {
            if (idx !== 1) {
              aVersion.update({ ancestorId: allVersions[1].id });
            }
          })
        );
        console.log("UPDATING CHILDREN (NOT OLDEST CHILD)", allVersions);
      }
    }

    //5. Delete row
    await Question_Answer.destroy({
      //This query returns number of deletion
      where: {
        id: qaId,
      },
    });
    res.json(qaId);
  } catch (err) {
    next(err);
  }
});
