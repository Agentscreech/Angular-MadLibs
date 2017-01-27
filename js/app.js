angular.module('App', ['ui.router','ui.materialize']) //sets app
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/'); //catch all
        $stateProvider
         .state('bay',{
             url: '/bay',
             templateUrl: 'views/bay.html',
             controller: 'bay'
         })
         .state('night',{
             url: '/night',
             templateUrl: 'views/night.html',
             controller: 'night'
         })
         .state('superhero', {
           url: '/superhero',
           templateUrl: 'views/superhero.html',
           controller: 'superhero'
         });
}]);
