const router = require("express").Router();
const {
  models: { User, Question_Answer, User_Question },
} = require("../db");
const { Op } = require("sequelize");
module.exports = router;

const { getToken, isAdmin } = require("./userCheckMiddleware");

// -----For admin's dashboard analytics (aggregate)
router.get("/", getToken, isAdmin, async (req, res, next) => {
  try {
    const allUserQs = await User_Question.findAll({});
    res.json(allUserQs);
  } catch (err) {
    next(err);
  }
});

router.get("/frequency", getToken, isAdmin, async (req, res, next) => {
  try {
    const allUserQs = await User_Question.findAll({
      attributes: ["questionAnswerId"],
      include: {
        model: Question_Answer,
        where: {
          status: "Active",
        },
      },
    });
    const allQAs = await Question_Answer.findAll({
      where: {
        status: "Active",
      },
    });
    let frequency = {};

    for (let i = 0; i < allUserQs.length; i++) {
      if (!frequency[allUserQs[i]["questionAnswerId"]]) {
        frequency[allUserQs[i]["questionAnswerId"]] = 1;
      } else {
        frequency[allUserQs[i]["questionAnswerId"]]++;
      }
    }
    for (let i = 0; i < allQAs.length; i++) {
      if (!frequency[allQAs[i]["id"]]) {
        frequency[allQAs[i]["id"]] = 1;
      } else {
        frequency[allQAs[i]["id"]]++;
      }
    }

    const questionsAndFrequency = [allQAs, frequency];

    res.json(questionsAndFrequency);
  } catch (err) {
    next(err);
  }
});

router.get("/percent_correct", getToken, isAdmin, async (req, res, next) => {
  try {
    const allUserQs = await User_Question.findAll({
      attributes: ["questionAnswerId", "answered"],
      include: {
        model: Question_Answer,
        where: {
          status: "Active",
        },
      },
    });
    const allQAs = await Question_Answer.findAll({
      where: {
        status: "Active",
      },
    });
    let frequency = {};

    for (let i = 0; i < allQAs.length; i++) {
      if (!frequency[allQAs[i]["id"]]) {
        frequency[allQAs[i]["id"]] = { right: 0, total: 0 };
      }
    }
    for (let i = 0; i < allUserQs.length; i++) {
      if (allUserQs[i]["answered"] === "right") {
        frequency[allUserQs[i]["questionAnswerId"]]["right"]++;
        frequency[allUserQs[i]["questionAnswerId"]]["total"]++;
      } else {
        frequency[allUserQs[i]["questionAnswerId"]]["total"]++;
      }
    }

    const questionsPercentCorrect = [allQAs, frequency];

    res.json(questionsPercentCorrect);
  } catch (err) {
    next(err);
  }
});

router.get("/all_active", getToken, isAdmin, async (req, res, next) => {
  try {
    const allUserQs = await User_Question.findAll({
      attributes: ["questionAnswerId", "answered"],
      include: {
        model: Question_Answer,
        where: {
          status: "Active",
        },
      },
    });
    const allQAs = await Question_Answer.findAll({
      where: {
        status: "Active",
      },
    });

    const activeQuestions = [allQAs, allUserQs];

    res.json(activeQuestions);
  } catch (err) {
    next(err);
  }
});

// --- For logged in student user's dashboard analytics
router.get("/:userId", getToken, async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const allUserQs = await User_Question.findAll({
      where: { userId: userId },
    });
    res.json(allUserQs);
  } catch (err) {
    next(err);
  }
});

// --- For logged in Admin's dashboard analytics.
// Finds all questions answered by users of a specific expertise.
router.get("/expertise/all", getToken, isAdmin, async (req, res, next) => {
  try {
    let questionsByExpertise = { Student: [], Resident: [], Fellow: [], "Physician Assistant": [], Nurse: [], "Nurse Practitioner": [], Pharmacist: [], Other: [] };
    const expertises = ["Student", "Resident", "Fellow", "Physician Assistant", "Nurse", "Nurse Practitioner", "Pharmacist", "Internal Med", "Other"];

    for (let i = 0; i < expertises.length; i++) {
      const allUserQs = await User_Question.findAll({
        where: { userExpertise: expertises[i] },
      });
      const unique = [...new Map(allUserQs.map((m) => [m.questionAnswerId, m])).values()];
      const uniqueQuestionIds = unique.map((question) => question.questionAnswerId);
      const questionByExpertise = await Question_Answer.findAll({
        where: {
          id: {
            [Op.in]: uniqueQuestionIds,
          },
        },
      });
      questionsByExpertise[expertises[i]] = questionByExpertise;
    }
    res.json(questionsByExpertise);
  } catch (err) {
    next(err);
  }
});

// SCENARIO
// When user clicks "Favorite" button, then make axios.put call
// When user submits response, then make axios.post call

// PUT -- api/user_questions/:userId
router.put("/:userId", getToken, async (req, res, next) => {
  const uId = req.params.userId;
  const qaId = req.body.questionAnswerId;

  try {
    const [row, isNew] = await User_Question.findOrCreate({
      where: {
        userId: uId,
        questionAnswerId: qaId,
      },
    });

    if (isNew) {
      //ROW NEVER EXISTED BEFORE
      const [, favorited] = await User_Question.update(
        {
          favorite: true,
        },
        {
          where: {
            userId: uId,
            questionAnswerId: qaId,
          },
          returning: true,
          plain: true,
        }
      );
      console.log("FAVORITED row", favorited);
      res.json(favorited);
    } else {
      // ROW EXISTED ALREADY

      if (row.favorite === true && row.userInput) {
        //Can have existed before due to having both user input and favorited
        const [, removeFavorite] = await User_Question.update(
          {
            favorite: false,
          },
          {
            where: {
              userId: uId,
              questionAnswerId: qaId,
            },
            returning: true,
            plain: true,
          }
        );
        console.log("Removed Favorited", removeFavorite);
        res.json(removeFavorite);
      } else if (row.favorite === false && row.userInput) {
        //Can have existed before due to having user input and not favorited
        const [, favorited] = await User_Question.update(
          {
            favorite: true,
          },
          {
            where: {
              userId: uId,
              questionAnswerId: qaId,
            },
            returning: true,
            plain: true,
          }
        );
        console.log("FAVORITED row", favorited);
        res.json(favorited);
      } else if (row.favorite === true && row.userInput === null) {
        //Can have existed before due to having no user input and favorited
        const deletedRow = await User_Question.destroy({
          where: {
            userId: uId,
            questionAnswerId: qaId,
          },
        });
        res.json(deletedRow); //only sends num of deletion back
      }
    }
  } catch (err) {
    next(err);
  }
});

// POST -- api/user_questions/:userId
router.post("/:userId", getToken, async (req, res, next) => {
  const uId = req.params.userId;
  const { questionAnswerId, userInput, answered, category, level, userExpertise } = req.body;
  console.log("REQ BODY ITEMS", questionAnswerId, userInput, answered, category, level, userExpertise);

  try {
    //If right or wrong answer will be calculated on the frontend
    const [row, isNew] = await User_Question.findOrCreate({
      where: {
        userId: uId,
        questionAnswerId: questionAnswerId,
      },
    });

    const [, userInputEntry] = await User_Question.update(
      {
        userInput: userInput,
        answered: answered,
        category: category,
        level: level,
        userExpertise: userExpertise,
      },
      {
        where: {
          userId: uId,
          questionAnswerId: questionAnswerId,
        },
        returning: true,
        plain: true,
      }
    );
    console.log("USER RESPONSE ROW", userInputEntry);
    res.json(userInputEntry);
  } catch (err) {
    next(err);
  }
});
