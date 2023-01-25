const DestinationService = require('../services/destinations.service');


async function getDestinations(req, res){
    try{
        const places = await DestinationService.getDestinations();
        res.json(places);
    } catch (error){
        throw error;
    }
};



async function getDestination(req, res){
    
    try{
        const {id} = req.params;
        const place = await DestinationService.getDestinationById(id);
        res.json(place);
    } catch (error){
        throw error;
    }
};



async function createDestination(req, res){
    
    try{
        const data = req.body;
        const place = await DestinationService.createDestination(data);
        res.json(place);
    } catch (error){
        throw error;
    }
};


async function editDestination(req, res){
    try{
        const {id} = req.params;
        const data = req.body;
        const place = await DestinationService.editDestinationById(id, data);
        res.json(place);
    } catch (error){
        throw error;
    }
};



async function deleteDestination(req, res){
    
    try{
        const {id} = req.params;
        const place = await DestinationService.deleteDestinationById(id);
        res.json(place);
    } catch (error){
        throw error;
    }
};



module.exports = { getDestinations, getDestination, createDestination, editDestination, deleteDestination }