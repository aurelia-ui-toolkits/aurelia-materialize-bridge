define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/events'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdModalTrigger = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdModalTrigger = exports.MdModalTrigger = (_dec = (0, _aureliaTemplating.customAttribute)('md-modal-trigger'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function MdModalTrigger(element) {
      _classCallCheck(this, MdModalTrigger);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
      this.onComplete = this.onComplete.bind(this);
    }

    MdModalTrigger.prototype.attached = function attached() {
      this.attributeManager.addClasses('modal-trigger');
      $(this.element).leanModal({
        complete: this.onComplete
      });
    };

    MdModalTrigger.prototype.detached = function detached() {
      this.attributeManager.removeClasses('modal-trigger');
    };

    MdModalTrigger.prototype.onComplete = function onComplete() {
      (0, _events.fireMaterializeEvent)(this.element, 'modal-complete');
    };

    return MdModalTrigger;
  }()) || _class) || _class);
});