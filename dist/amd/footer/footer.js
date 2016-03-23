define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdFooter = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdFooter = exports.MdFooter = (_dec = (0, _aureliaTemplating.customAttribute)('md-footer'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function MdFooter(element) {
      _classCallCheck(this, MdFooter);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdFooter.prototype.bind = function bind() {
      this.attributeManager.addClasses('page-footer');
    };

    MdFooter.prototype.unbind = function unbind() {
      this.attributeManager.removeClasses('page-footer');
    };

    return MdFooter;
  }()) || _class) || _class);
});