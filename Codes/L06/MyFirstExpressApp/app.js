// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number the server will run on
const port = 3000;

// Define a route for the homepage "/"
// When a user visits http://localhost:3000/
app.get('/', function(req, res) {

    // Send a response back to the browser
res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});