const express = require('express');
const router = express.Router();
 
const {
    getTouristCorridors,
    getTouristCorridor,
    createTouristCorridor,
    editTouristCorridor,
    deleteTouristCorridor,
  } = require("../controllers/touristCorridor.controller");
  
router.get("/", getTouristCorridors);
router.get("/:id", getTouristCorridor);
router.post("/", createTouristCorridor);
router.patch("/:id", editTouristCorridor);
router.delete("/:id", deleteTouristCorridor);

module.exports = router;
