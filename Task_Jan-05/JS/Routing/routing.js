(function () {
    'use strict';

    angular
        .module('novoCloud')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.when("/main.graph", "/main.graph/");
          $urlRouterProvider.otherwise('/');
          $stateProvider
              .state('main',{
                url:'/',
                templateUrl:'Templates/main.html',
                controller:"mainViewCtrl"
              })
              .state('main.table',{
                url:"/graph",
                controller : 'revenueTable',
                templateUrl: 'Templates/revenueTable.html',
                resolve: {
                  revenueDetails: function($http){
                    return  $http.get("../JSON/revenue.JSON").then(function(response) {
                      return response.data.Data;
                      })
                  }

                }
              });

        }]);
})();
