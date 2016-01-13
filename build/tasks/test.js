var gulp = require('gulp');
var karma = require('karma');
var coveralls = require('gulp-coveralls');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new karma.Server({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: true
    }, function(e) {
        done(e === 0 ? null : 'karma exited with status ' + e);
    }).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    new karma.Server({
        configFile: __dirname + '/../../karma.conf.js'
    }, function(e) {
        done();
    }).start();
});

/**
 * Report coverage to coveralls
 */
gulp.task('coveralls', ['test'], function (done) {
  gulp.src('build/reports/coverage/lcov/report-lcovonly.txt')
    .pipe(coveralls());
});
