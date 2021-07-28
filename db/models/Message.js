module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    // REVIEW: why both text and emoji fields? emoji can be part of the text field
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

  return Message;
};
