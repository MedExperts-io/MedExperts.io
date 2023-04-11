const Sequelize = require("sequelize");
const db = require("../db");

const Topic_Question = db.define("topic_question", {
  placeholder: {
    type: Sequelize.STRING,
  },
});

module.exports = Topic_Question;
