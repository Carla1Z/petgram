const { Categories, Users, Photos } = require("../db.js");
const { categories } = require("../initData/categoriesData.js");
const { photos } = require("../initData/photosData.js");
const { users } = require("../initData/usersData.js");

async function initData() {
  const initCategories = await Categories.findAll();
  if (!initCategories.length) await Categories.bulkCreate(categories);

  const initUsers = await Users.findAll();
  if (!initUsers.length) await Users.bulkCreate(users);

  const initPhotos = await Photos.findAll();
  if (!initPhotos.length) await Photos.bulkCreate(photos);
}

module.exports = {
  initData,
};
