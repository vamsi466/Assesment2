(function(){

   'use strict'
    angular.module('paymentMode')
    .controller('paymentTimingCtrl',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){

      ajaxcallservice.getExpenditureDetails("JSON/l_PaymentTiming.JSON").then(function(response){
       
        $scope.paymentTiming = response.result;
        });
        $scope.paymenttimingSelected = function(data){
          
          $scope.paymentdetails.selectedpaymenttimingData=data;
          
        }
    }])
})();
