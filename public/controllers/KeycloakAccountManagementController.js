'use strict';

/* jshint -W098 */
angular.module('mean.hawtiotheme').controller('KeycloakAccountManagementController',
    function ($scope, Auth) {

        $scope.user = {
            username: Auth.authz.idTokenParsed.preferred_username,
            roles: []
        };

        $scope.loadRoles = function () {
            var realmRoles = Auth.authz.realmAccess.roles;
            for (var i = 0; i < realmRoles.length; i++) {
                $scope.user.roles.push(realmRoles[i]);
            }
        };
        $scope.loadRoles();

    }
);