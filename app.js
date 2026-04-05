const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const authorRoutes = require('./routes/author.routes');
const bookRoutes = require('./routes/book.routes');
const studentRoutes = require('./routes/student.routes');
const attendantRoutes = require('./routes/attendant.routes');

const errorHandler = require('./middlewares/error.middleware');

const app = express();

//***********************************       Global Middleware       *********************************** */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

//***********************************       Routes       *********************************** */
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);
app.use('/attendants', attendantRoutes);

//***********************************       Health Check       *********************************** */
app.get('/', (req, res) => {
    res.status(200).json({ 
        status: 'success',
        message: 'School Library Management API is running' });
});


//***********************************       Error Handling       *********************************** */
app.use(errorHandler);

module.exports = app;