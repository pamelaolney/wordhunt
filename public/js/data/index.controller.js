"use strict";

(function(){
  angular
  .module("data")
  .controller("DataIndexController", [
    "LetterFactory",
    DataIndexControllerFunction
  ]);

  function DataIndexControllerFunction(LetterFactory){
    this.data = LetterFactory.query();
    this.shuffle = function(o){
      for(var j, x, i = this.data.length; i; j = Math.floor(Math.random() * i),
      x = this.data[--i], this.data[i] = this.data[j], this.data[j] = x);
      return this.data;
    };


    this.check = function(data, letter){
      data.circle = true;
      if( data.letter === "F" || data.letter === "O" || data.letter === "C" || data.letter === "U" || data.letter === "S"){
        alert("You did it!!!");
      }
    }


  };

}());
