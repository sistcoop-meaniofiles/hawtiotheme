'use strict';

angular.module('mean.rrhh').factory('SGSession',
    function ($q, Auth, SGTrabajadorUsuario, SGTrabajador, SGAgencia, SGTrabajadorCaja) {

        var auth = {
            getSucursal: function () {

                //Usuario de la session
                var username = Auth.authz.idTokenParsed.preferred_username;

                //iniciando promise
                var deferred = $q.defer();

                //Buscar TrabajadorUsuario
                SGTrabajadorUsuario.$findByUsuario(username).then(
                    function (response) {

                        if (response) {
                            SGTrabajador.$new(response.trabajador.id).$getAgencia().then(
                                function (agencia) {
                                    //resuelve promise con otra promise de Restangular
                                    deferred.resolve(SGAgencia.$new(agencia.id).$getSucursal());
                                },
                                function error(err) {
                                    deferred.reject('Agencia no encontrada para trabajador');
                                }
                            );
                        }
                        else {
                            deferred.reject('TrabajadorUsuario no tiene Trabajador');
                        }

                    },
                    function error(err) {
                        deferred.reject('TrabajadorUsuario no encontrado');
                    }
                );

                return deferred.promise;

            },
            getAgencia: function () {

                //Usuario de la session
                var username = Auth.authz.idTokenParsed.preferred_username;

                //iniciando promise
                var deferred = $q.defer();

                //Buscar TrabajadorUsuario
                SGTrabajadorUsuario.$findByUsuario(username).then(
                    function (response) {

                        if (response) {
                            deferred.resolve(SGTrabajador.$new(response.trabajador.id).$getAgencia());
                        }
                        else {
                            deferred.reject('TrabajadorUsuario no tiene Trabajador');
                        }

                    },
                    function error(err) {
                        deferred.reject('TrabajadorUsuario no encontrado');
                    }
                );

                return deferred.promise;

            },
            getTrabajadorCaja: function () {

                //Usuario de la session
                var username = Auth.authz.idTokenParsed.preferred_username;

                return SGTrabajadorUsuario.$findByUsuario(username);

            },
            getCaja: function () {

                //Usuario de la session
                var username = Auth.authz.idTokenParsed.preferred_username;

                //iniciando promise
                var deferred = $q.defer();

                //Buscar TrabajadorUsuario
                SGTrabajadorUsuario.$findByUsuario(username).then(
                    function (response) {

                        if (response) {
                            var tipoDocumento = response.trabajador.tipoDocumento;
                            var numeroDocumento = response.trabajador.numeroDocumento;

                            deferred.resolve(SGTrabajadorCaja.$findByTipoNumeroDocumento(tipoDocumento, numeroDocumento));
                        }
                        else {
                            deferred.reject('TrabajadorUsuario no tiene Trabajador');
                        }

                    },
                    function error(err) {
                        deferred.reject('TrabajadorUsuario no encontrado');
                    }
                );

                return deferred.promise;
            }
        };

        return auth;

    });