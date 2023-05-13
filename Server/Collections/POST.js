const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title:{type:String},
    post:{type:String},
    id_user:{type:String},
    user_name:{type:String},
    user_lastname:{type:String},
    image:{type:String}
})
module.exports=mongoose.model('Post',todoSchema);