const { Sequelize } = require("sequelize");
const {
  dbUser,
  dbPassword,
  dbHost,
  dbPort,
  dbName,
} = require("../utils/config.js");
// const { category, photo, user } = sequelize.model;

const categoryFactory = require("./models/Categories.js");
const photoFactory = require("./models/Photos.js");
const userFactory = require("./models/Users.js");

const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,
  {
    logging: false,
  }
);

const Categories = categoryFactory(sequelize);
const Photos = photoFactory(sequelize);
const Users = userFactory(sequelize);

module.exports = {
  conn: sequelize,
  Categories,
  Photos,
  Users,
};
