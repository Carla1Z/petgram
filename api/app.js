const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/index.js");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api", routes);

app.use((err, req, res, next) => {
  let error = {};
  error.msg = err.msg || err;
  error.status = err.status || 500;
  res.status.send(error);
});

module.exports = app;
