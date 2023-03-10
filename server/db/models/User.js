const Sequelize = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 5;

const User = db.define("user", {
  tempId: {
    type: Sequelize.STRING,
    unique: true,
  },
  verificationToken: {
    type: Sequelize.STRING,
    unique: true,
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  school: {
    type: Sequelize.STRING,
  },
  expertise: {
    type: Sequelize.ENUM(
      "Student",
      "Resident",
      "Fellow",
      "Physician Assistant",
      "Nurse",
      "Nurse Practitioner",
      "Pharmacist",
      "Internal Med",
      "Other"
    ),
  },
});

module.exports = User;

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

/**
 * classMethods
 */
User.authenticate = async function ({ email, password }) {
  const user = await User.findOne({ where: { email, status: true } });
  if (!user) {
    const error = Error(
      "We couldn't find your MedExperts account. Please make sure you entered your email address correctly."
    );
    error.status = 401;
    throw error;
  } else if (user && !(await user.correctPassword(password))) {
    const error = Error("Incorrect password");
    error.status = 401;
    throw error;
  } else return user.generateToken();
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id);
    if (!user) {
      throw "nooo";
    }
    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

/**
 * hooks
 */
const hashPassword = async (user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
