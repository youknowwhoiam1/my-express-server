const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, World!<h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: anshuman2abhi@gmail.com")
});

app.get("/about", function(req, res) {
    res.send("I am Anshuman Das. I am a sophomore at IIIT Nagpur.")
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Coffee</li><li>Code</li><li>Football</li></ul>")
});


app.listen(3000, function() {
    console.log("Server has started on port 3000")
});
