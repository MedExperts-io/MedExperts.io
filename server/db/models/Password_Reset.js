const Sequelize = require("sequelize");
const db = require("../db");

const Password_Reset = db.define("password_reset", {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
    allowNull: false,
  },
  uid: {
    type: Sequelize.STRING,
    unique: true,
  },
  token: {
    type: Sequelize.STRING,
  },
  expiration: {
    type: Sequelize.DATE,
  },
  used: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Password_Reset;
