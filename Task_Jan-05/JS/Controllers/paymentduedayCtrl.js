(function(){

   'use strict'
    angular.module('paymentMode')
    .controller('paymentduedayCtrl',['ajaxcallservice','$rootscope','$scope',function(ajaxcallservice,$rootscope,$scope){

      ajaxcallservice.getExpenditureDetails("JSON/l_PaymentDueDay.JSON").then(function(response){
        console.log(response)
        $scope.paymentduedayData = response.result;
        });

        $scope.paymentduedaySelected = function(data){
          
          $scope.paymentdetails.selectedpaymentduedayData=data;
          
        }
        $scope.paydueday = false;
         $rootscope.$on('paydue',function(e, obj){
           $scope.paydueday= obj.dueday; 
        })

    }])
})();