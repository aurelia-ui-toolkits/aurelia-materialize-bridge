var path = require('path');
var paths = require('./paths');

exports.base = function() {
  return {
    filename: '',
    filenameRelative: '',
    sourceMap: true,
    sourceRoot: '',
    moduleRoot: path.resolve('src').replace(/\\/g, '/'),
    moduleIds: false,
    // experimental: false,
    comments: false,
    compact: false,
    code: true,
    presets: [ 'es2015-loose', 'stage-1' ],
    plugins: [
      'syntax-flow',
      'transform-decorators-legacy',
      'transform-flow-strip-types'
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
  // options.plugins.push([
  //   'transform-es2015-modules-systemjs', {
  //     strict: false
  //   }
  // ]);
  options.plugins.push('transform-remove-strict-mode');
  return options;
};

exports.es2015 = function() {
  var options = exports.base();
  options.presets = ['stage-1'];
  return options;
};

exports.babelDtsGenerator = function() {
  var options = exports.base();
  options.plugins.push([
    'babel-dts-generator', {
      packageName: paths.packageName,
      typings: '',
      suppressModulePath: true,
      suppressComments: false,
      memberOutputFilter: /^_.*/,
      suppressAmbientDeclaration: true
    }
  ]);
  return options;
};
