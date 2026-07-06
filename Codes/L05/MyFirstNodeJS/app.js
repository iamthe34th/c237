const http = require('http');
const server = http.createServer((req, res) => {
    res.write("<h1>Welcome to my first Node.JS Page!</h1>");
    res.write("<b>Name:</b> Peter Parker<br>")
    res.write("<b>School:</b> Republic Polytechnic<br>")
    res.end('<b>Diploma:</b> Diploma in Digital Design and Development<br>');
});
const PORT = 3000;
server.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}/`); });
