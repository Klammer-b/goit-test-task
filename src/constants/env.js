const dotenv = require("dotenv");

dotenv.config();

const PORT = 5500 || process.env.PORT;

const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST } = process.env;

if (!MONGO_USER || !MONGO_PASSWORD || !MONGO_HOST) {
  throw new Error("Please check mongoDB env vars. Some of them are missing");
}

module.exports = {
  PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_HOST,
};
