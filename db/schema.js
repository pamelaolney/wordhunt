var mongoose = require("./connection");
var parser = require("body-parser");

var db = mongoose.connection;

db.on("error", function(err){
  console.log("err");
});

db.once("open", function(){
  console.log("database has been connected");
})


var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId



var DataSchema = new Schema({
    letter: String
  });

var Data = mongoose.model("Data", DataSchema);

module.exports = mongoose
