const mongoose=require('mongoose');
//shape of document: define schema
var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    phone:String,
    gender : String
    
})
//compile model from schema
const Userdb=mongoose.model('userdb',schema);
module.exports=Userdb;