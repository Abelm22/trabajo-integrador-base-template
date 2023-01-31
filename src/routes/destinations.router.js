const express = require('express');
const router = express.Router();


const {
    getDestinations,
    getDestination,
    getDestinationByCorridorId,
    createDestination,
    editDestination,
    deleteDestination,
  } = require("../controllers/destinations.controller");
  
router.get("/", getDestinations);
router.get("/:id", getDestination);
router.get("/corridor/:id", getDestinationByCorridorId);
router.post("/create", createDestination);
router.patch("/:id", editDestination);
router.delete("/:id", deleteDestination);

module.exports = router;
