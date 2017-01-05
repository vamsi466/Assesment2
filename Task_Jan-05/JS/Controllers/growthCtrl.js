(function(){

   'use strict'
    angular.module('paymentMode')
    .controller('growthCtrl',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){

      ajaxcallservice.getExpenditureDetails("JSON/l_PaymentTiming.JSON").then(function(response){
       
        $scope.growthData = response.result;
        });
        $scope.growthSelected = function(data){
          
          $scope.paymentdetails.growthselectedData=data;
          
        }
    }])
})();
