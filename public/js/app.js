"use strict";

(function(){
  angular
  .module("wordhunt", [
    "ui.router",
    "ngAnimate",
    "data"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("dataIndex", {
      url: "/data",
      templateUrl: "js/data/index.html",
      controller: "DataIndexController",
      controllerAs: "DataIndexViewModel"
    });
  }

}());
