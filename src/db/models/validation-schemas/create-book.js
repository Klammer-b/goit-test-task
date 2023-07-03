const Joi = require("joi");

const createBookSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  author: Joi.string().min(3).max(100).required(),
});

module.exports = createBookSchema;
