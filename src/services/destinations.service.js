const Joi = require('joi');
const { destinationSchema } = require('../models/schemas/destination.schema');
const {Destination} = require('../models/destinations.model');


async function getDestinations(){
    try {
        const places = await Destination.find({});
        return places;
    } catch (error) {
        throw error
    }
}




async function getDestinationById(id){
    try {
        const place = await Destination.findById(id);
        return place;
    } catch (error) {
        throw error
    }
}



async function getDestinationByCorridor(id){
    try {
        const place = await Destination.find({destinationCorridor:(id)});
        return place;
    } catch (error) {
        throw error
    }
}



async function createDestination(data){
    try {
        Joi.assert(data, destinationSchema) 
        const place = new Destination(data)
        return place.save();
    } catch (error) {
        throw error
    }
}



async function editDestinationById(id, data){
    try {
        Joi.assert(data, destinationSchema)
        const place = await Destination.findById(id);
        place.destinationName = data.destinationName;
        place.destinationDescription = data.destinationDescription;
        place.destinationCorridor = data.destinationCorridor;
        place.destinationImages.front = data.destinationImages.front;
        place.destinationImages.details1 = data.destinationImages.details1;
        place.destinationImages.details2 = data.destinationImages.details2;
        place.destinationPosition.latitude = data.destinationPosition.latitude;
        place.destinationPosition.longitude = data.destinationPosition.longitude;
        await place.save();
    } catch (error) {
        throw error
    }
}



async function deleteDestinationById(id){
    try {
        const place = await Destination.findByIdAndDelete(id);
        return place;
    } catch (error) {
        throw error
    }
}


module.exports = { 
    getDestinations,
    getDestinationById,
    getDestinationByCorridor,
    createDestination,
    editDestinationById,
    deleteDestinationById 
}