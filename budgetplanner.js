
var empObj =[];
function storeInSession() {
    sessionStorage.setItem("empInfo",empObj)
}
function retrieveFromSession() {
    var obj = sessionStorage.getItem("empInfo");
    console.log(obj);
}
function onFormSubmit(){
    var data = readFormData();
    insertNewRecord(data);
    empObj.push(data);     
    resetData();
    
}

function readFormData() {
    var obj = {}    
    obj.clientName = document.getElementById("Client Name").value;
    obj.projectName = document.getElementById("name2").value;
    obj.budget = document.getElementById("num").value;
    console.log(obj);
    return obj; 
}
function insertNewRecord(data){
 var table = document.getElementById("employeeList")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);   

 var cell1 = newRow.insertCell(0);           
 cell1.innerHTML=data.clientName;                  

 var cell2 = newRow.insertCell(1);           
 cell2.innerHTML=data.projectName; 

 var cell3 = newRow.insertCell(2);          
 cell3.innerHTML=data.budget;  
}

function resetData() {
document.getElementById("Client Name").value="";
document.getElementById("name2").value="";
document.getElementById("num").value="";
}