const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: string,
            require: [true, 'Author name is required.'],
            trim: true,
        },
        bio: {
            type: String,
            default: '',
            trim: true,
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model('Author', authorSchema);