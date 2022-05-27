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
