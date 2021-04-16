let obj = require("mongoose");  //load the module 
let fs = require('fs');

obj.Promise= global.Promise;       // creating the reference. 
let url = "mongodb://localhost:27017/meanstack";    //passing database
const mongooseDbOption = {       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url);   // ready to connect 
let db = obj.connection;    // connected to database. 
db.on("error",(err)=>console.log(err));     // shows error
db.once("open",()=>{                        // opens connection if there are no errors
    
    //Defined the Schema 
    let ProductSchema = obj.Schema({
        _id:Number,
        pname:String,
        price:Number
    });
    // Creating Model using schema 
    let Product = obj.model("",ProductSchema,"Json");  // ("", schema, "Tablename")
    // Creating reference using model 
    let p1 = new Product({_id:1,pname:"Laptop",price:1000});

    p1.save((err,result)=>{
        if(!err){
            console.log("record inserted successfully"+result)
        }
        try{
            var readFile = fs.readFileSync("Info.json");
        }
        catch(err){
            console.log("Please try again "+ err)
        } 
        try{
            if(readFile =! '' || readFile == null){
                fs.writeFileSync("Info.json", JSON.stringify(p1, null, 2));
            }else{
                jsonData = JSON.parse(readFile);
                jsonData.push(p1);
                fs.writeFileSync("Info.json", JSON.stringify(jsonData, null, 2));
            }
        }finally{
            console.log()
        }
        obj.disconnect();       // close the connection..
    })
})