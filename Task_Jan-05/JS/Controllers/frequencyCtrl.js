(function(){

   'use strict'
    angular.module('paymentMode')
    .controller('frequencyCtrl',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){

      ajaxcallservice.getExpenditureDetails("JSON/c_frequecyType.JSON").then(function(response){
         $scope.selectedDataFrequency =[];
        response.map(function(value,key){

         
          var pathValue = value.path.split("\\")
          $scope.selectedDataFrequency.push(pathValue[pathValue.length-1])
          


        })
        })
         $scope.frequencySelected = function(data){
          
          $scope.paymentdetails.selectedfrequencyData=data;
          
        }

         

    }])
})();

