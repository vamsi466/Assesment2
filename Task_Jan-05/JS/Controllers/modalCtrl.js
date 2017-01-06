(function(){
   'use strict'
    angular.module('paymentMode')
    .controller('modalCtrl',['$scope',function($scope){
        $scope.paymentdetails={};
        $scope.tableDetails={};
        $scope.generateMe= true;
        $scope.paydueday = false;
        
        $scope.page = true;
        $scope.footer1=true;
        $scope.page1=false;
        $scope.footer2=false;


        $scope.$on('paydue',function(e, obj){
           $scope.paydueday= obj.dueday; 
        })


        $scope.next=function(){
            $scope.page = false;
            $scope.footer1=false;
            $scope.page1=true;
            $scope.footer2=true;
        }

        $scope.previous=function(){
            $scope.page = true;
            $scope.footer1=true;
            $scope.page1=false;
            $scope.footer2=false;
        }
       
        $scope.addDetails=function(paymentdetails){
            $scope.savebutton = false;
            console.log($scope.paymentdetails.inputdate);
            var clonepaymentDetails = angular.copy(paymentdetails);
            if(clonepaymentDetails.selectedpaymentData != undefined){
                if(clonepaymentDetails.selectedpaymentData in $scope.tableDetails){
                    $scope.tableDetails[clonepaymentDetails.selectedpaymentData].push(clonepaymentDetails);

                    $scope.paymentdetails={};
                    $scope.page = true;
                    $scope.footer1=true;
                    $scope.page1=false;
                    $scope.footer2=false;
                }else{
                    $scope.tableDetails[clonepaymentDetails.selectedpaymentData] = [];
                    $scope.tableDetails[clonepaymentDetails.selectedpaymentData].push(clonepaymentDetails);
                    console.log($scope.tableDetails);
                    $scope.paymentdetails={};
                    $scope.page = true;
                    $scope.footer1=true;
                    $scope.page1=false;
                    $scope.footer2=false;

                }

                    
            }
            $scope.page = true;
            $scope.footer1=true;
            $scope.page1=false;
            $scope.footer2=false;
          
        }

        //edit details js
        var replaceI = -1;
        $scope.edit=function(index,i){
            $scope.savebutton = true;
          $scope.saveShow = false;
          $('#gridSystemModal').modal('show');
          $scope.paymentdetails = angular.copy(index);
          console.log($scope.paymentdetails);
          replaceI = i;

          $scope.loseChange=true;
          $scope.next=false;
          $scope.finalSave=true;
          $scope.generateMe=false;
        }

        //okay button
        $scope.saveEdited = function(){
            var editedDetails = angular.copy($scope.paymentdetails);
             $scope.tableDetails[editedDetails.selectedpaymentData][replaceI] = editedDetails;
           $scope.paymentdetails = {};
           $('#gridSystemModal').modal('hide');
        }

        $scope.editconfirm=function(){
              $('#warning-modal').modal('show');
        }
        //cancel button
        $scope.continuechanges = function(){
            $('#warning-modal').modal('hide');
        }
        //changes not saved in footer
        $scope.notsaved =function(){
        $('#warning-modal').modal('hide');
         
          $('#gridSystemModal').modal('hide');
  
        
        }
        //save in footer
        $scope.savethisPage= function(){
           $scope.page = false;
            $scope.footer1=false;
            $scope.page1=true;
            $scope.footer2=true;
        }




        //delete details js
        $scope.delete = function(key,index){
            $('#delete-modal').modal('show');
            $scope.newKey = key;
            $scope.newIndex = index;
        }

        $scope.yesdelete = function(){
            $scope.tableDetails[$scope.newKey].splice($scope.newIndex,1)
            $('#delete-modal').modal('hide');
        }

        
    }])
})();