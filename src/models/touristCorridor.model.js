const mongoose = require('mongoose');
const { Schema } = mongoose;

const touristCorridorSchema = new Schema({
  corridorName:  { type: String, required: true }, 
  corridorDescription: { type: String, required: true },
  corridorImages: {
    front: { type: String, required: true },
    details: { type: String, required: true }
  }
});

const TouristCorridor = mongoose.model('touristCorridor', touristCorridorSchema);

module.exports = { TouristCorridor };