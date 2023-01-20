const express = require('express');
const router = express.Router();


const {
    getDestinations,
    getDestination,
    getDestinationByCorridor,
    createDestination,
    editDestination,
    deleteDestination,
  } = require("../controllers/destinations.controller");
  
route.get("/", getDestinations);
route.get("/:id", getDestination);
route.get("/:corridor", getDestinationByCorridor);
route.post("/", createDestination);
route.patch("/:id", editDestination);
route.delete("/:id", deleteDestination);

module.exports = router;
