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
    };



  }());
