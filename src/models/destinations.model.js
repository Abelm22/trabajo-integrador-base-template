const mongoose = require('mongoose');
const { Schema } = mongoose;

const destinationsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    corridor: [{
        type: mongoose.Schema.Types.ObjectId, 
    	ref: 'touristCorridor'
    }],
    images: {
        front: { type: String, required: true },
        details1: { type: String, required: true },
        details2: { type: String, required: true }
    },
    position: {
        longitude: { type: Number, required: true },   
        latitude: { type: Number, required: true }
    }
});

const Destination = mongoose.model('destination', destinationsSchema);

module.exports = { Destination };