const Author = require ('../models/author.models');
const asyncHandler = require('../utils/asyncHandler');

/**********
 * @desc    Create a new author
 * @route   POST /authors
 * @access  Public
 */


const createAuthor = asyncHandler(async (req, res) => {
    const { name, bio } = req.body;

    const Author = await Author.create({ 
        name,
        bio
        });

    res.status(201).json({
        status: 'success',
        data: author
    });
});


/**
 * @desc    Get all authors
 * @route   GET /authors
 * @access  Public
 */

const getAllAuthors = asyncHandler(async (req, res) => {
    const authors = await Author.find();

    res.status(200).json({
        status: 'success',
        results: authors.length,
        data: authors
    });
});

/**
 * @desc    Get single author by ID
 * @route   GET /authors/:id
 * @access  Public
 */

const getAuthorById = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.id);

    if (!author) {
        res.status(404);
            throw new Error('Author not found');
    }

    res.status(200).json({
        status: 'success',
        data: author
    });
});

/**
 * @desc    Update an author
 * @route   PUT /authors/:id
 * @access  Public
 */


const updateAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.id);

    if (!author) {
        res.status(404);
        throw new Error('Author not found');
    }

    author.name = req.body.name || author.name;
    author.bio = req.body.bio || author.bio;

    const updatedAuthor = await author.save();
    res.status(200).json({
        status: 'success',
        data: updatedAuthor
    });
});



/**
 * @desc    Delete an author
 * @route   DELETE /authors/:id
 * @access  Public
 */


const deleteAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.id);

    if (!author) {
        res.status(404);
        throw new Error('Author not found');
    }

    await author.deleteOne();

    res.status(200).json({
        status: 'success',
        message: 'Author deleted successfully',
    });
});

module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor
};