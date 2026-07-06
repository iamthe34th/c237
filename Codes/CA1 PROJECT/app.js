// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

//Define a route to render the index page
app.get('/', (req, res) => {
    res.render('homepage', 
    {
        title : "All my favourite things about The aquarium hobby"
        
    });
});

app.use(express.static('public'));

app.get('/location', (req, res) => {
    res.render('location');
});


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});