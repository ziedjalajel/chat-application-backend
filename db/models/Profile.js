const sequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
  // REVIEW: Profile not Profiles
  const Profiles = sequelize.define("Profile", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    // REVIEW: You dont need to have the username in both user and profile
    username: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    profileImage: {
      type: DataTypes.STRING,
    },
    // REVIEW: isOnline not OnLine
    isOnLine: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  sequelizeSlugify.slugifyModel(Profiles, {
    source: ["username"],
  });
  return Profiles;
};
