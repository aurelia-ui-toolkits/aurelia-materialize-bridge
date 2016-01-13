var gulp = require('gulp');
var browserSync = require('browser-sync');
var path = require('path');
var paths = require('../paths');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  var bs = browserSync.create('Sample server');

  var options = {
    server: {
      baseDir: paths.sample,
      routes: {
        '/src/root/': './'
      },
    },
  };

  // Create a route to the build output directory so we can load the plugin from the subdir
  
  options.server.routes['/src/' + paths.packageName] = path.join(paths.output, 'system');

  bs.init(options, done);
});
