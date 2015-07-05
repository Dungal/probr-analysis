'use strict';

angular.module('probrApp', [
    'ui.router',
    'ui.bootstrap',
    'ngResource',
    'angular-websocket',
    'chart.js',
    'luegg.directives'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $resourceProvider) {
        $urlRouterProvider.otherwise('packets');
        $locationProvider.html5Mode({ enabled: true, requireBase: true, rewriteLinks: true });

        $resourceProvider.defaults.stripTrailingSlashes = false;
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    })

    .run(function ($rootScope, resourceSocket) {
        resourceSocket.connect();
    })
;
