const { Categories } = require("../db.js");

async function getCategories() {
  const category = await Categories.findAll();
  if (category.length) {
    return category;
  } else {
    return "No existen categorias en la base de datos";
  }
}

module.exports = {
  getCategories,
};
