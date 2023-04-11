const Sequelize = require("sequelize");
const db = require("../db");

const Subcategory_Topic_Question = db.define("subcategory_topic_question", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  placeholder: {
    type: Sequelize.STRING,
  },
});

module.exports = Subcategory_Topic_Question;
