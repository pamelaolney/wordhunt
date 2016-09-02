var express = require('express');
var cors = require('cors')
var mongoose = require('./db/schema');

var Data = mongoose.model("Data");

var parser = require("body-parser");
var app = express();


app.use(parser.json({extended: true}));
app.use(cors());

app.get("/", function(req, res){
  res.send("Hi World");
})

app.get("/data", function(req, res){
  Data.find({}).then(function(data){
    res.json(data)
  })
})

app.listen("4000", function(){
  console.log('Listening here on channel 4000');
})
