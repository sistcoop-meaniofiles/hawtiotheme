'use strict';

angular.module('mean.hawtiotheme').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('hawtiotheme example page', {
      url: '/hawtiotheme/example',
      templateUrl: 'hawtiotheme/views/index.html'
    });
  }
]);
