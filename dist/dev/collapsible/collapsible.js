System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, getBooleanFromAttributeValue, AttributeManager, MdCollapsible;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
      MdCollapsible = (function () {
        function MdCollapsible(element) {
          _classCallCheck(this, _MdCollapsible);

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

        var _MdCollapsible = MdCollapsible;
        MdCollapsible = inject(Element)(MdCollapsible) || MdCollapsible;
        MdCollapsible = bindable({ name: 'popout', defaultValue: false })(MdCollapsible) || MdCollapsible;
        MdCollapsible = bindable({ name: 'accordion', defaultValue: false })(MdCollapsible) || MdCollapsible;
        MdCollapsible = customAttribute('md-collapsible')(MdCollapsible) || MdCollapsible;
        return MdCollapsible;
      })();

      _export('MdCollapsible', MdCollapsible);
    }
  };
});
//# sourceMappingURL=../dist/dev/collapsible/collapsible.js.map
