const app = require("./app.js");
const { conn } = require("./src/db.js");

conn.sync({
    force: true,
  }).then(() => {
    console.log("Base de datos conectada");
    app.listen(3001, () => {
      console.log("Servidor escuchando en el puerto 3001");
    });
  });
