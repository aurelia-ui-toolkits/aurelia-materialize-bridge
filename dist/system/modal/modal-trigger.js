'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/events'], function (_export, _context) {
  var customAttribute, inject, AttributeManager, fireMaterializeEvent, _dec, _dec2, _class, MdModalTrigger;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonEvents) {
      fireMaterializeEvent = _commonEvents.fireMaterializeEvent;
    }],
    execute: function () {
      _export('MdModalTrigger', MdModalTrigger = (_dec = customAttribute('md-modal-trigger'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function MdModalTrigger(element) {
          _classCallCheck(this, MdModalTrigger);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
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
          fireMaterializeEvent(this.element, 'modal-complete');
        };

        return MdModalTrigger;
      }()) || _class) || _class));

      _export('MdModalTrigger', MdModalTrigger);
    }
  };
});