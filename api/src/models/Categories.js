const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("category", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emoji: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
