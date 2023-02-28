const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/index.js");
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api", routes);

module.exports = app;
