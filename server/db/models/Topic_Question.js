const Sequelize = require("sequelize");
const db = require("../db");
const Question_Answer = require("./Question_Answer");
const Topic = require("./Topic");
const Subcategory = require("./Subcategory");

const Topic_Question = db.define("topic_question", {
  // topicQuestionId: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  questionAnswerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Question_Answer,
      key: "id",
    },
  },
  topicId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Topic,
      key: "id",
    },
  },
  subcategoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Subcategory,
      key: "id",
    },
  },
  // indexes: [
  //   {
  //     unique: true,
  //     fields: ["questionAnswerId", "topicId", "subcategoryId"],
  //   },
  // ],
});

module.exports = Topic_Question;
