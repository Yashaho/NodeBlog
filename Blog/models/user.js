const mongoose = require("mongoose");


let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String
});


module.exports = new mongoose.model("User", userSchema);