//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Password_Reset = require("./models/Password_Reset");
const Question_Answer = require("./models/Question_Answer");
const User_Question = require("./models/User_Question");
const User_Feedback = require("./models/User_Feedback");

//-----------------Super Many-to-Many Associations------------------------------
User.belongsToMany(Question_Answer, { through: User_Question }); //---onUpdate/onDelete = cascade
Question_Answer.belongsToMany(User, { through: User_Question }); //---onUpdate/onDelete = cascade
User_Question.belongsTo(Question_Answer); //--------------------------Foreign Key in User_Question
User_Question.belongsTo(User); //-------------------------------------Foreign Key in User_Question
User.hasMany(User_Question);
Question_Answer.hasMany(User_Question);

//Feedback Survey Additions
User.hasMany(User_Feedback);
User_Feedback.belongsTo(User);

Question_Answer.hasMany(Question_Answer, {
  // onDelete = SET NULL
  as: "newVersions",
  foreignKey: "ancestorId",
});
Question_Answer.belongsTo(Question_Answer, {
  as: "ancestor",
  foreignKey: "ancestorId",
});

module.exports = {
  db,
  models: {
    User,
    Question_Answer,
    User_Question,
    Password_Reset,
    User_Feedback,
  },
};
