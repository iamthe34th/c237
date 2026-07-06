const express = require('express');
const app = express();

// Setting EJS as the view engine
app.set('view engine', 'ejs');


// define a route to render the fruits.ejs page 

app.get('/',(req,res) =>{
    const fruitsList = ["Apple","Banana","Orange","Mango","Grapes"];
    res.render('fruit',{fruitsList});
})





// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});