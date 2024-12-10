const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 3000;
const Book = require('./models/Book');


 mongoose.connect(process.env.MONGO_URI)


// Middleware
app.use(cors())
app.use(express.json());

// Routes

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to: ${mongoose.connection.name}!!!`);
});

app.post('/books', async (req, res) => {
    const createdBook = await Book.create(req.body);
    res.json(createdBook);
})

app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
})

app.delete('/books/:id', async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.bookId);
    res.json(deletedBook);
})

app.put('/books/:id', async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(
        req.params.bookId,
        req.body,
        {new: true}
)})




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});