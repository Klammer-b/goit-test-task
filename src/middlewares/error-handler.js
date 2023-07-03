const errorHandler = async (error, req, res, next) => {
  res.status(500).send({ errors: error.message });
};

module.exports = errorHandler;
