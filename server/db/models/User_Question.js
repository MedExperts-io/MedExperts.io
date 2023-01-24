const Sequelize = require("sequelize");
const db = require("../db");

const User_Question = db.define("user_question", {
  favorite: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  userInput: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  answered: {
    type: Sequelize.ENUM("right", "wrong", "none"),
  },
  showAnswer: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User_Question;
