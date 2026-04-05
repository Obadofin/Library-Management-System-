const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');

const port = process.env.PORT || 9713;


//connecting to the database first
connectDB();

//creating HTTP server
const server = http.createServer(app);

//start server
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});