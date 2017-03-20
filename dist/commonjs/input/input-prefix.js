'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdPrefix = undefined;

var _dec, _dec2, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _attributeManager = require('../common/attributeManager');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MdPrefix = exports.MdPrefix = (_dec = (0, _aureliaTemplating.customAttribute)('md-prefix'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
  function MdPrefix(element) {
    _classCallCheck(this, MdPrefix);

    this.element = element;
    this.attributeManager = new _attributeManager.AttributeManager(this.element);
  }

  MdPrefix.prototype.bind = function bind() {
    this.attributeManager.addClasses('prefix');
  };

  MdPrefix.prototype.unbind = function unbind() {
    this.attributeManager.removeClasses('prefix');
  };

  return MdPrefix;
}()) || _class) || _class);