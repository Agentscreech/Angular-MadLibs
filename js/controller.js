angular.module('App').controller('form', [
    '$scope',
    '$state',
    'Inputs',
    function($scope, $state, Inputs) {
        $scope.$watch('inputs', function(oldInput, newInput){
            Inputs.inputs = newInput;
        });
        $scope.inputs = {
            mans_name: '',
            occupation: '',
            noun1: '',
            noun2: '',
            noun3: '',
            shape: '',
            verb1: '',
            womans_name: '',
            body_part: '',
            verb2: '',
            noun4: '',
            noun5: '',
            restaurant_name: '',
            historic_monument: '',
            verb3: '',
            noun6: '',
            noun7: '',
            noun8: '',
            verb4: '',
            noun9: '',
            adjective1: '',
            adjective2: '',
            emotion: '',
            verb5: '',
            noun10: '',
            noun11: '',
            verb6: ''
        };
    }
])
.controller('render', ['$scope', '$state', 'Inputs', function ($scope, $state, Inputs){
        $scope.inputs = Inputs.inputs;
}]);
