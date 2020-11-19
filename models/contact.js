const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    subject: { type: String, required: true },
    name: { type: String, required: true },
    email: {
        type: String, 
        lowercase: true,
        trim: true,
        required: true
    },
    message: { type: String, required: true }
})

contactSchema.path('email').validate((email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     emailRegex.test(email.text); // Assuming email has a text attribute
 }, 'please input valid email')

const Contact = mongoose.model("Conatact", contactSchema);

module.exports = Contact;
