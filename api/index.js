const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { initData } = require("./src/controllers/initData.js");

conn
  .sync({
    force: true,
  })
  .then(() => {
    console.log("Base de datos conectada");
    server.listen(3001, () => {
      console.log("Servidor escuchando en el puerto 3001");
      initData();
    });
  });
