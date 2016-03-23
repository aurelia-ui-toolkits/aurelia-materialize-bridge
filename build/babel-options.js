var path = require('path');
var paths = require('./paths');

exports.base = function() {
  return {
    filename: '',
    filenameRelative: '',
    // modules: '',
    sourceMap: true,
    // sourceMapName: '',
    sourceRoot: '',
    moduleRoot: path.resolve('src').replace(/\\/g, '/'),
    moduleIds: false,
    // experimental: false,
    comments: false,
    compact: false,
    code:true,
    // stage:2,
    presets: [ 'es2015-loose', 'stage-1' ],
    // loose: "all",
    // optional: [
    //   "es7.decorators",
    //   "es7.classProperties"
    // ],
    plugins: [
      // "babel-dts-generator",
      "syntax-flow",
      "transform-decorators-legacy",
      "transform-flow-strip-types"
    ]
  };
};

exports.commonjs = function() {
  var options = exports.base();
  options.plugins.push('transform-es2015-modules-commonjs');
  return options;
};

exports.amd = function() {
  var options = exports.base();
  options.plugins.push('transform-es2015-modules-amd');
  return options;
};

exports.system = function() {
  var options = exports.base();
  options.plugins.push('transform-es2015-modules-systemjs');
  return options;
};

exports.es2015 = function() {
  var options = exports.base();
  options.presets = ['tage-1'];
  return options;
};
