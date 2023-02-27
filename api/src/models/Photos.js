const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("photo", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
