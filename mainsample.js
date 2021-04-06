let obj1 = require("./sample");
let fs = require("fs");
console.log(obj1);
let emparray = new Array();
emparray.push(obj1);
debugger;
let jsonData = JSON.stringify(emparray);
fs.appendFileSync("employee1.json", jsonData,{flag:"a"},(err)=>{
    if(!err){
        console.log("Please try again.");
    }
});
console.log('File written');
debugger;
let today = new Date();
console.log(today);