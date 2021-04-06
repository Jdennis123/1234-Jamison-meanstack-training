let obj = require("readline-sync");
let fname = obj.question("Enter your first name ");
let lname = obj.question("Enter your last name ");
let gender = obj.question("Enter your gender ");
let email = obj.question("Enter your email address ");
module.exports.array = {"First Name": fname, "Last Name": lname, "Gender": gender, "Email Address": email};
debugger;