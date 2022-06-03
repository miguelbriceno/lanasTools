// Node Server

const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
const lodash = require("lodash");
//const request = require("request"); //Just in case

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//Root rute
app.get("/", function(req, res) {
  console.log("Server runnig on port 3000".bgWhite.blue);
  //res.send("Hello World"); //For testing
  res.sendFile(__dirname + "/index.html"); // To recive from a Form
});

//Sample page rute
app.get("/sample", (req, res) => {
  res.render("sample");
});

//app.post("/", function(req, res){
//});

app.listen(3000, function() {
});

//------TESTING AREA------------
const migMath = require(__dirname + "/my_modules/basicMath.js");

let nums = [1,2,[3,1],3,"4","5", 6.1, {"a":1}, "7.2", "hola"];
let x = migMath.avg(nums, -2);
console.log("Answer: " + x);
// console.log(typeof x);
