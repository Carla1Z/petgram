const express = require("express");
const routes = require('./src/routes/index.js')
const app = express();

app.use('/api', routes)
app.listen(3001, () => {
  console.log("servidor escuchando en el puerto 3001");
});
