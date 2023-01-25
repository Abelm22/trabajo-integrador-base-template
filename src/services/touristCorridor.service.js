const {TouristCorridor} = require('../models/touristCorridor.model');


async function getCorridors(){
    try {
        const touristCorridors = await TouristCorridor.find({});
        return touristCorridors;
    } catch (error) {
        throw error
    }
}




async function getCorridorById(id){
    try {
        const corridor = await TouristCorridor.findById(id);
        return corridor;
    } catch (error) {
        throw error
    }
}



async function createCorridor(data){
    try {
        const corridor = new TouristCorridor(data)
        return corridor.save();
    } catch (error) {
        throw error
    }
}



async function editCorridorById(id, data){
    try {
        const corridor = await TouristCorridor.findById(id);
        corridor.corridorName = data.corridorName;
        corridor.corridorDescription = data.corridorDescription;
        corridor.corridorImages.front = data.corridorImages.front;
        corridor.corridorImages.details = data.corridorImages.details;
        await corridor.save();
    } catch (error) {
        throw error
    }
}



async function deleteCorridorById(id){
    try {
        const corridor = await TouristCorridor.findByIdAndDelete(id);
        return corridor;
    } catch (error) {
        throw error
    }
}


module.exports = { getCorridors, getCorridorById, createCorridor, editCorridorById, deleteCorridorById }