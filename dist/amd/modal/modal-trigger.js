define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _commonAttributeManager) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdModalTrigger = (function () {
    function MdModalTrigger(element) {
      _classCallCheck(this, _MdModalTrigger);

      this.element = element;
      this.attributeManager = new _commonAttributeManager.AttributeManager(this.element);
    }

    MdModalTrigger.prototype.attached = function attached() {
      this.attributeManager.addClasses('modal-trigger');
      $(this.element).leanModal();
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
});