var path = require('path');
var fs = require('fs');

var appRoot = 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: appRoot + '**/*.css',
  output: 'devbuild/',
  releaseOutput: 'dist/',
  sample: 'sample',
  sampleSrc: './sample/src/**/*.js',
  sampleStyle: './sample/styles/**/*.css',
  sampleHtml: './sample/src/**/*.html',
  doc:'./doc',
  tests: 'test/unit/**/*.js',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  packageName: pkg.name,
};
