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
  questionImageAltText: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [],
  },
  answerOptions: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
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
  explanationImageAltText: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [],
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
      const rawValue = this.getDataValue("displayId");
      return rawValue
        ? rawValue
        : this.getDataValue("ancestorId")
        ? this.getDataValue("ancestorId")
        : this.getDataValue("id");
    },
  },
  color: {
    type: Sequelize.STRING,
    get() {
      if (this.getDataValue("level") === "Easy") {
        return "lightgreen";
      } else if (this.getDataValue("level") === "Moderate") {
        return "#f5ad27";
      } else {
        return "#f55b49";
      }
    },
  },
});

module.exports = Question_Answer;

//DisplayId middle argument of ancestorId maybe unnecessary as it only applies to fake data where ancestorId was manually inserted. Practically, anything without displayId means that it is a root instance and anything with displayId in db means that it has been created thru EditQA. Keep now in case of any edge cases I'm not thinking of. Remove this middle condition if no other edge cases.
