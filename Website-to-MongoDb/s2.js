let app = require("express")();
let bodyParser = require("body-parser")
let http = require("http").Server(app);   // to load the library we have run port number using hhtp module 
let io = require("socket.io")(http);
let mongoose = require("mongoose");
let MongoClient = require('mongodb').MongoClient

let url = "mongodb://localhost:27017/meanstack";
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);

mongoose.connection
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/i2.html");
})

app.post("/chatLog", (req,res)=>{
    let name = req.body.name;
    let msg = req.body.msg;
    let chat = {name: name, message: msg};
    MongoClient.connect(url,{useUnifiedTopology: true}, (err1,client)=>{
        if(!err1){
            let db = client.db("meanstack")
            db.connection("Chat").insertOne(chat,(err2,result)=>{
                if(!err2){
                    if(result.insertedCount>0){
                        res.send("Chat sent.")
                    }else{
                        res.send("Chat not sent.")
                    }
                }
                client.close();
            })
        }
    })
})

io.on("connection",(socket)=> {
    console.log("Client connected to application.....");
    
    socket.on("chat",(msg)=> {
        console.log(msg);
    })
})

http.listen(9090,()=>console.log('Server running on port number 9090'));
