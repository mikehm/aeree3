angular.module('aseree', ['ngRoute', 'ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 
    'ngSanitize', 'ui.select', 'ui.grid', 'ngAria', 'ngMaterial', 'ui.router.tabs', 
    'digitalfondue.dftabmenu', 'ui.bootstrap.showErrors', 'angular-datepicker', 'selectize',
    'candidates', 'jobs']);

angular.module('aseree').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('header', {
        url: '/header',
        templateUrl: 'header/header.html'
    });
    
    $stateProvider.state('auth', {
        url: '/auth',
        templateUrl: 'modules/auth/auth.html'
    });
    $stateProvider.state('jobs', {
        url: '/jobs',
        templateUrl: 'modules/jobs/jobs.html'
    });
    $stateProvider.state('main-partial', {
        url: '/main',
        templateUrl: 'main/main-partial.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/auth');

});

angular.module('aseree').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
