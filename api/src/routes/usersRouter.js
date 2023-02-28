const { Router } = require("express");
const { getUsers } = require("../controllers/usersController.js");

const usersController = Router();

usersController.get("", async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.log("Error en la ruta users= " + error);
  }
});

module.exports = usersController;
