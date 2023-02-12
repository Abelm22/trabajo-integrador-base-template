const TouristCorridorService = require('../services/touristCorridor.service');


async function getTouristCorridors(req, res){
    try{
        const corridors = await TouristCorridorService.getCorridors();
        res.status(200).json(corridors);
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};



async function getTouristCorridor(req, res){
    
    try{
        const {id} = req.params;
        const corridor = await TouristCorridorService.getCorridorById(id);
        res.status(200).json(corridor);
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};



async function createTouristCorridor(req, res){
    
    try{
        const data = req.body;
        const corridor = await TouristCorridorService.createCorridor(data);
        res.status(200).json({
            code: 'OK',
            message: 'New Tourist corridor has been successfully created.'
        })
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};


async function editTouristCorridor(req, res){
    try{
        const {id} = req.params;
        const data = req.body;
        const corridor = await TouristCorridorService.editCorridorById(id, data);
        res.status(200).json({
            code: 'OK',
            message: 'Tourist corridor has been updated successfully.'
        });
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};



async function deleteTouristCorridor(req, res){
    
    try{
        const {id} = req.params;
        const corridor = await TouristCorridorService.deleteCorridorById(id);
        res.status(200).json({
            code: 'OK',
            message: 'Tourist corridor has been deleted successfully.'
        })
    } catch (error){
        res.status(500).json({
            message: "The server has encountered a situation that it does not know how to handle.",
          });
    }
};



module.exports = { 
    getTouristCorridors, 
    getTouristCorridor, 
    createTouristCorridor, 
    editTouristCorridor, 
    deleteTouristCorridor 
}