
const Joi = require('joi')

const destinationSchema = Joi.object({
    destinationName: Joi.string().min(3).max(30).required(), 
    destinationDescription: Joi.string().min(3).max(250).required(),
    destinationCorridor: Joi.array().items(Joi.string().required()).required(),
    destinationImages: Joi.object({
       
        front: Joi.string().min(3).max(250).required(),
        details1: Joi.string().min(3).max(250).required(),
        details2: Joi.string().min(3).max(250).required(),

       
    }),
    destinationPosition: Joi.object({
       
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),

       
    }),
})

module.exports = { destinationSchema }
