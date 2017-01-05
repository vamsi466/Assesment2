(function(){

   'use strict'
    angular.module('paymentMode')
    .controller('paymentduedayCtrl',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){

      ajaxcallservice.getExpenditureDetails("JSON/l_PaymentDueDay.JSON").then(function(response){
        console.log(response)
        $scope.paymentduedayData = response.result;
        });

        $scope.paymentduedaySelected = function(data){
          
          $scope.paymentdetails.selectedpaymentduedayData=data;
          
        }

    }])
})();