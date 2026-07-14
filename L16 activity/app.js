const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const app = express();



// Set up multer for image uploads
const storage = multer.diskStorage({   //creating the storage configuration 
    destination: (req, file, cb) => {   // whenver someone uploads a file,multer automatically calls this function
        // req means request file is the uploaded file itself cb stands for call back function to send answer back to multer

        cb(null, 'public/images'); // this is where multer saves the file at public images folder
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // saving the file with its original name  and null means no problem 

        // but if you want to add an error message can put like this :

        //if (!file) {
            //cb(new Error("File cannot be uploaded"));
        //} else {
            //cb(null, "public/images");
        }
    }
);
// creating the multer object
const upload = multer({ storage: storage });



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RP738964$',
    database: 'c237_studentlistapp'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM student';

    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.send('Error Retrieving students');
        }
        res.render('index', { students: results });
    });
});

app.get('/addStudent', (req, res) => {
    res.render('addStudent');
});

app.post('/addStudent', upload.single('image'), (req, res) => {
    const { name, dob, contact } = req.body; // req.body contians only text fields and not the file fields
    //image no longer inside the braket beacuse we cannot store file inside req.body multer intercepts the upload can stores file sperately 


    let image; //creates a variable named image but does not give it a value yet like aempty box 

    if (req.file) {   // so the uploaded file is inside req.file
        image = req.file.filename; // so if file upladed the uploaded image is image 
    } else {
        image = null; //if not its just a empty box 
    }


    const sql = 'INSERT INTO student (name, dob, contact, image) VALUES (?, ?, ?, ?)';

    connection.query(sql, [name, dob, contact, image], (error, results) => {
        if (error) {
            console.error("Error adding student:", error);
            res.send('Error adding student');
        } else {
            res.redirect('/');
        }
    });
});

app.get('/editStudent/:id', (req, res) => {
    const studentId = req.params.id;

    const sql = 'SELECT * FROM student WHERE studentId = ?';

    connection.query(sql, [studentId], (error, results) => {
        if (error) {
            console.error("Error retrieving student:", error);
            res.send('Error retrieving student');
        }

        if (results.length > 0) {
            res.render('editStudent', {
                student: results[0]
            });
        } else {
            res.send('Student not found');
        }
    });
});

app.post('/editStudent/:id', upload.single('image'), (req, res) => {
    const studentId = req.params.id;
    const { name, dob, contact } = req.body;
    let image = req.body.image;

    if (req.file) {
        image = req.file.filename;
    }
    const sql = `
        UPDATE student
        SET name = ?, dob = ?, contact = ?, image = ?
        WHERE studentId = ?
    `;

    connection.query(sql,
        [name, dob, contact, image, studentId],
        (error, results) => {

            if (error) {
                console.error("Error updating student:", error);
                res.send('Error updating student');
            } else {
                res.redirect('/');
            }
        });
});



app.get('/deleteStudent/:id', (req, res) => {
    const studentId = req.params.id;

    const sql = 'DELETE FROM student WHERE studentId = ?';

    connection.query(sql, [studentId], (error, results) => {
        if (error) {
            console.error("Error deleting student:", error);
            res.send('Error deleting student');
        } else {
            res.redirect('/');
        }
    });
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});