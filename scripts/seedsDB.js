const mongoose = require("mongoose");
const Contact = require("../models/contact.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jdsworld");

const contactSeed = [
    {
        subject: "test message",
        name: "Test Jones", 
        email: "email@gmail.com",
        message: "Hi this is a test message that we can use to populate the database"
    }
];

Contact.remove({})
    .then(() => Contact.collection.insertMany(contactSeed))
    .then(data => {
        console.log("seed inserted!");
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
      });