const Sequelize = require("sequelize");
const db = require("../db");

const Team = db.define("team", {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  picture: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  summary: {
    type: Sequelize.TEXT,
  },
  linkedIn: {
    type: Sequelize.STRING,
  },
});

module.exports = Team;
