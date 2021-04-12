let http = require("http");
let url = require("url");
const fs = require("fs");
let port=9999;

// create array Task array 
//let taskArray = new Array();
let htmlConent = `
<form action ="/store" method = "get">
<label> Employee Id</label>
<input type = "text" name ="empId"/><br/>
<label> Task Id</label>
<input type = "text" name ="taskId"/><br/>
<label> Task</label>
<input type = "text" name ="task"/><br/>
<label> Deadline</label>
<input type = "date" name ="deadline"/><br/>
<input type = "submit" value ="Store Data"/>
<input type = "reset" value ="Reset"/>
<hr/>
</form>
`
/*let htmlConent1 = `
<form action ="/delete" method = "delete">
<label> Task Id</label>
<input type = "text" name ="taskId"/><br/>
<input type = "reset" value ="Reset"/>
</form>
` */

var empObj = [];
let server = http.createServer((req,res)=> {
    var pathInfo = url.parse(req.url,true).pathname;
    if(pathInfo =='/'){
        res.setHeader("content-type", "text/html");
        res.end(htmlConent);
        debugger;
    }
    console.log(req.url)
    res.end(); //end the response
        if(pathInfo=="/store"){
            var data = url.parse(req.url,true).query;
             console.log(`EmpId: ${data.empId}, <br/>Task id: ${data.taskId}, <br/>Task: ${data.task}, <br/> Deadline:${data.deadline}`)
             // convert to object  
             try {
                 var readFile = fs.readFileSync("Info.json");
             }
             catch(err){
                 console.log("File cannot be read please try again. "+ err)
             }
             try {
                 if(readFile == '' || readFile == null){
                     fs.writeFileSync("Info.json", JSON.stringify(empObj,null, 2));         //converet to string 
                 }else{
                     jsonData = JSON.parse(readFile);
                    // store records in object using push method 
                    jsonData.push(data)
                     //obj.push(req.query);
                     fs.writeFileSync("Info.json", JSON.stringify(jsonData, null, 2));
                 }
             }catch(err) {
                 console.log("Error please try again "+ err);
             }
             res.end();
             debugger;
        }
        else if(req.url=="/display"){
        var readFile = fs.readFileSync("Info.json");    // read from file 
        let jsonParse = JSON.parse(readFile);           // convert to json 
        console.log(jsonParse); 

        var tableDatavariable = `
            <table border = "1">  
            <tr>
                <th>Employee Id</th>
                <th>Task Id</th>
                <th>Task/th>
                <th>Deadline</th>
            </tr>
            `
            for (let i = 0; i < jsonParse.length; i++){
                const element = jsonParse[i];
            
            tableDatavariable += `
                    <tr>
                            <td>${element.empId}</td>
                            <td>${element.taskId}</td>
                            <td>${element.task}</td>
                            <td>${element.deadline}</td>       
                    </tr>
                    `
                    debugger;
            }
                   tableDatavariable += `</table>`
                    res.end(tableDatavariable);
        } else if(req.url=="/delete"){
            var readFile = fs.readFileSync("Info.json");    // read from file 
            let jsonParse = JSON.parse(readFile);           // convert to json 
            console.log(jsonParse);    
            jsonParse.forEach(function(taskId) {            // check value using iterator or loop 
            console.log(taskId);
            jsonParse.splice(j,1);                          // 1st parameter index, number records.
            res.send("Customer record deleted successfully....");            
            fs.writeFileSync("Info.json", JSON.stringify(jsonData, null, 2));   // store in file using fs module. 
        });
        try {
            var readFile = fs.readFileSync("Info.json");
        }
        catch(err){
            console.log("Task Id not available please try again. "+ err) //if task id not available display error message.
        }  
            let id = req.params.taskId;
    let flag = 0;
    let j = 0;
    data.find((c,i)=> {
        let ccId = c.custId;
        if( ccId == id){
            j=i;
            flag++; 
            debugger;
        }
    })
    
    if(flag==0){
            res.send("Id is invalid")
    }else {
             jsonParse.splice(j,1);  // 1st parameter index, number records.
            res.send("Customer record deleted successfully....")
        }
    }
});
server.listen(port,()=>console.log(`Server running on port number ${port}`));
debugger;