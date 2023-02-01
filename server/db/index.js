//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Password_Reset = require("./models/Password_Reset");
const Question_Answer = require("./models/Question_Answer");
const User_Question = require("./models/User_Question");
const QAHistory = require("./models/QAHistory");

//-----------------Super Many-to-Many Associations------------------------------
User.belongsToMany(Question_Answer, { through: User_Question }); //onUpdate/onDelete = cascade
Question_Answer.belongsToMany(User, { through: User_Question }); //onUpdate/onDelete = cascade
User_Question.belongsTo(Question_Answer); //FK in User_Question
User_Question.belongsTo(User); //FK in User_Question
User.hasMany(User_Question);
Question_Answer.hasMany(User_Question);

Question_Answer.hasMany(QAHistory); //FK in QAHistory, onUpdate = cascade, onDelete = set null
QAHistory.belongsTo(Question_Answer); //FK in QAHistory, onUpdate = cascade, onDelete = set null

module.exports = {
  db,
  models: {
    User,
    Question_Answer,
    User_Question,
    Password_Reset,
    QAHistory,
  },
};
