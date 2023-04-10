const Sequelize = require("sequelize");
const db = require("../db");

const Topic_Question = db.define("topic_question", {
  topic: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  subcategory: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Topic_Question;
