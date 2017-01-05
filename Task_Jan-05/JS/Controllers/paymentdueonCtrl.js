(function(){

   'use strict'
    angular.module('paymentMode')
    .controller('paymentdueonCtrl',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){

      ajaxcallservice.getExpenditureDetails("JSON/l_PaymentDueOn.JSON").then(function(response){
        
        $scope.paymentdueonData = response.result;
        });

        $scope.paymentdueonSelected = function(data){
          
          $scope.paymentdetails.selectedpaymentdueonData=data;
          
        }
    }])
})();