(function(){
  var app = angular.module('itunesStore', []);
  app.controller('AppController', ['$http', '$scope', function($http, $scope){
   var store = this;
   $scope.letterLimit = 140;
   $scope.search = "justinzollars"
   $scope.$watch('search', function (newValue, oldValue) {
      if (newValue==undefined) {
        console.log('newValue=' + newValue);
      } else {

       $scope.searchme($scope.search).then(function(result) {
            $scope.data = result.data;
              store.products = result.data["results"]
            });
      }
    });

    $scope.searchme = function(sQuery) {
             console.log(sQuery);
             return $http.jsonp('http://itunes.apple.com/search', {
                    params: {
                        "callback": "JSON_CALLBACK",
                        "term": sQuery,
                        "country": "us",
                        "entity":"software",
                        "limit":"10"
                    }
                });
           };
    store.products = [];
  }]);

  app.directive("appTable", function() {
    return {
      restrict: "E",
      templateUrl: "app-table.html"
    };
  });

}
)();