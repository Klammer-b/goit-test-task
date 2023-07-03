const Joi = require("joi");

const updateBookSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  author: Joi.string().min(3).max(100),
});

module.exports = updateBookSchema;
