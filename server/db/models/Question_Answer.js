const Sequelize = require("sequelize");
const db = require("../db");

const Question_Answer = db.define(
  "question_answer",
  {
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
      type: Sequelize.ENUM("Easy", "Moderate", "Hard"),
    },
    category: {
      type: Sequelize.ENUM(
        "Pharmacology",
        "Pleural Diseases",
        "Critical Care",
        "Sleep",
        "Asthma",
        "Pulmonary Function Testing",
        "Pulmonary Vascular Disease",
        "Bronchiectasis",
        "Interstitial Lung Diseases",
        "Chronic Obstructive Pulmonary Disease",
        "Mediastinal Disorders",
        "Infection",
        "Lung Transplant",
        "Lung Cancer",
        "Other Pulmonary Diseases"
      ),
    },
    status: {
      type: Sequelize.ENUM("Active", "Inactive"),
      defaultValue: "Active",
    },
    displayId: {
      type: Sequelize.INTEGER,
      get() {
        const rawValue = this.getDataValue('displayId');
        return rawValue ? rawValue !== null : this.getDataValue('id');
      }
    },
  }
);

module.exports = Question_Answer;

