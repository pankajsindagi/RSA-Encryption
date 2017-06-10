angular.module("rsaApp",['LocalStorageModule']).controller("rsaCtrl", function (localStorageService) {
    
    
    this.text = "";
    
    this.storedText = localStorage.getItem("p");
    
    this.setRSAStorage = function() {
        localStorage.setItem("p",this.text);
    }
    
    this.testclick = function(){
        console.log(localStorage.getItem("p"));
    }
});