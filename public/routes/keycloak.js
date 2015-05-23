'use strict';

angular.module('mean.hawtiotheme').config(['$stateProvider',
    function ($stateProvider) {

        $stateProvider
            .state('keycloak', {
                url: '/keycloak',
                templateUrl: '<div></div>',
                abstract: true
            }).state('keycloak.auth', {
                url: '/auth',
                templateUrl: '<div></div>'
            }).state('keycloak.auth.logout', {
                url: '/logout',
                template: '<div></div>',
                controller: 'KeycloakLogoutController'
            }).state('keycloak.auth.account', {
                url: '/account',
                template: '<div>account management</div>',
                controller: 'KeycloakAccountController'
            });

    }
]);