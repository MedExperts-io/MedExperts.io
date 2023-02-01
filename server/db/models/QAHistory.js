const Sequelize = require("sequelize");
const db = require("../db");

const QAHistory = db.define("qahistory", {
  question: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  questionImage: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
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
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  explanationLinks: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  level: {
    type: Sequelize.ENUM("Easy", "Medium", "Difficult"),
  },
  category: {
    type: Sequelize.STRING,
  },
  userQuestions: {
    type: Sequelize.ARRAY(Sequelize.JSON),
  },
});

module.exports = QAHistory;
