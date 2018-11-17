const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
// });

const bookSchema = new Schema({
    event: { type: String, required: true },
    category: String,
    description: String,
    address: String,
    website: String,
    date: { type: Date, default: Date.now }
});


const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
