define(['exports', 'aurelia-framework', '../common/attributes', '../common/cssClassSetter'], function (exports, _aureliaFramework, _commonAttributes, _commonCssClassSetter) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdCollapsible = (function () {
    function MdCollapsible(element) {
      _classCallCheck(this, _MdCollapsible);

      this.element = element;
      this.classSetter = new _commonCssClassSetter.CssClassSetter(this.element);
    }

    MdCollapsible.prototype.attached = function attached() {
      this.classSetter.addClasses('collapsible');
      if (_commonAttributes.getBooleanFromAttributeValue(this.popout)) {
        this.classSetter.addClasses('popout');
      }
      this.refresh();
    };

    MdCollapsible.prototype.detached = function detached() {
      this.classSetter.removeClasses(['collapsible', 'popout']);
    };

    MdCollapsible.prototype.refresh = function refresh() {
      var accordion = _commonAttributes.getBooleanFromAttributeValue(this.accordion);
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
    MdCollapsible = _aureliaFramework.inject(Element)(MdCollapsible) || MdCollapsible;
    MdCollapsible = _aureliaFramework.bindable({ name: 'popout', defaultValue: false })(MdCollapsible) || MdCollapsible;
    MdCollapsible = _aureliaFramework.bindable({ name: 'accordion', defaultValue: false })(MdCollapsible) || MdCollapsible;
    MdCollapsible = _aureliaFramework.customAttribute('md-collapsible')(MdCollapsible) || MdCollapsible;
    return MdCollapsible;
  })();

  exports.MdCollapsible = MdCollapsible;
});