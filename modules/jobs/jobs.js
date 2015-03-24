angular.module('jobs', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('jobs').config(function($stateProvider) {

    $stateProvider.state('list-jobs', {
        url: '/list-jobs',
        templateUrl: 'modules/jobs/partials/list-jobs/list-jobs.html'
    });
    $stateProvider.state('add-jobs', {
        url: '/add-jobs',
        templateUrl: 'modules/jobs/partials/add-jobs/add-jobs.html'
    });
    $stateProvider.state('archived', {
        url: '/archived',
        templateUrl: 'modules/jobs/partials/archived/archived.html'
    });
    /* Add New States Above */

});

