// const router = require("express").Router();
// const {
//   models: { Question_Answer, User_Question },
// } = require("../../../server/db");
// const { Op } = require("sequelize");
// module.exports = router;

// export const frequencySort = async (allQAs, type) => {
//   const allUserQs = await User_Question.findAll({
//     attributes: ["questionAnswerId"],
//     include: {
//       model: Question_Answer,
//       where: {
//         status: "Active",
//       },
//     },
//   });

//   let frequency = {};

//   for (let i = 0; i < allUserQs.length; i++) {
//     if (!frequency[allUserQs[i]["questionAnswerId"]]) {
//       frequency[allUserQs[i]["questionAnswerId"]] = 1;
//     } else {
//       frequency[allUserQs[i]["questionAnswerId"]]++;
//     }
//   }
//   for (let i = 0; i < allQAs.length; i++) {
//     if (!frequency[allQAs[i]["id"]]) {
//       frequency[allQAs[i]["id"]] = 1;
//     } else {
//       frequency[allQAs[i]["id"]]++;
//     }
//   }

//   const allQuestions = allQAs.map((question) => {
//     return {
//       ...question,
//       frequency: frequency[question.id],
//     };
//   });

//   const sortedByFrequency = allQuestions.sort((a, b) => b.frequency - a.frequency);
//   const sortedByFrequencyReverse = sortedByFrequency.slice().reverse();

//   console.log("sortedByFrequency in FILTERFUNCTION", sortedByFrequency);

//   if (type === "Most Answered") {
//     return sortedByFrequency;
//   } else if (type === "Least Answered") {
//     return sortedByFrequencyReverse;
//   }
// };

// export const percentCorrectSort = async (allQAs, type) => {
//   const allUserQs = await User_Question.findAll({
//     attributes: ["questionAnswerId"],
//     include: {
//       model: Question_Answer,
//       where: {
//         status: "Active",
//       },
//     },
//   });

//   let frequency = {};

//   for (let i = 0; i < allQAs.length; i++) {
//     if (!frequency[allQAs[i]["id"]]) {
//       frequency[allQAs[i]["id"]] = { right: 0, total: 0 };
//     }
//   }
//   for (let i = 0; i < allUserQs.length; i++) {
//     if (allUserQs[i]["answered"] === "right") {
//       frequency[allUserQs[i]["questionAnswerId"]]["right"]++;
//       frequency[allUserQs[i]["questionAnswerId"]]["total"]++;
//     } else {
//       frequency[allUserQs[i]["questionAnswerId"]]["total"]++;
//     }
//   }

//   const allQuestions = allQAs.map((question) => {
//     return {
//       ...question,
//       percentCorrect: Math.round((frequency[question.id]["right"] / frequency[question.id]["total"]) * 100),
//     };
//   });
//   const sortedByPercentCorrect = allQuestions.sort((a, b) => b.percentCorrect - a.percentCorrect);
//   const sortedByPercentCorrectReverse = sortedByPercentCorrect.slice().reverse();

//   console.log("sortedByPercentCorrect in FILTERFUNCTION", sortedByPercentCorrect);

//   if (type === "Most Correct") {
//     return sortedByPercentCorrect;
//   } else if (type === "Least Correct") {
//     return sortedByPercentCorrectReverse;
//   }
// };
