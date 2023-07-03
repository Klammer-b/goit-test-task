const mongoose = require("mongoose");

const Book = mongoose.model("Book", { title: String, author: String });

module.exports = Book;
