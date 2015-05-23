'use strict';

/* jshint -W098 */
angular.module('mean.hawtiotheme').controller('KeycloakAccountController', ['$scope', 'Auth',
    function ($scope, Auth) {
        Auth.authz.accountManagement();
    }
]);