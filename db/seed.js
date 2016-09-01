var mongoose = require("./schema");
var seedData = require("./seeds");

var Data = mongoose.model("Data");

Data.remove({}).then(function(){
  Data.collection.insert(seedData).then(function(){
    process.exit();
  });
});
