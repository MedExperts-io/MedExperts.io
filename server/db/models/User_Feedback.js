const Sequelize = require("sequelize");
const db = require("../db");

const User_Feedback = db.define("user_feedback", {
  source: {
    type: Sequelize.STRING,
  },
  frequency: {
    type: Sequelize.ENUM(
      "Daily",
      "Several times a week",
      "Once a week",
      "Several times a month",
      "Once a month",
      "Rarely",
      "This is my first time"
    ),
  },
  satisfaction: {
    type: Sequelize.JSON,
  },
  otherFeedback: {
    type: Sequelize.TEXT,
  },
  suggestedFeatures: {
    type: Sequelize.STRING,
  },
});

module.exports = User_Feedback;
