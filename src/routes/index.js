const { Router } = require("express");
const booksRoutes = require("./books");
const errorHandler = require("../middlewares/error-handler");

const router = new Router();

router.use("/books", booksRoutes);

router.use(errorHandler);

module.exports = router;
