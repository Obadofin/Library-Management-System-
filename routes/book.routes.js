const express = require('express');
const router = express.Router();

const {
    createBook,
    getAllBooks,
    getBookById,
    borrowBook,
    returnBook,
} = require('../controllers/book.controller');


//Create a new book
router.post('/', createBook);

//Get all books
router.get('/', getAllBooks);

//Get single book
router.get('/:id', getBookById);

//Borrow a book
router.post('/:id/borrow', borrowBook);

//Return a book
router.post('/:id/return', returnBook);

module.exports = router;
