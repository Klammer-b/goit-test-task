const express = require("express");
const cors = require("cors");
const { setupConnection } = require("./db/index");
const routes = require("./routes");
const { PORT } = require("./constants/env");

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  setupConnection();
  console.log(`Server is running on port ${PORT}`);
});
