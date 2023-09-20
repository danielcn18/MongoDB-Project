const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    fname: String,
    lname: String, 
    organization: String, 
    email: String, 
    phone: Number, 
    address: String,
    city: String, 
    country: String
});

module.exports = mongoose.model('Form', formSchema);