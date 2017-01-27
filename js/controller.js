angular.module('App').controller('form', [
    '$scope',
    '$state',
    'Inputs',
    function($scope, $state, Inputs) {
        console.log('In form controller');
        $scope.$watch('inputs', function(oldInput, newInput){
            Inputs.inputs = newInput
        });
        $scope.inputs = {
            mans_name: 'test',
            occupation: 'test',
            noun1: 'test',
            noun2: 'test',
            noun3: 'test',
            shape: 'test',
            mans_name: 'test',
            verb1: 'test',
            womans_name: 'test',
            body_part: 'test',
            verb2: 'test',
            noun4: 'test',
            noun5: 'test',
            restaurant_name: 'test',
            historic_monument: 'test',
            verb3: 'test',
            noun6: 'test',
            noun7: 'test',
            noun8: 'test',
            verb4: 'test',
            noun9: 'test',
            adjective1: 'test',
            adjective2: 'test',
            emotion: 'test',
            verb5: 'test',
            noun10: 'test',
            noun11: 'test',
            verb6: 'test'
        }
    }
])
.controller('render', ['$scope', '$state', 'Inputs', function ($scope, $state, Inputs){
        $scope.inputs = Inputs.inputs;
}]);
