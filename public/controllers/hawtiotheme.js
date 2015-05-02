'use strict';

/* jshint -W098 */
angular.module('mean.hawtiotheme').controller('HawtiothemeController', ['$scope', 'Global', 'Hawtiotheme',
  function($scope, Global, Hawtiotheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'hawtiotheme'
    };
  }
]);
