angular.module('App')
.controller('bay', [
        '$scope',
        '$state',
        'Inputs',
        function($scope, $state, Inputs) {
            $scope.$watch('inputs', function(oldInput, newInput) {
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
    .controller('night', ['$scope', '$state', 'Inputs', function($scope, $state, Inputs) {
            $scope.$watch('inputs', function(oldInput, newInput) {
                Inputs.inputs = newInput;
            });
            $scope.inputs = {
                last_name: '',
                small_town: '',
                mans_name: '',
                blue_collar_job_title: '',
                relative: '',
                type_of_accident: '',
                strange_occurance: '',
                synonym_for_creepy: '',
                childs_name: '',
                emotion: '',
                name: ''
            };
    }
]);
