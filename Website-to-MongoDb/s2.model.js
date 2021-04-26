let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // Creating reference. 

let ChatSchema = mongoose.Schema({
    _id:Number,
    cname:String,
    cdesc: String,
    price:Number
});

let ChatModel = mongoose.model("",ChatSchema,"Chat");



module.exports = ChatModel
