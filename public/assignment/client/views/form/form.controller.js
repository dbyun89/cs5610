(function()
{
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $location, FormService, $rootScope) {
		$scope.$location = $location;
        
        if ($rootScope.user != null) {
        FormService.findAllFormsForUser($rootScope.user.id, callback);                    
            function callback(forms) {
                $scope.forms = forms;
            }
        }
		
        $scope.addForm = function() {
            FormService.createFormForUser($rootScope.user.id, $scope.form, function(newForm) {
                
            $scope.forms.push(newForm);
            });
        }		
		
        $scope.deleteForm = function(index) {
            FormService.deleteFormById($scope.forms[index].id, function(forms) {
                
            $scope.forms.splice(index,1);
            });
        }
        
        $scope.updateForm = function() {
			
        }
        
        $scope.selectForm = function() {
			
        }
    }
}) ();
