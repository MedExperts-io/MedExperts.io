const router = require("express").Router();
const {
  models: { User, Question_Answer, User_Question },
} = require("../db");
const { Op } = require("sequelize");
module.exports = router;

const { getToken, isAdmin } = require("./userCheckMiddleware");

// -----For admin's dashboard analytics (aggregate)
router.get("/", async (req, res, next) => {
  try {
    const allUserQs = await User_Question.findAll();
    res.json(allUserQs);
  } catch (err) {
    next(err);
  }
});

// --- For logged in student user's dashboard analytics
router.get("/:userId", async (req, res, next) => {
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
router.get("/expertise/:userExpertise", async (req, res, next) => {
  try {
    const expertise = req.params.userExpertise;
    const allUserQs = await User_Question.findAll({
      where: { userExpertise: expertise },
    });
    const unique = [...new Map(allUserQs.map((m) => [m.questionAnswerId, m])).values()];
    const uniqueQuestionIds = unique.map((question) => question.questionAnswerId);
    const questionsByExpertise = await Question_Answer.findAll({
      where: {
        id: {
          [Op.in]: uniqueQuestionIds,
        },
      },
    });

    res.json(questionsByExpertise);
  } catch (err) {
    next(err);
  }
});

// SCENARIO
// When user clicks "Favorite" button, then make axios.put call
// When user submits response, then make axios.post call

// PUT -- api/user_questions/:userId
router.put("/:userId", async (req, res, next) => {
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
router.post("/:userId", async (req, res, next) => {
  const uId = req.params.userId;
  // const qaId = req.body.questionAnswerId;
  // const entry = req.body.userInput;
  // const answerCheck = req.body.answered;
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
