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



async function createDestination(data){
    try {
        const place = new Destination(data)
        return place.save();
    } catch (error) {
        throw error
    }
}



async function editDestinationById(id, data){
    try {
        const place = await Destination.findById(id);
        place.name = data.name;
        place.description = data.description;
        place.corridor = data.corridor;
        place.images.front = data.images.front;
        place.images.details1 = data.images.details1;
        place.images.details2 = data.images.details2;
        place.position.latitude = data.position.latitude;
        place.position.longitude = data.position.longitude;
        await corridor.save();
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


module.exports = { getDestinations, getDestinationById, createDestination, editDestinationById, deleteDestinationById }