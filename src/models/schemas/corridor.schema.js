
const Joi = require('joi')

const corridorSchema = Joi.object({
    corridorName: Joi.string().min(3).max(30).required(), 
    corridorDescription: Joi.string().min(3).max(250).required(),
    corridorImages: Joi.object({
       
        front: Joi.string().min(3).max(250).required(),
        details: Joi.string().min(3).max(250).required(),

       
    })
})

module.exports = { corridorSchema }
