const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;

const Contact = require("./models/contact");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("/messages", (req, res) => {
    Contact.find({})
        .then((data) => res.send(data));
});

app.post("/messages", (req, res) => {
    Contact.create({
        subject: req.body.subject,
        name:req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    .then(data => res.send(data))
})

// {
//     "subject":"this is a postman test",
//     "name":"John Smith",
//     "email":"john@john.com",
//     "message":"Hi I wanted to ask if you would be able to build a website for me!"
// }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jdsworld", 
{ useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, function() {
    console.log(`The sever is listening on http://localhost:${PORT}`);
})
