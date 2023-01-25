const TouristCorridorService = require('../services/touristCorridor.service');


async function getTouristCorridors(req, res){
    try{
        const corridors = await TouristCorridorService.getCorridors();
        res.json(corridors);
    } catch (error){
        throw error;
    }
};



async function getTouristCorridor(req, res){
    
    try{
        const {id} = req.params;
        const corridor = await TouristCorridorService.getCorridorById(id);
        res.json(corridor);
    } catch (error){
        throw error;
    }
};



async function createTouristCorridor(req, res){
    
    try{
        const data = req.body;
        const corridor = await TouristCorridorService.createCorridor(data);
        res.json(corridor);
    } catch (error){
        throw error;
    }
};


async function editTouristCorridor(req, res){
    try{
        const {id} = req.params;
        const data = req.body;
        const corridor = await TouristCorridorService.editCorridorById(id, data);
        res.json(corridor);
    } catch (error){
        throw error;
    }
};



async function deleteTouristCorridor(req, res){
    
    try{
        const {id} = req.params;
        const corridor = await TouristCorridorService.deleteCorridorById(id);
        res.json(corridor);
    } catch (error){
        throw error;
    }
};



module.exports = { getTouristCorridors, getTouristCorridor, createTouristCorridor, editTouristCorridor, deleteTouristCorridor }