const { Photos } = require("../db.js");

async function getPhotos() {
  const photos = await Photos.findAll();
  if (photos.length) {
    return photos;
  } else {
    return "No existen fotos en la base de datos";
  }
}

module.exports = {
  getPhotos,
};
