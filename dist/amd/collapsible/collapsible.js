define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributes, _attributeManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCollapsible = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _dec4, _class;

  var MdCollapsible = exports.MdCollapsible = (_dec = (0, _aureliaTemplating.customAttribute)('md-collapsible'), _dec2 = (0, _aureliaTemplating.bindable)({ name: 'accordion', defaultValue: false }), _dec3 = (0, _aureliaTemplating.bindable)({ name: 'popout', defaultValue: false }), _dec4 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function () {
    function MdCollapsible(element) {
      _classCallCheck(this, MdCollapsible);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdCollapsible.prototype.attached = function attached() {
      this.attributeManager.addClasses('collapsible');
      if ((0, _attributes.getBooleanFromAttributeValue)(this.popout)) {
        this.attributeManager.addClasses('popout');
      }
      this.refresh();
    };

    MdCollapsible.prototype.detached = function detached() {
      this.attributeManager.removeClasses(['collapsible', 'popout']);
      this.attributeManager.removeAttributes(['data-collapsible']);
    };

    MdCollapsible.prototype.refresh = function refresh() {
      var accordion = (0, _attributes.getBooleanFromAttributeValue)(this.accordion);
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
  }()) || _class) || _class) || _class) || _class);
});