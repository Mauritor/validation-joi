const Joi = require('joi');

const schemaValidation = Joi.object({
    title: Joi.string().max(15).required(),
    nota: Joi.string().min(5).max(50)
});

module.exports = schemaValidation;

