const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("/", (req, res) => {
    res.send("test");
});


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jdsworld", 
{ useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, function() {
    console.log(`The sever is listening on http://localhost:${PORT}`);
})
