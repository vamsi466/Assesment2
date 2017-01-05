(function(){

   'use strict'
    angular.module('paymentMode')
    .controller('accountingCtrl',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){

      ajaxcallservice.getExpenditureDetails("JSON/l_AccountingType.JSON").then(function(response){
        
        $scope.accountingData = response.result;
        });

         $scope.accountingSelected = function(data){
          
          $scope.paymentdetails.selectedaccountingData = data;
          
        }

    }])
})();
