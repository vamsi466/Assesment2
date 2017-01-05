(function(){
   'use strict'
    angular.module('paymentMode')
    .controller('modalCtrl',['$scope',function($scope){
        $scope.paymentdetails={};
        $scope.tableDetails=[];
        // $scope.pickthedate = function() {
            
        //     var date = new Date();
        //     var currentMonth = date.getMonth();
        //     var currentDate = date.getDate();
        //     var currentYear = date.getFullYear();
        //     $('.datepicker').datepicker({
        //         minDate: new Date(currentMonth, currentDate, currentYear),
        //         dateFormat: 'mm-dd-yy'
        //     });
        // }
        // $scope.onChangeDate=function(){
        // $scope.paymentdetails.selecteddate = $(".datepicker").val();
        // $scope.$apply();
        //  }
        //  $scope.pickthedate();

        $scope.page = true;
        $scope.footer1=true;
        $scope.page1=false;
        $scope.footer2=false;
        // $scope.firstmodalnavigator = true;


        $scope.next=function(){
            $scope.page = false;
            $scope.footer1=false;
            $scope.page1=true;
            $scope.footer2=true;
            // $scope.firstmodalnavigator = false;
            // $scope.secondmodal= true;
            // $scope.secondmodalnavigator=true;
        }

        $scope.previous=function(){
            $scope.page = true;
            $scope.footer1=true;
            $scope.page1=false;
            $scope.footer2=false;
            //  $scope.firstmodalnavigator = true;
            //  $scope.secondmodalnavigator=false;
            // $scope.secondmodal= false;
        }

        $scope.addDetails=function(paymentdetails){
           
           
           $scope.tableDetails.push(angular.copy(paymentdetails))
           $scope.paymentdetails={};

           $scope.page = true;
            $scope.footer1=true;
            $scope.page1=false;
            $scope.footer2=false;
        }
           
            

    }])
})();