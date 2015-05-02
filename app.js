'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Hawtiotheme = new Module('hawtiotheme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Hawtiotheme.register(function(app, auth, database) {

  app.set('views', __dirname + '/server/views');

  //We enable routing. By default the Package Object is passed to the routes
  Hawtiotheme.routes(app, auth, database);


  //meanio theme
  Hawtiotheme.aggregateAsset('css', 'hawtiotheme.css');
  Hawtiotheme.aggregateAsset('css', 'main.css', {global:true,  weight: -4, group: 'footer'});

  //themecss
  Hawtiotheme.aggregateAsset('css', '../lib/patternfly/dist/css/patternfly.css', {global:true,  weight: -5, group: 'footer'});
  Hawtiotheme.aggregateAsset('css', '../lib/messenger/build/css/messenger-theme-flat.css', {global:true,  weight: -6, group: 'footer'});
  Hawtiotheme.aggregateAsset('css', '../lib/kubernetes-label-selector/labelFilter.css', {global:true,  weight: -7, group: 'footer'});

  //angular-messages
  Hawtiotheme.aggregateAsset('js', '../lib/angular-messages/angular-messages.js');
  //angular-sanitize
  Hawtiotheme.aggregateAsset('js', '../lib/angular-sanitize/angular-sanitize.js');
  //angular-animate
  Hawtiotheme.aggregateAsset('js', '../lib/angular-animate/angular-animate.js');
  //angular-file-upload
  Hawtiotheme.aggregateAsset('js', '../lib/angular-file-upload/angular-file-upload.js');
  //angular-ui-grid
  Hawtiotheme.aggregateAsset('js', '../lib/angular-ui-grid/ui-grid.js');
  Hawtiotheme.aggregateAsset('css', '../lib/angular-ui-grid/ui-grid.css');
  //angular-ui-select
  Hawtiotheme.aggregateAsset('js', '../lib/angular-ui-select/dist/select.js');
  Hawtiotheme.aggregateAsset('css', '../lib/angular-ui-select/dist/select.css');
  //angular-ui-select-utils
  Hawtiotheme.aggregateAsset('js', '../lib/angular-ui-select-utils/dist/select.utils.js');
  //angular-ui-utils
  Hawtiotheme.aggregateAsset('js', '../lib/angular-ui-utils/ui-utils.js');
  //angular-input-masks
  Hawtiotheme.aggregateAsset('js', '../lib/angular-input-masks/angular-input-masks.js');
  //angular-toastr
  Hawtiotheme.aggregateAsset('css', '../lib/angular-toastr/dist/angular-toastr.css');
  Hawtiotheme.aggregateAsset('js', '../lib/angular-toastr/dist/angular-toastr.tpls.js');
  //angular-xeditable
  Hawtiotheme.aggregateAsset('css', '../lib/angular-xeditable/dist/css/xeditable.css');
  Hawtiotheme.aggregateAsset('js', '../lib/angular-xeditable/dist/js/xeditable.js');
  //ng-autofocus
  Hawtiotheme.aggregateAsset('js', '../lib/ng-autofocus/dist/ng-autofocus.js');
  //restangular
  Hawtiotheme.aggregateAsset('js', '../lib/underscore/underscore.js');
  Hawtiotheme.aggregateAsset('js', '../lib/restangular/dist/restangular.js');
  //sg-iso3166
  Hawtiotheme.aggregateAsset('js', '../lib/sg-iso3166/dist/sg-iso3166.js');
  //sg-iso4217
  Hawtiotheme.aggregateAsset('js', '../lib/sg-iso4217/dist/sg-iso4217.js');
  //sg-ubigeo
  Hawtiotheme.aggregateAsset('js', '../lib/sg-ubigeo/dist/sg-ubigeo.js');
  //sg-persona
  Hawtiotheme.aggregateAsset('js', '../lib/sg-persona/dist/sg-persona.js');
  //sg-producto
  Hawtiotheme.aggregateAsset('js', '../lib/sg-producto/dist/sg-producto.js');
  //sg-rrhh
  Hawtiotheme.aggregateAsset('js', '../lib/sg-rrhh/dist/sg-rrhh.js');
  //sg-utils
  Hawtiotheme.aggregateAsset('js', '../lib/sg-utils/dist/sg-utils.js');


  Hawtiotheme.angularDependencies([
    'mean.system',
    'ngMessages',
    'ngSanitize',
    'ngAnimate',
    'angularFileUpload',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.selection',
    'ui.select',
    'ui.select.utils',
    'ui.utils',
    'ui.utils.masks',
    'toastr',
    'xeditable',
    'ng-autofocus',
    'restangular',
    'sg-iso3166',
    'sg-iso4217',
    'sg-ubigeo',
    'sg-persona',
    'sg-producto',
    'sg-rrhh',
    'sg-utils'
  ]);

  return Hawtiotheme;
});
