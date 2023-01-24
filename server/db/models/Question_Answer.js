const Sequelize = require("sequelize");
const db = require("../db");

const Question_Answer = db.define("question_answer", {
  question: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  questionImage: {
    type: Sequelize.STRING,
  },
  answerOptions: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  correctAnswer: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  explanation: {
    type: Sequelize.TEXT,
  },
  explanationImage: {
    type: Sequelize.STRING,
  },
  explanationLinks: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  level: {
    type: Sequelize.ENUM("easy", "medium", "difficult"),
  },
  category: {
    type: Sequelize.ENUM(
      "pharmacology",
      "anatomy",
      "radiology",
      "oncology",
      "pf7",
      "physiology",
      "infectiousDiseases"
    ),
  },
});

module.exports = Question_Answer;
