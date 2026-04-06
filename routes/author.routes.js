const express = require("express");
const {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor,
} = require("../controllers/author.controller");

const router = express.Router();

/**
 * /authors
 */


router.route('/')
.post(createAuthor)
.get(getAllAuthors);

/**
 * /authors/:id
 */


router.route('/:id')
.get(getAuthorById)
.put(updateAuthor)
.delete(deleteAuthor);

module.exports = router;