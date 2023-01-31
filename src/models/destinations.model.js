const mongoose = require('mongoose');
const { Schema } = mongoose;



const destinationSchema = new Schema({
    destinationName: { type: String, required: true },
    destinationDescription: { type: String, required: true },
    destinationCorridor: [{
        type: mongoose.Schema.Types.ObjectId, 
    	ref: 'touristCorridor'
    }],
    destinationImages: {
        front: { type: String, required: true },
        details1: { type: String, required: true },
        details2: { type: String, required: true }
    },
    destinationPosition: {
        longitude: { type: Number, required: true },   
        latitude: { type: Number, required: true }
    }
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = { Destination };