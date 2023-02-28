const { Users } = require("../db.js");

async function getUsers() {
  const users = await Users.findAll();
  if (users.length) {
    return users;
  } else {
    return "No existen usuarios en la base de datos";
  }
}

module.exports = {
  getUsers,
};
