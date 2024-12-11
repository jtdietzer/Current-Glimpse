// Schema for validating article data
const Joi = require('joi');

const articleSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    status: Joi.string().valid('verified', 'pending', 'not_verified', 'edited'),
});

module.exports = articleSchema;
