
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
    $stateProvider.state('add-candidate.add-profile', {
        url: '/add-profile',
        templateUrl: 'modules/candidates/partial/add-candidate/add-profile/add-candidate.add-profile.html'
    });
    $stateProvider.state('add-candidate.reset-password', {
        url: '/reset-password',
        templateUrl: 'modules/candidates/partial/add-candidate/reset-password/add-candidate.reset-password.html'
    });
    $stateProvider.state('add-candidate.jobs', {
        url: '/jobs',
        templateUrl: 'modules/candidates/partial/add-candidate/jobs/add-candidate.jobs.html'
    });
    $stateProvider.state('add-candidate-menu', {
        url: '/add-candidate-menu',
        templateUrl: 'modules/candidates/partial/add-candidate/add-candidate-menu/add-candidate-menu.html'
    });
    /* Add New States Above */
});

