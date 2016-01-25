System.register(['aurelia-framework', '../common/attributes', '../common/cssClassSetter'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, getBooleanFromAttributeValue, CssClassSetter, MdCollapsible;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }, function (_commonCssClassSetter) {
      CssClassSetter = _commonCssClassSetter.CssClassSetter;
    }],
    execute: function () {
      MdCollapsible = (function () {
        function MdCollapsible(element) {
          _classCallCheck(this, _MdCollapsible);

          this.element = element;
          this.classSetter = new CssClassSetter(this.element);
        }

        MdCollapsible.prototype.attached = function attached() {
          this.classSetter.addClasses('collapsible');
          if (getBooleanFromAttributeValue(this.popout)) {
            this.classSetter.addClasses('popout');
          }
          this.refresh();
        };

        MdCollapsible.prototype.detached = function detached() {
          this.classSetter.removeClasses(['collapsible', 'popout']);
        };

        MdCollapsible.prototype.refresh = function refresh() {
          var accordion = getBooleanFromAttributeValue(this.accordion);
          if (accordion) {
            this.element.setAttribute('data-collapsible', 'accordion');
          } else {
            this.element.setAttribute('data-collapsible', 'expandable');
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