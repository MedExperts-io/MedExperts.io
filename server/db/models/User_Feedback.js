const Sequelize = require("sequelize");
const db = require("../db");

const User_Feedback = db.define("user_feedback", {
  source: {
    type: Sequelize.ENUM(
      "Search Engine, (e.g. Google, Yahoo, Bing)",
      "LinkedIn",
      "Instagram",
      "Word of mouth (e.g. friend, colleague, family)"
    ),
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
    type: Sequelize.JSONB,
  },
  otherFeedback: {
    type: Sequelize.TEXT,
  },
  suggestedFeatures: {
    type: Sequelize.STRING,
  },
});

module.exports = User_Feedback;
