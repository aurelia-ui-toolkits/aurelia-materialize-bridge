var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../paths');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  var bs = browserSync.get('Sample server');

  gulp.watch(paths.source, ['build-dev', bs.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['copy-html', bs.reload]).on('change', reportChange);
  gulp.watch(paths.sampleStyle, bs.reload).on('change', reportChange);
  gulp.watch(paths.sampleSrc, bs.reload).on('change', reportChange);
  gulp.watch(paths.sampleHtml, bs.reload).on('change', reportChange);
});
