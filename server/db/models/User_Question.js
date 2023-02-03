const Sequelize = require("sequelize");
const db = require("../db");

const User_Question = db.define("user_question", {
  favorite: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  userInput: {
    type: Sequelize.TEXT,
  },
  answered: {
    type: Sequelize.ENUM(
      "right",
      "wrong"
      //"none"
    ),
  },
  userExpertise: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  },
  level: {
    type: Sequelize.STRING,
  },
});

module.exports = User_Question;
