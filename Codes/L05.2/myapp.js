const http = require('http');

const server = http.createServer((req,res) =>{
    res.write(`<h1><b>Welcome to my first node js website</b></h1>`)
    
    res.write(`<p><b>Name:</b> ravichndran kadhirvelan </p>`)

    res.write(`<p><b> School: </b> Republic Polytechnic </p> `)

    res.write(`<p><b> Diploma: </b> Diploma in Cyber security and digital forensics </p>`)
    
    res.end();
});

const PORT = 3000;

server.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}/`);
});