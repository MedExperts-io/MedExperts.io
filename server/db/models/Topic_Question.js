const Sequelize = require("sequelize");
const db = require("../db");

const Topic_Question = db.define("topic_question", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  // placeholder: {
  //   type: Sequelize.STRING,
  // },
});

module.exports = Topic_Question;
