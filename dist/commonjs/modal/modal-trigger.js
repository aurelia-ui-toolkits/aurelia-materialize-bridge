'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _commonAttributeManager = require('../common/attributeManager');

var MdModalTrigger = (function () {
  function MdModalTrigger(element) {
    _classCallCheck(this, _MdModalTrigger);

    this.element = element;
    this.attributeManager = new _commonAttributeManager.AttributeManager(this.element);
  }

  MdModalTrigger.prototype.attached = function attached() {
    this.attributeManager.addClasses('modal-trigger');
  };

  MdModalTrigger.prototype.detached = function detached() {
    this.attributeManager.removeClasses('modal-trigger');
  };

  var _MdModalTrigger = MdModalTrigger;
  MdModalTrigger = _aureliaDependencyInjection.inject(Element)(MdModalTrigger) || MdModalTrigger;
  MdModalTrigger = _aureliaTemplating.customAttribute('md-modal-trigger')(MdModalTrigger) || MdModalTrigger;
  return MdModalTrigger;
})();

exports.MdModalTrigger = MdModalTrigger;