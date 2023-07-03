const validate = (target) => (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req[target], { abortEarly: false });

    next();
  } catch (err) {
    res.status(400).send({ errors: err.message });
  }
};

module.exports = validate;
