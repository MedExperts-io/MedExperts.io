const Sequelize = require("sequelize");
const db = require("../db");

const User_Feedback = db.define("user_feedback", {
  userResponses: {
    type: Sequelize.JSONB,
  },
});

module.exports = User_Feedback;
