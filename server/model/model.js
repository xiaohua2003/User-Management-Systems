const mongoose=require('mongoose');
//shape of document: define schema
const schema=new mongoose.Schema({
    name:{type:String,
        required:true},gender:String,
    email:{
    type:String,
    required:true,
    unique:true
},phone:{
    type:Number
}});
//compile model from schema
const Userdb=mongoose.model('userdb',schema);
module.exports=Userdb;