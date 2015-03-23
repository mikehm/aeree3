angular.module('candidates', ['ngRoute', 'ui.bootstrap', 
    'ui.utils', 'ui.router', 'ngAnimate', 'ngSanitize', 'ui.select',
     'ui.grid','ngAria','ngMaterial']);

angular.module('candidates').config(function($stateProvider) {

    $stateProvider.state('list-candidates', {
        url: '/list-candidates',
        templateUrl: 'modules/candidates/partial/list-candidates/list-candidates.html'
    });
    $stateProvider.state('add-candidate', {
        url: '/add-candidate',
        templateUrl: 'modules/candidates/partial/add-candidate/add-candidate.html'
    });
    /* Add New States Above */
});

