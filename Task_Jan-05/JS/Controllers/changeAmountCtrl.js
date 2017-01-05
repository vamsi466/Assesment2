(function(){

   'use strict'
    angular.module('paymentMode')
    .controller('changeAmountCtrl',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){

      ajaxcallservice.getExpenditureDetails("JSON/l_ChargeAmountBasis.JSON").then(function(response){
       
        $scope.changeAmountData = response.result;
        });
        $scope.changeAmountSlected = function(data){
          
          $scope.paymentdetails.changeAmountselectedData=data;
          
        }
    }])
})();
