//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Password_Reset = require("./models/Password_Reset");
const Question_Answer = require("./models/Question_Answer");
const User_Question = require("./models/User_Question");
const Topic_Question = require("./models/Topic_Question");
const Topic = require("./models/Topic");
const Subcategory = require("./models/Subcategory");

//Super Many-to-Many Associations
User.belongsToMany(Question_Answer, { through: User_Question }); //onUpdate/onDelete = cascade
Question_Answer.belongsToMany(User, { through: User_Question }); //onUpdate/onDelete = cascade
User_Question.belongsTo(Question_Answer); //Foreign Key in User_Question
User_Question.belongsTo(User); //Foreign Key in User_Question
User.hasMany(User_Question);
Question_Answer.hasMany(User_Question);

Topic.belongsToMany(Question_Answer, { through: Topic_Question }); //onUpdate/onDelete = cascade
Question_Answer.belongsToMany(Topic, { through: Topic_Question }); //onUpdate/onDelete = cascade
Topic_Question.belongsTo(Question_Answer); //Foreign Key in User_Question
Topic_Question.belongsTo(Topic); //Foreign Key in User_Question
Topic.hasMany(Topic_Question);
Question_Answer.hasMany(Topic_Question);

//DRAFT FOR MANY-TO-MANY ASSOCIATION WITH SUBCATEGORY TABLE
// Subcategory.belongsToMany(Topic, { through: Topic_Question });
// Topic.belongsToMany(Subcategory, { through: Topic_Question });
// Topic_Question.belongsTo(Subcategory);
// Topic_Question.belongsTo(Topic);
// Subcategory.hasMany(Topic);
// Topic.hasMany(Subcategory);

// FROM CHATGPT
// Question_Answer.belongsToMany(Subcategory, { through: Topic_Question, foreignKey: 'qaId' });
// Subcategory.belongsToMany(Question_Answer, { through: Topic_Question, foreignKey: 'subcatId' });
// Topic.belongsToMany(Subcategory, { through: Topic_Question, foreignKey: 'topicId' });
// Subcategory.belongsToMany(Topic, { through: Topic_Question, foreignKey: 'subcatId' });

//EXAMPLE
//What is cancer?
//topics: Pulmonary, Cancer
//subcategories: Lungs, Metastatic Disease


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
    Topic,
    Topic_Question,
    Subcategory,
  },
};
