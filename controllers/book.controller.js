const Book = require("../models/book.models");
const Student = require("../models/student.model");
const Attendant = require("../models/attendant.models");
const asyncHandler = require("../utils/asyncHandler");

/**
 *  @desc  Create a new book
 * @route POST /books 
 */

const createBook = asyncHandler(async (req, res) => {
    const book = await Book.create({
        title: req.body.title,
        isbn: req.body.isbn,
        authors: req.body.authors,
        status: "IN",
    });

    res.status(201).json({
        status: "success",
        data: book,
    });
});

/**
 * @desc Get all books
 * @route GET /books
 */

const getAllBooks = asyncHandler(async (req, res) => {
    const books = await Book.find()
    .populate("authors")
    .populate("borrowedBy")
    .populate("issuedBy");
    res.status(200).json({
        success: true,
        count: books.length,
        data: books,
    });
});

/**
 * @desc Get single book 
 * @route GET /books/:id
 */

const getBookById = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)
    .populate("authors")
    .populate("borrowedBy")
    .populate("issuedBy");
    if (!book) {
        return res.status(404);
        throw new Error("Book not found");
        };

    res.status(200).json({
        success: true,
        data: book,
    });
});

/** 
 * @desc Borrow a book
 * @route POST /books/:id/borrow
 */

const borrowBook = asyncHandler(async (req, res) => {
    const { studentId, attendantId, returnDate } = req.body;

    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(404);
        throw new Error("Book not found");
    }

    if (book.status === "OUT") {
        res.status(400);
        throw new Error("Book is already borrowed");
    }

    const student = await Student.findById(studentId);
    if (!student) {
        res.status(404);
        throw new Error("Student not found");
    }
    const attendant = await Student.findById(attendantId);
    if (!attendant) {
        res.status(404);
        throw new Error("Attendant not found");
    }

        

    book.status = "OUT";
    book.borrowedBy = student._id;
    book.issuedBy = attendant._id;
    book.returnDate = returnDate;

    await book.save();

    res.status(200).json({
        success: true,
        message: "Book issued successfully",
        data: book,
    });
});

/** 
 * @desc Return a book
 * @route POST /books/:id/return
 */

const returnBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(404);
        throw new Error("Book not found");
    }

    if (book.status === "IN") {
        res.status(400);
        throw new Error("Book is not currently borrowed");
    }

    book.status = "IN";
    book.borrowedBy = null;
    book.issuedBy = null;
    book.returnDate = null;

    await book.save();

    res.status(200).json({
        success: true,
        message: "Book returned successfully",
        data: book,
    });
});


module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    borrowBook,
    returnBook,
};