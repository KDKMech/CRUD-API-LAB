const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String, 
    author: String,
    genre: String,
    audiobookAvailable: Boolean,
    review: String
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;