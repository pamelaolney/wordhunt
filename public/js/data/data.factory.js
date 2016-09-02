"use strict";

    angular
    .module("data")
    .factory("LetterFactory", [
      "$resource",
      LetterFactoryFunction
    ]);

    function LetterFactoryFunction($resource){
      return $resource("http://localhost:4000/data");
    };
