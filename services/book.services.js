//important for  borrow/return logic

const Book = require('../models/Book');
const student = require('../models/student.models');
const Attendant = require('../models/attendant.models');

const issueBook = async ({bookId, studentId, attendantId, returnDate}) => 
{
    const book = await Book.findById(bookId);
    if (!book) {
        throw new Error("Book not found");
    }
    
    if (book.status === "OUT") {
        throw new Error("Book is already borrowed");
    }

    const student = await student.findById(studentId);
    if (!student) {
        throw new Error("Student not found");
    }

    const attendant = await Attendant.findById(attendantId);
    if (!attendant) {
        throw new Error("Attendant not found");
    }

    book.status = "OUT";
    book.borrowedBy = student._id;
    book.issuedBy = attendant._id;
    book.returnDate = returnDate;

    await book.save();

    return book;
};

const returnBook = async ({bookId}) => {
    const book = await Book.findById(bookId);
    if (!book) {
        throw new Error("Book not found");
    }

    if (book.status === "IN") {
        throw new Error("Book is not currently borrowed");
    }

    book.status = "IN";
    book.borrowedBy = null;
    book.issuedBy = null;
    book.returnDate = null;

    await book.save();

    return book;
};


module.exports = {
    issueBook,
    returnBook,
};