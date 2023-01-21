


async function getTouristCorridors(req, res){
    const data = req.query;
    try{
        res.json({msj: "controller working!"});
    } catch (error){
        next(error);
    }
};

module.exports = { getTouristCorridors }