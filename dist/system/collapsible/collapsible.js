'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, inject, getBooleanFromAttributeValue, AttributeManager, _dec, _dec2, _dec3, _dec4, _class, MdCollapsible;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }],
    execute: function () {
      _export('MdCollapsible', MdCollapsible = (_dec = customAttribute('md-collapsible'), _dec2 = bindable({ name: 'accordion', defaultValue: false }), _dec3 = bindable({ name: 'popout', defaultValue: false }), _dec4 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function () {
        function MdCollapsible(element) {
          _classCallCheck(this, MdCollapsible);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdCollapsible.prototype.attached = function attached() {
          this.attributeManager.addClasses('collapsible');
          if (getBooleanFromAttributeValue(this.popout)) {
            this.attributeManager.addClasses('popout');
          }
          this.refresh();
        };

        MdCollapsible.prototype.detached = function detached() {
          this.attributeManager.removeClasses(['collapsible', 'popout']);
          this.attributeManager.removeAttributes(['data-collapsible']);
        };

        MdCollapsible.prototype.refresh = function refresh() {
          var accordion = getBooleanFromAttributeValue(this.accordion);
          if (accordion) {
            this.attributeManager.addAttributes({ 'data-collapsible': 'accordion' });
          } else {
            this.attributeManager.addAttributes({ 'data-collapsible': 'expandable' });
          }

          $(this.element).collapsible({
            accordion: accordion
          });
        };

        MdCollapsible.prototype.accordionChanged = function accordionChanged() {
          this.refresh();
        };

        return MdCollapsible;
      }()) || _class) || _class) || _class) || _class));

      _export('MdCollapsible', MdCollapsible);
    }
  };
});