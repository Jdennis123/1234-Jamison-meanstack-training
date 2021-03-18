function addBlog(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var imageInfo = document.getElementById("imageId").files[0].name;
    console.log(title);
    console.log(desc);
    console.log(imageInfo);
    document.getElementById("title").innerHTML=title;
    document.getElementById("desc").innerHTML=desc;
    document.getElementById("imageId").src=imageInfo;
}
var empData=[];
function storeInSession() {
   sessionStorage.setItem("empInfo",JSON.stringify(empData));
}
function retrieveFromSession() {
    var obj = JSON.parse(sessionStorage.getItem("empInfo"));
    console.log(obj);
}
function addBlog() {
    var formData = readData();
    insertNewRecords(formData);
    resetForm();
    empData.push(formData);  
    console.log(empData);
}
function readData() {
    var formData={};
    formData.title=document.getElementById("title").value;
    formData.desc = document.getElementById("desc").value;
    formData.imageInfo = document.getElementById("imageId").value;
    return formData;
}
function insertNewRecords(formData) {
    var table = document.getElementById("clientDetails");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=formData.title;
    var cell2 =newRow.insertCell(1);
    cell2.innerHTML= formData.desc;
    var cell3 = newRow.insertCell(2);
    cell3.src = formData.imageInfo;
    var cell3 = newRow.insertCell(3);
    cell3.innerHTML="<a href='#' onclick='deleteRec(this)'>X</a>";

}
function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("clientDetails").deleteRow(row.rowIndex);
}
var data;
function updateRec(data){
    this.data = data;
    var row = data.parentElement.parentElement;
    var cells = row.getElementsByTagName("td");
    var title = cells[0].innerHTML;
    var desc =  cells[1].innerHTML;
    var imageInfo =  cells[2].src;
    document.getElementById("title").value=title;
    document.getElementById("desc").value=desc; 
    document.getElementById("imageId").value=imageInfo;
    document.getElementById("b1").value="Update Record"  
}
function resetForm() {
    document.getElementById("title").value="";
    document.getElementById("desc").value="";  
    document.getElementById("imageId").value="";  
} 