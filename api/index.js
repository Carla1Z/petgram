const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("hola mundo")
})

app.listen(3001, () => {
  console.log("servidor escuchando en el puerto 3001");
});
