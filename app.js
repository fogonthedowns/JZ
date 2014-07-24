(function(){
  var app = angular.module('itunesStore', []);
  app.controller('AppController', ['$http', '$scope', function($http, $scope){
   var store = this;
   $scope.letterLimit = 140;
   $scope.$watch('search', function (newValue, oldValue) {
      if (newValue==undefined) {
        console.log('newValue=' + newValue);
      } else {
        $http.get('https://itunes.apple.com/search?term=' + (newValue || "justinzollars" )+'&country=us&entity=software&limit=10').success(function(data){
          store.products = data["results"];
        });
      }
    });

    $http.get('https://itunes.apple.com/search?term=' + ($scope.search || "justinzollars" )+'&country=us&entity=software&limit=10').success(function(data){
      store.products = data["results"];
    });

    store.products = [];
  }]);
})();