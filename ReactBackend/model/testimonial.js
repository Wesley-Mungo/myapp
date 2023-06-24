const mongoose = require('mongoose');
const testimonials= new mongoose.model("projects",mongoose.Schema({
    _id: String,
    avatar: String,
    name: String,
    review: String,

    
}))
module.exports={
    testimonials
}