const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : String,
    phone : String,
    password : String,
    age: Number,
    emailConfirm:{
        type : Boolean,
        default : false
    }
});
module.exports = mongoose.model('user',schema) 
