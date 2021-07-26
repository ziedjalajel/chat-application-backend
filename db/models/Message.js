const { DATE } = require("sequelize");
const { NOW } = require("sequelize");
const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    text: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    emoji: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  });
  // SequelizeSlugify.slugifyModel(Message, {
  //   source: ["text"],
  // });
  // relations
  return Message;
};
