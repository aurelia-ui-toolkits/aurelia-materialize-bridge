var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var through2 = require('through2');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var tools = require('aurelia-tools');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var vinylPaths = require('vinyl-paths');

var jsName = paths.packageName + '.js';

gulp.task('build-index', function(){
  var importsToAdd = [];

  return gulp.src(paths.source)
    .pipe(through2.obj(function(file, enc, callback) {
      file.contents = new Buffer(tools.extractImports(file.contents.toString("utf8"), importsToAdd));
      this.push(file);
      return callback();
    }))
    .pipe(concat(jsName))
    .pipe(insert.transform(function(contents) {
      return tools.createImportBlock(importsToAdd) + contents;
    }))
    .pipe(gulp.dest(paths.output));
});


gulp.task('build-es6-temp', function () {
    return gulp.src(paths.output + jsName)
      .pipe(to5(assign({}, compilerOptions, {modules:'common'})))
      .pipe(gulp.dest(paths.output + 'temp'));
});

gulp.task('build-es6', function () {
  return gulp.src(paths.source)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-commonjs', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'common', plugins: []})))
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-amd', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'amd', plugins: []})))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-system', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'system', plugins: []})))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-dev', function () {
  return gulp.src(paths.source)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions, {modules:'system', plugins: []})))
    .pipe(sourcemaps.write(paths.output + 'dev'))
    .pipe(gulp.dest(paths.output + 'dev'));
});

gulp.task('build-dts', function(){
  return gulp.src(paths.output + paths.packageName + '.d.ts')
      .pipe(rename(paths.packageName + '.d.ts'))
      .pipe(gulp.dest(paths.output + 'es6'))
      .pipe(gulp.dest(paths.output + 'commonjs'))
      .pipe(gulp.dest(paths.output + 'amd'))
      .pipe(gulp.dest(paths.output + 'dev'))
      .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('copy-html', function() {
 return gulp.src(paths.html)
  .pipe(gulp.dest(paths.output + 'es6'))
  .pipe(gulp.dest(paths.output + 'commonjs'))
  .pipe(gulp.dest(paths.output + 'amd'))
  .pipe(gulp.dest(paths.output + 'dev'))
  .pipe(gulp.dest(paths.output + 'system'));

});

gulp.task('copy-css', function() {
 return gulp.src(paths.style)
  .pipe(gulp.dest(paths.output + 'es6'))
  .pipe(gulp.dest(paths.output + 'commonjs'))
  .pipe(gulp.dest(paths.output + 'amd'))
  .pipe(gulp.dest(paths.output + 'dev'))
  .pipe(gulp.dest(paths.output + 'system'));

});


gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    'build-index',
    ['build-es6-temp', 'build-es6', 'build-commonjs', 'build-amd', 'build-system', 'build-dev'],
    ['copy-html', 'copy-css'],
    'build-dts',
    callback
  );
});

gulp.task('build-release', function(callback) {
  paths.output = paths.releaseOutput;
  return runSequence(
    'clean',
    'build-index',
    ['build-es6-temp', 'build-es6', 'build-commonjs', 'build-amd', 'build-system', 'build-dev'],
    ['copy-html', 'copy-css'],
    'build-dts',
    callback
  );
});
