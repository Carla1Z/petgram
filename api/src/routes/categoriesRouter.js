const { Router } = require("express");
const { getCategories } = require("../controllers/categoriesController.js");

const categoriesRouter = Router();

categoriesRouter.get("", async (req, res) => {
  try {
    const category = await getCategories();
    res.json(category);
  } catch (error) {
    console.log("Error en la ruta categories= " + error);
  }
});

module.exports = categoriesRouter;
