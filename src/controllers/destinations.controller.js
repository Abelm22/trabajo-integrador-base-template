const DestinationService = require('../services/destinations.service');


async function getDestinations(req, res){
    try{
        const places = await DestinationService.getDestinations();
        res.status(200).json(places);
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};



async function getDestination(req, res){
    
    try{
        const {id} = req.params;
        const place = await DestinationService.getDestinationById(id);
        res.status(200).json(place);
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};



async function getDestinationByCorridorId(req, res){
    
    try{
        const {id} = req.params;
        const place = await DestinationService.getDestinationByCorridor(id);
        res.status(200).json(place);
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};



async function createDestination(req, res){
    
    try{
        const data = req.body;
        const place = await DestinationService.createDestination(data);
        res.status(200).json({
            code: 'OK',
            message: 'New destination has been successfully created.'
        })
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};


async function editDestination(req, res){
    try{
        const {id} = req.params;
        const data = req.body;
        const place = await DestinationService.editDestinationById(id, data);
        res.status(200).json({
            code: 'OK',
            message: 'Destination has been updated successfully.'
        });
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};



async function deleteDestination(req, res){
    
    try{
        const {id} = req.params;
        const place = await DestinationService.deleteDestinationById(id);
        res.status(200).json({
            code: 'OK',
            message: 'Destination has been deleted successfully.'
        })
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};



module.exports = { 
    getDestinations, 
    getDestination, 
    getDestinationByCorridorId, 
    createDestination, 
    editDestination, 
    deleteDestination 
}