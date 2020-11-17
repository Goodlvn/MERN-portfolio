const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    subject: { type: String, required: true },
    name: { type: String, required: true },
    email: {type: String, required: true },
    message: { type: String, required: true }
})

const Contact = mongoose.model("Conatact", contactSchema);

module.exports = Contact;