define(['exports', 'aurelia-event-aggregator', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager'], function (exports, _aureliaEventAggregator, _aureliaTemplating, _aureliaDependencyInjection, _attributes, _attributeManager) {
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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

  var MdCollapsible = exports.MdCollapsible = (_dec = (0, _aureliaTemplating.customAttribute)('md-collapsible'), _dec2 = (0, _aureliaTemplating.bindable)({ name: 'accordion', defaultValue: false }), _dec3 = (0, _aureliaTemplating.bindable)({ name: 'popout', defaultValue: false }), _dec4 = (0, _aureliaTemplating.bindable)({ name: 'onOpen' }), _dec5 = (0, _aureliaTemplating.bindable)({ name: 'onClose' }), _dec6 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = function () {
    function MdCollapsible(element, eventAggregator) {
      _classCallCheck(this, MdCollapsible);

      this.element = element;
      this.eventAggregator = eventAggregator;
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
      var dataCollapsibleAttributeValue = accordion ? 'accordion' : 'expandable';

      this.attributeManager.addAttributes({ 'data-collapsible': dataCollapsibleAttributeValue });

      $(this.element).collapsible({
        accordion: accordion,
        onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
        onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
      });
    };

    MdCollapsible.prototype.accordionChanged = function accordionChanged() {
      this.refresh();
    };

    MdCollapsible.prototype.buildCollapsibleOpenCloseCallbackHandler = function buildCollapsibleOpenCloseCallbackHandler(handler) {
      return typeof handler === 'function' ? function (targetElementJquery) {
        var targetElement = targetElementJquery[0];

        handler(targetElement);
      } : null;
    };

    return MdCollapsible;
  }()) || _class) || _class) || _class) || _class) || _class) || _class);
});