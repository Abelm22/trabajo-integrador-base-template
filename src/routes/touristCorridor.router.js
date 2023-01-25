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
router.post("/create", createTouristCorridor);
router.patch("/edit/:id", editTouristCorridor);
router.delete("/delete/:id", deleteTouristCorridor);

module.exports = router;
