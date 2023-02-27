const { Router } = require("express");

const categoriesRouter = Router();

categoriesRouter.get("", async (req, res) => {
  try {
    res.send("categorias");
  } catch (error) {
    console.log("Error en la ruta categories= " + error);
  }
});

module.exports = categoriesRouter;
