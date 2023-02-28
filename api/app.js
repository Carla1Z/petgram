const express = require("express");
const routes = require("./src/routes/index.js");
const app = express();

app.use("/api", routes);

module.exports = app;