'use strict';

/* jshint -W098 */

angular.module('mean.hawtiotheme').config(['$viewPathProvider', function($viewPathProvider) {

  $viewPathProvider.override('system/views/index.html', 'hawtiotheme/views/index.html');

}]);

angular.module('mean.hawtiotheme').config(function($provide, sgKeycloakProvider) {
  sgKeycloakProvider.restUrl = 'http://localhost:8080/auth/admin/realms/sistcoop';
});

angular.module('mean.hawtiotheme').config(function(sgIso3166Provider) {
  sgIso3166Provider.restUrl = 'http://localhost:8080/iso3166/rest';
});

angular.module('mean.hawtiotheme').config(function(sgIso4217Provider) {
  sgIso4217Provider.restUrl = 'http://localhost:8080/iso4217/rest';
});

angular.module('mean.hawtiotheme').config(function(sgUbigeoProvider) {
  sgUbigeoProvider.restUrl = 'http://localhost:8080/ubigeo/rest';
});

angular.module('mean.hawtiotheme').config(function(sgProductoProvider) {
  sgProductoProvider.restUrl = 'http://localhost:8080/producto/rest';
});

angular.module('mean.hawtiotheme').config(function(sgPersonaProvider) {
  sgPersonaProvider.restUrl = 'http://localhost:8080/persona/rest';
});

angular.module('mean.hawtiotheme').config(function(sgRrhhProvider) {
  sgRrhhProvider.restUrl = 'http://localhost:8080/rrhh/rest';
});

angular.module('mean.hawtiotheme').config(function(sgCooperativaProvider) {
  sgCooperativaProvider.restUrl = 'http://localhost:8080/cooperativa/rest';
});

angular.module('mean.hawtiotheme').run(function(editableOptions, editableThemes) {
  editableThemes.bs3.inputClass = 'input-sm form-control';
  editableThemes.bs3.buttonsClass = 'btn-sm';
  editableOptions.theme = 'bs3';
});