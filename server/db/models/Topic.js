const Sequelize = require("sequelize");
const db = require("../db");

const Topic = db.define("topic", {
  topic: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  subcategory: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
});

module.exports = Topic;
