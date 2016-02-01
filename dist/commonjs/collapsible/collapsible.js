'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _commonAttributes = require('../common/attributes');

var _commonAttributeManager = require('../common/attributeManager');

var MdCollapsible = (function () {
  function MdCollapsible(element) {
    _classCallCheck(this, _MdCollapsible);

    this.element = element;
    this.attributeManager = new _commonAttributeManager.AttributeManager(this.element);
  }

  MdCollapsible.prototype.attached = function attached() {
    this.attributeManager.addClasses('collapsible');
    if (_commonAttributes.getBooleanFromAttributeValue(this.popout)) {
      this.attributeManager.addClasses('popout');
    }
    this.refresh();
  };

  MdCollapsible.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['collapsible', 'popout']);
    this.attributeManager.removeAttributes(['data-collapsible']);
  };

  MdCollapsible.prototype.refresh = function refresh() {
    var accordion = _commonAttributes.getBooleanFromAttributeValue(this.accordion);
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
  MdCollapsible = _aureliaDependencyInjection.inject(Element)(MdCollapsible) || MdCollapsible;
  MdCollapsible = _aureliaTemplating.bindable({ name: 'popout', defaultValue: false })(MdCollapsible) || MdCollapsible;
  MdCollapsible = _aureliaTemplating.bindable({ name: 'accordion', defaultValue: false })(MdCollapsible) || MdCollapsible;
  MdCollapsible = _aureliaTemplating.customAttribute('md-collapsible')(MdCollapsible) || MdCollapsible;
  return MdCollapsible;
})();

exports.MdCollapsible = MdCollapsible;