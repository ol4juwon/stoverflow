"use strict"

const Joi = require('@hapi/joi')
exports.validate =  (req,res,next) => {
    console.log("Before Validating ===> ", req.body)
    const schema = Joi.object( {
        username: Joi.string().min(4).required(),
        question: Joi.string().required(),
        category: Joi.string().min(1).required(),
        tags: Joi.array().items(Joi.string()).min(1).required(),
    })

    const {error,value} = schema.validate(req.body)
    console.log("After validating",value)
    if(error){
        return createErrorResponse(res, error.details[0].message.replace(/['"]/g,''), 422);
    }
    return next();
}
