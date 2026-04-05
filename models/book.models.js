const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
    },

    isbn: {
      type: String,
      required: [true, "ISBN is required"],
      unique: true,
      trim: true,
    },

    authors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true,
      },
    ],

    status: {
      type: String,
      enum: ["IN", "OUT"],
      default: "IN",
    },

    borrowedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: null,
    },

    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attendant",
      default: null,
    },

    returnDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
