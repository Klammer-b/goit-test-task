const Joi = require("joi");

// can be replaced with custom validation using Mongo id checks
const bookIdParamsSchema = Joi.object({
  bookId: Joi.string().min(3).max(100).required(),
});

module.exports = bookIdParamsSchema;
