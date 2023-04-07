const { Router } = require("express");

const validateNewUser = require("../midllewares/validateNewUser");
const createUsers = require("../controllers/users/createUsers");
const sessionsUsers = require("../controllers/users/sessionsUsers");

const usersRoutes = new Router();

usersRoutes.post("/users", validateNewUser, createUsers);
usersRoutes.post("/sessions", sessionsUsers);

module.exports = usersRoutes;
