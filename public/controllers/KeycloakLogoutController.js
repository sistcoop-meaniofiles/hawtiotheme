'use strict';

/* jshint -W098 */
angular.module('mean.hawtiotheme').controller('KeycloakLogoutController', ['$scope', 'Auth',
    function ($scope, Auth) {
        Auth.authz.logout();
    }
]);