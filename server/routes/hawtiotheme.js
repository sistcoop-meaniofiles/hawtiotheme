'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Hawtiotheme, app, auth, database) {

  app.get('/hawtiotheme/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/hawtiotheme/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/hawtiotheme/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/hawtiotheme/example/render', function(req, res, next) {
    Hawtiotheme.render('index', {
      package: 'hawtiotheme'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
