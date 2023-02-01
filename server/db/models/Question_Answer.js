const Sequelize = require("sequelize");
const db = require("../db");

const Question_Answer = db.define("question_answer", {
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
    type: Sequelize.ENUM("Pharmacology", "Anatomy", "Radiology", "Oncology", "Pulmonary Function", "Physiology", "Infectious Diseases", "Cardiology"),
  },
});

module.exports = Question_Answer;
