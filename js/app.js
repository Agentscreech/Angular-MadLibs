angular.module('App', ['ui.router','ui.materialize']) //sets app
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/'); //catch all
        $stateProvider
         .state('form',{
             url: '/form',
             templateUrl: 'views/form.html',
             controller: 'form'
         })
         .state('render', {
             url: '/render',
             templateUrl: 'views/render.html',
             controller: 'render'
         });
}]);
