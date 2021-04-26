let ChatModel = require("../model/s2.model.js");
const ChatModel = require("./s2.model.js");
let app = require("express")();


let storeChatDetails = (req,res)=> {
   
    let chat = new ChatModel({        // Reference
        // Data comes from body 
        _id:req.body.cid,      
        cname:req.body.cname,
        cdesc:req.body.cdesc,
        amount:req.body.amount
    });

    chat.save((err,result)=> {
        if(!err){
            console.log("Record stored successfully "+result);
            res.sendFile(__dirname + "/index.html")
        }else {
            res.send("Record didn't store "+err);
        }
    })
};


module.exports={storeChatDetails}
