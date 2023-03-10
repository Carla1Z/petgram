const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      favs: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
