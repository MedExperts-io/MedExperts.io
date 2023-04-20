const Sequelize = require("sequelize");
const db = require("../db");

const User_Feedback = db.define("user_feedback", {
  userResponses: {
    type: Sequelize.JSONB,
  },
  source: {
    type: Sequelize.STRING,
  },
  suggestedFeatures: {
    type: Sequelize.STRING,
  },
  otherFeedback: {
    type: Sequelize.TEXT,
  },
  satisfaction: {
    type: Sequelize.JSON,
  },
});

module.exports = User_Feedback;
