const { Router } = require("express");

const createPlaces = require("../controllers/places/createPlaces");
const getPlaces = require("../controllers/places/getPlaces");
const deletePlaces = require("../controllers/places/deletePlaces");
const alterPlaces = require("../controllers/places/alterPlaces");
const validateToken = require("../midllewares/validateToken");

const tasksRoutes = new Router();

tasksRoutes.post("/places", validateToken, createPlaces);
tasksRoutes.get("/places", validateToken, getPlaces);
tasksRoutes.delete("/places/:id", validateToken, deletePlaces);
tasksRoutes.put("/places/:id", validateToken, alterPlaces);

module.exports = tasksRoutes;
