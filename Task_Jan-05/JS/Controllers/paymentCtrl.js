(function(){

   'use strict'
    angular.module('paymentMode')
    .controller('paymentCtrl',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){
$scope.selectedpaymentData="";

      ajaxcallservice.getExpenditureDetails("JSON/c_paymentType.JSON").then(function(response){
         $scope.selectedData =[];
        response.map(function(value,key){   
          var pathValue = value.path.split("\\")
          $scope.selectedData.push(pathValue[pathValue.length-1])
        })
        })
        $scope.paymentSelected = function(data){
          
          $scope.paymentdetails.selectedpaymentData = data;
          
        }
         

    }])
})();
