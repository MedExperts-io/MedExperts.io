const Sequelize = require("sequelize");
const db = require("../db");

const Subcategory = db.define("subcategory", {
  subcategory: {
    type: Sequelize.STRING,
  },
});

module.exports = Subcategory;
