const { Router } = require("express");
const validateBody = require("../middlewares/validate-body");
const createBookSchema = require("../db/models/validation-schemas/create-book");
const Book = require("../db/models/book");
const paginationSchema = require("../utils/schemas/pagination");
const validateQuery = require("../middlewares/validate-query");
const validateParams = require("../middlewares/validate-params");
const bookIdParamsSchema = require("../db/models/validation-schemas/book-id-params");
const updateBookSchema = require("../db/models/validation-schemas/update-book");

const router = new Router();

/* all mongoose models related can be moved to separate service, 
  didn't do it as it is test task */

router.get("/", [validateQuery(paginationSchema)], async (req, res, next) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;

    const skip = (page - 1) * limit;
    const books = await Book.find({}, null, { skip, limit });
    const count = await Book.count();

    res.send({ page, limit, count, books });
  } catch (err) {
    next(err);
  }
});

router.get(
  "/:bookId",
  [validateParams(bookIdParamsSchema)],
  async (req, res, next) => {
    try {
      const { bookId } = req.params;

      const book = await Book.findById(bookId);

      res.send(book);
    } catch (err) {
      next(err);
    }
  }
);

router.post("/", [validateBody(createBookSchema)], async (req, res, next) => {
  try {
    const { body } = req;

    const newBook = new Book(body);
    await newBook.save();

    res.status(201).send(newBook);
  } catch (error) {
    next(error);
  }
});

router.put(
  "/:bookId",
  [validateParams(bookIdParamsSchema), validateBody(updateBookSchema)],
  async (req, res, next) => {
    try {
      const { body } = req;
      const { bookId } = req.params;

      const updatedBook = await Book.findByIdAndUpdate(bookId, body, {
        new: true,
      });

      res.send(updatedBook);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:bookId",
  [validateParams(bookIdParamsSchema)],
  async (req, res, next) => {
    try {
      const { bookId } = req.params;

      const deletedBook = await Book.findByIdAndDelete(bookId);
      res.send({ _id: deletedBook.id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
