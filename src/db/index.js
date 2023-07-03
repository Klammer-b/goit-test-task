const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST } = require("../constants/env");

const setupConnection = () => {
  mongoose.connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/?retryWrites=true&w=majority`
  );
};

module.exports = {
  setupConnection,
};
