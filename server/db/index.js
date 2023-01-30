//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Password_Reset = require("./models/Password_Reset")
const Question_Answer = require("./models/Question_Answer");
const User_Question = require("./models/User_Question");

//associations could go here!
User.belongsToMany(Question_Answer, { through: User_Question });
Question_Answer.belongsToMany(User, { through: User_Question });
User_Question.belongsTo(Question_Answer);
User_Question.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Question_Answer,
    User_Question,
    Password_Reset
  },
};
