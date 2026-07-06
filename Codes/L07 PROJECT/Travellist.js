const express = require('express')
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res) => {
    const clothelist = ["Tshirt","Jacket",'Jeans']
    const toiletrylist=["toothbrush","shampoo","toothpaste"]
    
    res.render('list',{clothelist,toiletrylist})
})




// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});