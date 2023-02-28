const { Router } = require("express");
const { getPhotos } = require("../controllers/photosController.js");

const photosRouter = Router();

photosRouter.get("", async (req, res) => {
  try {
    const photos = await getPhotos();
    res.json(photos);
  } catch (error) {
    console.log("Error en la ruta photos= " + error);
  }
});

module.exports = photosRouter;
