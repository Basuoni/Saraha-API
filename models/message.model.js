const mongoose = require('mongoose')

const schema = mongoose.Schema({
    message : String,
    sendTo : mongoose.SchemaTypes.ObjectId,
    date:String
});
module.exports = mongoose.model('message',schema) 
