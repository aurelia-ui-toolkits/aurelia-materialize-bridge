'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
exports.fireEvent = fireEvent;
exports.fireMaterializeEvent = fireMaterializeEvent;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('materialize');

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

var _aureliaFramework = require('aurelia-framework');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var ClickCounter = (function () {
  function ClickCounter() {
    _classCallCheck(this, ClickCounter);

    this.count = 0;
  }

  ClickCounter.prototype.increment = function increment() {
    this.count++;
  };

  return ClickCounter;
})();

exports.ClickCounter = ClickCounter;

var ConfigBuilder = (function () {
  function ConfigBuilder() {
    _classCallCheck(this, ConfigBuilder);

    this.useGlobalResources = true;
    this.globalResources = [];
  }

  ConfigBuilder.prototype.useAll = function useAll() {
    return this.useBox().useButton().useCard().useCarousel().useCheckbox().useCollapsible().useColors().useDatePicker().useDropdown().useFab().useModal().useNavbar().useParallax().usePushpin().useScrollfire().useSelect().useSidenav().useSlider().useSwitch().useTabs().useTooltip().useTransitions().useWaves().useWell();
  };

  ConfigBuilder.prototype.useBox = function useBox() {
    this.globalResources.push('./box/box');
    return this;
  };

  ConfigBuilder.prototype.useButton = function useButton() {
    this.globalResources.push('./button/button');
    return this;
  };

  ConfigBuilder.prototype.useCarousel = function useCarousel() {
    this.globalResources.push('./carousel/carousel');
    this.globalResources.push('./carousel/carousel-item');
    return this;
  };

  ConfigBuilder.prototype.useCard = function useCard() {
    this.globalResources.push('./card/card');
    return this;
  };

  ConfigBuilder.prototype.useCheckbox = function useCheckbox() {
    this.globalResources.push('./checkbox/checkbox');
    return this;
  };

  ConfigBuilder.prototype.useClickCounter = function useClickCounter() {
    this.globalResources.push('./click-counter');
    return this;
  };

  ConfigBuilder.prototype.useCollapsible = function useCollapsible() {
    this.globalResources.push('./collapsible/collapsible');
    return this;
  };

  ConfigBuilder.prototype.useColors = function useColors() {
    this.globalResources.push('./colors/md-colors.html');
    return this;
  };

  ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
    this.globalResources.push('./datepicker/datepicker');
    return this;
  };

  ConfigBuilder.prototype.useDropdown = function useDropdown() {
    this.globalResources.push('./dropdown/dropdown');
    return this;
  };

  ConfigBuilder.prototype.useFab = function useFab() {
    this.globalResources.push('./fab/fab');
    return this;
  };

  ConfigBuilder.prototype.useModal = function useModal() {
    this.globalResources.push('./modal/modal-trigger');
    return this;
  };

  ConfigBuilder.prototype.useNavbar = function useNavbar() {
    this.globalResources.push('./navbar/navbar');
    return this;
  };

  ConfigBuilder.prototype.useParallax = function useParallax() {
    this.globalResources.push('./parallax/parallax');
    return this;
  };

  ConfigBuilder.prototype.usePushpin = function usePushpin() {
    this.globalResources.push('./pushpin/pushpin');
    return this;
  };

  ConfigBuilder.prototype.useScrollfire = function useScrollfire() {
    this.globalResources.push('./scrollfire/scrollfire');
    this.globalResources.push('./scrollfire/scrollfire-target');
    return this;
  };

  ConfigBuilder.prototype.useScrollSpy = function useScrollSpy() {
    this.globalResources.push('./scrollspy/scrollspy');
    return this;
  };

  ConfigBuilder.prototype.useSelect = function useSelect() {
    this.globalResources.push('./select/select');
    return this;
  };

  ConfigBuilder.prototype.useSidenav = function useSidenav() {
    this.globalResources.push('./sidenav/sidenav');
    this.globalResources.push('./sidenav/sidenav-collapse');
    return this;
  };

  ConfigBuilder.prototype.useSlider = function useSlider() {
    this.globalResources.push('./slider/slider');

    return this;
  };

  ConfigBuilder.prototype.useSwitch = function useSwitch() {
    this.globalResources.push('./switch/switch');
    return this;
  };

  ConfigBuilder.prototype.useTabs = function useTabs() {
    this.globalResources.push('./tabs/tabs');
    return this;
  };

  ConfigBuilder.prototype.useTooltip = function useTooltip() {
    this.globalResources.push('./tooltip/tooltip');
    return this;
  };

  ConfigBuilder.prototype.useTransitions = function useTransitions() {
    this.globalResources.push('./transitions/fadein-image');
    this.globalResources.push('./transitions/staggered-list');
    return this;
  };

  ConfigBuilder.prototype.useWaves = function useWaves() {
    this.globalResources.push('./waves/waves');
    return this;
  };

  ConfigBuilder.prototype.useWell = function useWell() {
    this.globalResources.push('./well/md-well.html');
    return this;
  };

  ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  return ConfigBuilder;
})();

exports.ConfigBuilder = ConfigBuilder;

function configure(aurelia, configCallback) {
  var builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
}

var MdBox = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(MdBox, [{
    key: 'caption',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function MdBox(element) {
    _classCallCheck(this, _MdBox);

    _defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdBox.prototype.attached = function attached() {
    this.attributeManager.addClasses('materialboxed');
    if (this.caption) {
      this.attributeManager.addAttributes({ 'data-caption': this.caption });
    }

    $(this.element).materialbox();
  };

  MdBox.prototype.detached = function detached() {
    this.attributeManager.removeAttributes('data-caption');
    this.attributeManager.removeClasses('materialboxed');
  };

  var _MdBox = MdBox;
  MdBox = _aureliaDependencyInjection.inject(Element)(MdBox) || MdBox;
  MdBox = _aureliaTemplating.customAttribute('md-box')(MdBox) || MdBox;
  return MdBox;
})();

exports.MdBox = MdBox;

var MdButton = (function () {
  var _instanceInitializers2 = {};

  _createDecoratedClass(MdButton, [{
    key: 'disabled',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'flat',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'floating',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'large',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }], null, _instanceInitializers2);

  function MdButton(element) {
    _classCallCheck(this, _MdButton);

    _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers2);

    _defineDecoratedPropertyDescriptor(this, 'flat', _instanceInitializers2);

    _defineDecoratedPropertyDescriptor(this, 'floating', _instanceInitializers2);

    _defineDecoratedPropertyDescriptor(this, 'large', _instanceInitializers2);

    this.attributeManager = new AttributeManager(element);
  }

  MdButton.prototype.attached = function attached() {
    var classes = [];

    if (getBooleanFromAttributeValue(this.flat)) {
      classes.push('btn-flat');
    }
    if (getBooleanFromAttributeValue(this.floating)) {
      classes.push('btn-floating');
    }
    if (getBooleanFromAttributeValue(this.large)) {
      classes.push('btn-large');
    }

    if (classes.length === 0) {
      classes.push('btn');
    }

    if (getBooleanFromAttributeValue(this.disabled)) {
      classes.push('disabled');
    }

    if (!getBooleanFromAttributeValue(this.flat)) {
      classes.push('accent');
    }
    this.attributeManager.addClasses(classes);
  };

  MdButton.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled']);
  };

  MdButton.prototype.disabledChanged = function disabledChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('disabled');
    } else {
      this.attributeManager.removeClasses('disabled');
    }
  };

  MdButton.prototype.flatChanged = function flatChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.removeClasses(['btn', 'accent']);
      this.attributeManager.addClasses('btn-flat');
    } else {
      this.attributeManager.removeClasses('btn-flat');
      this.attributeManager.addClasses(['btn', 'accent']);
    }
  };

  var _MdButton = MdButton;
  MdButton = _aureliaDependencyInjection.inject(Element)(MdButton) || MdButton;
  MdButton = _aureliaTemplating.customAttribute('md-button')(MdButton) || MdButton;
  return MdButton;
})();

exports.MdButton = MdButton;

var MdCard = (function () {
  var _instanceInitializers3 = {};

  _createDecoratedClass(MdCard, [{
    key: 'mdImage',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return null;
    },
    enumerable: true
  }, {
    key: 'mdTitle',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers3);

  function MdCard(element) {
    _classCallCheck(this, _MdCard);

    _defineDecoratedPropertyDescriptor(this, 'mdImage', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'mdTitle', _instanceInitializers3);

    this.element = element;
  }

  MdCard.prototype.attached = function attached() {};

  var _MdCard = MdCard;
  MdCard = _aureliaDependencyInjection.inject(Element)(MdCard) || MdCard;
  MdCard = _aureliaTemplating.customElement('md-card')(MdCard) || MdCard;
  return MdCard;
})();

exports.MdCard = MdCard;

var MdCarouselItem = (function () {
  var _instanceInitializers4 = {};

  _createDecoratedClass(MdCarouselItem, [{
    key: 'mdHref',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }, {
    key: 'mdImage',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneWay
    })],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }], null, _instanceInitializers4);

  function MdCarouselItem(element) {
    _classCallCheck(this, _MdCarouselItem);

    _defineDecoratedPropertyDescriptor(this, 'mdHref', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'mdImage', _instanceInitializers4);

    this.element = element;
  }

  MdCarouselItem.prototype.attached = function attached() {};

  var _MdCarouselItem = MdCarouselItem;
  MdCarouselItem = _aureliaDependencyInjection.inject(Element)(MdCarouselItem) || MdCarouselItem;
  return MdCarouselItem;
})();

exports.MdCarouselItem = MdCarouselItem;

var MdCarousel = (function () {
  var _instanceInitializers5 = {};

  _createDecoratedClass(MdCarousel, [{
    key: 'mdSlider',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }], null, _instanceInitializers5);

  function MdCarousel(element) {
    _classCallCheck(this, _MdCarousel);

    _defineDecoratedPropertyDescriptor(this, 'mdSlider', _instanceInitializers5);

    this.element = element;
  }

  MdCarousel.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdSlider)) {
      this.element.classList.add('carousel-slider');
    }

    if (getBooleanFromAttributeValue(this.mdSlider)) {
      $(this.element).carousel({ full_width: true });
    } else {
      $(this.element).carousel();
    }
  };

  var _MdCarousel = MdCarousel;
  MdCarousel = _aureliaDependencyInjection.inject(Element)(MdCarousel) || MdCarousel;
  MdCarousel = _aureliaTemplating.customElement('md-carousel')(MdCarousel) || MdCarousel;
  return MdCarousel;
})();

exports.MdCarousel = MdCarousel;

var MdCheckbox = (function () {
  var _instanceInitializers6 = {};

  _createDecoratedClass(MdCheckbox, [{
    key: 'mdChecked',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay
    })],
    initializer: null,
    enumerable: true
  }, {
    key: 'mdDisabled',
    decorators: [_aureliaTemplating.bindable()],
    initializer: null,
    enumerable: true
  }, {
    key: 'mdFilledIn',
    decorators: [_aureliaTemplating.bindable()],
    initializer: null,
    enumerable: true
  }], [{
    key: 'id',
    value: 0,
    enumerable: true
  }], _instanceInitializers6);

  function MdCheckbox(element) {
    _classCallCheck(this, _MdCheckbox);

    _defineDecoratedPropertyDescriptor(this, 'mdChecked', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'mdDisabled', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'mdFilledIn', _instanceInitializers6);

    this.element = element;
    this.controlId = 'md-checkbox-' + MdCheckbox.id++;
    this.handleChange = this.handleChange.bind(this);
  }

  MdCheckbox.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.checkbox);
    if (getBooleanFromAttributeValue(this.mdFilledIn)) {
      this.attributeManager.addClasses('filled-in');
    }
    if (this.mdChecked === null) {
      this.checkbox.indeterminate = true;
    } else {
      this.checkbox.indeterminate = false;
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    this.checkbox.addEventListener('change', this.handleChange);
  };

  MdCheckbox.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['filled-in', 'disabled']);
    this.checkbox.removeEventListener('change', this.handleChange);
  };

  MdCheckbox.prototype.handleChange = function handleChange() {
    this.mdChecked = this.checkbox.checked;
  };

  MdCheckbox.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  };

  MdCheckbox.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  };

  var _MdCheckbox = MdCheckbox;
  MdCheckbox = _aureliaDependencyInjection.inject(Element)(MdCheckbox) || MdCheckbox;
  MdCheckbox = _aureliaTemplating.customElement('md-checkbox')(MdCheckbox) || MdCheckbox;
  return MdCheckbox;
})();

exports.MdCheckbox = MdCheckbox;

var MdCollapsible = (function () {
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
  MdCollapsible = _aureliaDependencyInjection.inject(Element)(MdCollapsible) || MdCollapsible;
  MdCollapsible = _aureliaTemplating.bindable({ name: 'popout', defaultValue: false })(MdCollapsible) || MdCollapsible;
  MdCollapsible = _aureliaTemplating.bindable({ name: 'accordion', defaultValue: false })(MdCollapsible) || MdCollapsible;
  MdCollapsible = _aureliaTemplating.customAttribute('md-collapsible')(MdCollapsible) || MdCollapsible;
  return MdCollapsible;
})();

exports.MdCollapsible = MdCollapsible;

function shadeBlendConvert(p, from, to) {
  if (typeof p != "number" || p < -1 || p > 1 || typeof from != "string" || from[0] != 'r' && from[0] != '#' || typeof to != "string" && typeof to != "undefined") return null;
  var sbcRip = function sbcRip(d) {
    var l = d.length,
        RGB = new Object();
    if (l > 9) {
      d = d.split(",");
      if (d.length < 3 || d.length > 4) return null;
      RGB[0] = i(d[0].slice(4)), RGB[1] = i(d[1]), RGB[2] = i(d[2]), RGB[3] = d[3] ? parseFloat(d[3]) : -1;
    } else {
      switch (l) {case 8:case 6:case 3:case 2:case 1:
          return null;}
      if (l < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? d[4] + "" + d[4] : "");
      d = i(d.slice(1), 16), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = l == 9 || l == 5 ? r((d >> 24 & 255) / 255 * 10000) / 10000 : -1;
    }
    return RGB;
  };
  var i = parseInt,
      r = Math.round,
      h = from.length > 9,
      h = typeof to == "string" ? to.length > 9 ? true : to == "c" ? !h : false : h,
      b = p < 0,
      p = b ? p * -1 : p,
      to = to && to != "c" ? to : b ? "#000000" : "#FFFFFF",
      f = sbcRip(from),
      t = sbcRip(to);
  if (!f || !t) return null;
  if (h) return "rgb(" + r((t[0] - f[0]) * p + f[0]) + "," + r((t[1] - f[1]) * p + f[1]) + "," + r((t[2] - f[2]) * p + f[2]) + (f[3] < 0 && t[3] < 0 ? ")" : "," + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000 : t[3] < 0 ? f[3] : t[3]) + ")");else return "#" + (0x100000000 + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 255) : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255) * 0x1000000 + r((t[0] - f[0]) * p + f[0]) * 0x10000 + r((t[1] - f[1]) * p + f[1]) * 0x100 + r((t[2] - f[2]) * p + f[2])).toString(16).slice(f[3] > -1 || t[3] > -1 ? 1 : 3);
}

var DarkenValueConverter = (function () {
  function DarkenValueConverter() {
    _classCallCheck(this, DarkenValueConverter);
  }

  DarkenValueConverter.prototype.toView = function toView(value, steps) {
    return shadeBlendConvert(-0.3 * parseFloat(steps, 10), value);
  };

  return DarkenValueConverter;
})();

exports.DarkenValueConverter = DarkenValueConverter;

var LightenValueConverter = (function () {
  function LightenValueConverter() {
    _classCallCheck(this, LightenValueConverter);
  }

  LightenValueConverter.prototype.toView = function toView(value, steps) {
    return shadeBlendConvert(0.3 * parseFloat(steps, 10), value);
  };

  return LightenValueConverter;
})();

exports.LightenValueConverter = LightenValueConverter;

var AttributeManager = (function () {
  function AttributeManager(element) {
    _classCallCheck(this, AttributeManager);

    this.addedClasses = [];
    this.addedAttributes = {};

    this.element = element;
  }

  AttributeManager.prototype.addAttributes = function addAttributes(attrs) {
    var _this = this;

    var keys = Object.keys(attrs);
    keys.forEach(function (k) {
      if (!_this.element.getAttribute(k)) {
        _this.addedAttributes[k] = attrs[k];
        _this.element.setAttribute(k, attrs[k]);
      } else if (_this.element.getAttribute(k) !== attrs[k]) {
        _this.element.setAttribute(k, attrs[k]);
      }
    });
  };

  AttributeManager.prototype.removeAttributes = function removeAttributes(attrs) {
    var _this2 = this;

    if (typeof attrs === 'string') {
      attrs = [attrs];
    }
    attrs.forEach(function (a) {
      if (_this2.element.getAttribute(a) && !!_this2.addedAttributes[a]) {
        _this2.element.removeAttribute(a);
        _this2.addedAttributes[a] = null;
        delete _this2.addedAttributes[a];
      }
    });
  };

  AttributeManager.prototype.addClasses = function addClasses(classes) {
    var _this3 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      if (!_this3.element.classList.contains(c)) {
        _this3.addedClasses.push(c);
        _this3.element.classList.add(c);
      }
    });
  };

  AttributeManager.prototype.removeClasses = function removeClasses(classes) {
    var _this4 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      if (_this4.element.classList.contains(c) && _this4.addedClasses.indexOf(c) > -1) {
        _this4.element.classList.remove(c);
        _this4.addedClasses.splice(_this4.addedClasses.indexOf(c), 1);
      }
    });
  };

  return AttributeManager;
})();

exports.AttributeManager = AttributeManager;

function getBooleanFromAttributeValue(value) {
  return value === true || value === 'true';
}

var constants = {
  eventPrefix: 'md-on-',
  bindablePrefix: 'md-'
};

exports.constants = constants;

function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

function fireMaterializeEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return fireEvent(element, '' + constants.eventPrefix + name, data);
}

var MdDatePicker = (function () {
  var _instanceInitializers7 = {};

  _createDecoratedClass(MdDatePicker, [{
    key: 'container',
    decorators: [_aureliaTemplating.bindable()],
    initializer: null,
    enumerable: true
  }, {
    key: 'translation',
    decorators: [_aureliaTemplating.bindable()],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers7);

  function MdDatePicker(element) {
    _classCallCheck(this, _MdDatePicker);

    _defineDecoratedPropertyDescriptor(this, 'container', _instanceInitializers7);

    _defineDecoratedPropertyDescriptor(this, 'translation', _instanceInitializers7);

    this.element = element;
  }

  MdDatePicker.prototype.attached = function attached() {
    this.element.classList.add('date-picker');
    var options = {
      onClose: function onClose() {
        $(document.activeElement).blur();
      }
    };
    var i18n = {};

    Object.assign(options, i18n);
    if (this.container) {
      options.container = this.container;
    }
    this.picker = $(this.element).pickadate(options);
  };

  MdDatePicker.prototype.detached = function detached() {
    if (this.picker) {
      this.picker.stop();
    }
  };

  var _MdDatePicker = MdDatePicker;
  MdDatePicker = _aureliaTemplating.customAttribute('md-datepicker')(MdDatePicker) || MdDatePicker;
  MdDatePicker = _aureliaDependencyInjection.inject(Element)(MdDatePicker) || MdDatePicker;
  return MdDatePicker;
})();

exports.MdDatePicker = MdDatePicker;

var MdDropdownElement = (function () {
  var _instanceInitializers8 = {};

  _createDecoratedClass(MdDropdownElement, [{
    key: 'alignment',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 'left';
    },
    enumerable: true
  }, {
    key: 'belowOrigin',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'constrainWidth',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'gutter',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 0;
    },
    enumerable: true
  }, {
    key: 'hover',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'mdTitle',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: null,
    enumerable: true
  }, {
    key: 'inDuration',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 300;
    },
    enumerable: true
  }, {
    key: 'outDuration',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 225;
    },
    enumerable: true
  }], [{
    key: 'id',
    value: 0,
    enumerable: true
  }], _instanceInitializers8);

  function MdDropdownElement(element) {
    _classCallCheck(this, _MdDropdownElement);

    _defineDecoratedPropertyDescriptor(this, 'alignment', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'belowOrigin', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'constrainWidth', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'gutter', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'hover', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'mdTitle', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'inDuration', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'outDuration', _instanceInitializers8);

    this.element = element;
    this.controlId = 'md-dropdown-' + MdDropdown.id++;
  }

  MdDropdownElement.prototype.attached = function attached() {
    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  };

  var _MdDropdownElement = MdDropdownElement;
  MdDropdownElement = _aureliaDependencyInjection.inject(Element)(MdDropdownElement) || MdDropdownElement;
  MdDropdownElement = _aureliaTemplating.customElement('md-dropdown')(MdDropdownElement) || MdDropdownElement;
  return MdDropdownElement;
})();

exports.MdDropdownElement = MdDropdownElement;

var MdDropdown = (function () {
  var _instanceInitializers9 = {};

  _createDecoratedClass(MdDropdown, [{
    key: 'activates',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }, {
    key: 'alignment',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 'left';
    },
    enumerable: true
  }, {
    key: 'belowOrigin',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'constrainWidth',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'gutter',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 0;
    },
    enumerable: true
  }, {
    key: 'hover',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'mdTitle',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: null,
    enumerable: true
  }, {
    key: 'inDuration',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 300;
    },
    enumerable: true
  }, {
    key: 'outDuration',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return 225;
    },
    enumerable: true
  }], null, _instanceInitializers9);

  function MdDropdown(element) {
    _classCallCheck(this, _MdDropdown);

    _defineDecoratedPropertyDescriptor(this, 'activates', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'alignment', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'belowOrigin', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'constrainWidth', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'gutter', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'hover', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'mdTitle', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'inDuration', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'outDuration', _instanceInitializers9);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdDropdown.prototype.attached = function attached() {
    this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

    this.attributeManager.addClasses('dropdown-button');
    this.contentAttributeManager.addClasses('dropdown-content');
    this.attributeManager.addAttributes({ 'data-activates': this.activates });
    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  };

  MdDropdown.prototype.detached = function detached() {
    this.attributeManager.removeAttributes('data-activates');
    this.attributeManager.removeClasses('dropdown-button');
    this.contentAttributeManager.removeClasses('dropdown-content');
  };

  var _MdDropdown = MdDropdown;
  MdDropdown = _aureliaDependencyInjection.inject(Element)(MdDropdown) || MdDropdown;
  MdDropdown = _aureliaTemplating.customAttribute('md-dropdown')(MdDropdown) || MdDropdown;
  return MdDropdown;
})();

exports.MdDropdown = MdDropdown;

var MdFab = (function () {
  var _instanceInitializers10 = {};

  _createDecoratedClass(MdFab, [{
    key: 'mdFixed',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'mdLarge',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }], null, _instanceInitializers10);

  function MdFab(element) {
    _classCallCheck(this, _MdFab);

    _defineDecoratedPropertyDescriptor(this, 'mdFixed', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'mdLarge', _instanceInitializers10);

    this.element = element;
  }

  MdFab.prototype.attached = function attached() {
    this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
    this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
  };

  var _MdFab = MdFab;
  MdFab = _aureliaDependencyInjection.inject(Element)(MdFab) || MdFab;
  MdFab = _aureliaTemplating.customElement('md-fab')(MdFab) || MdFab;
  return MdFab;
})();

exports.MdFab = MdFab;

var MdModalTrigger = (function () {
  function MdModalTrigger(element) {
    _classCallCheck(this, _MdModalTrigger);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
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

var MdNavbar = (function () {
  var _instanceInitializers11 = {};

  _createDecoratedClass(MdNavbar, [{
    key: 'mdFixed',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers11);

  function MdNavbar(element) {
    _classCallCheck(this, _MdNavbar);

    _defineDecoratedPropertyDescriptor(this, 'mdFixed', _instanceInitializers11);

    this.element = element;
  }

  MdNavbar.prototype.attached = function attached() {
    this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.addClasses('navbar-fixed');
    }
  };

  MdNavbar.prototype.detached = function detached() {
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.removeClasses('navbar-fixed');
    }
  };

  var _MdNavbar = MdNavbar;
  MdNavbar = _aureliaDependencyInjection.inject(Element)(MdNavbar) || MdNavbar;
  MdNavbar = _aureliaTemplating.customElement('md-navbar')(MdNavbar) || MdNavbar;
  return MdNavbar;
})();

exports.MdNavbar = MdNavbar;

var MdParallax = (function () {
  function MdParallax(element) {
    _classCallCheck(this, _MdParallax);

    this.element = element;
  }

  MdParallax.prototype.attached = function attached() {
    $(this.element).parallax();
  };

  MdParallax.prototype.detached = function detached() {};

  var _MdParallax = MdParallax;
  MdParallax = _aureliaDependencyInjection.inject(Element)(MdParallax) || MdParallax;
  MdParallax = _aureliaTemplating.customAttribute('md-parallax')(MdParallax) || MdParallax;
  return MdParallax;
})();

exports.MdParallax = MdParallax;

var MdPushpin = (function () {
  var _instanceInitializers12 = {};

  _createDecoratedClass(MdPushpin, [{
    key: 'bottom',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return Infinity;
    },
    enumerable: true
  }, {
    key: 'offset',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return 0;
    },
    enumerable: true
  }, {
    key: 'top',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return 0;
    },
    enumerable: true
  }], null, _instanceInitializers12);

  function MdPushpin(element) {
    _classCallCheck(this, _MdPushpin);

    _defineDecoratedPropertyDescriptor(this, 'bottom', _instanceInitializers12);

    _defineDecoratedPropertyDescriptor(this, 'offset', _instanceInitializers12);

    _defineDecoratedPropertyDescriptor(this, 'top', _instanceInitializers12);

    this.element = element;
  }

  MdPushpin.prototype.attached = function attached() {
    $(this.element).pushpin({
      bottom: this.bottom === Infinity ? Infinity : parseInt(this.bottom, 10),
      offset: parseInt(this.offset, 10),
      top: parseInt(this.top, 10)
    });
  };

  MdPushpin.prototype.detached = function detached() {};

  var _MdPushpin = MdPushpin;
  MdPushpin = _aureliaDependencyInjection.inject(Element)(MdPushpin) || MdPushpin;
  MdPushpin = _aureliaTemplating.customAttribute('md-pushpin')(MdPushpin) || MdPushpin;
  return MdPushpin;
})();

exports.MdPushpin = MdPushpin;

var ScrollfirePatch = (function () {
  function ScrollfirePatch() {
    _classCallCheck(this, ScrollfirePatch);

    this.patched = false;
  }

  ScrollfirePatch.prototype.patch = function patch() {
    if (!this.patched) {
      this.patched = true;

      window.Materialize.scrollFire = function (options) {
        var didScroll = false;
        window.addEventListener('scroll', function () {
          didScroll = true;
        });

        setInterval(function () {
          if (didScroll) {
            didScroll = false;

            var windowScroll = window.pageYOffset + window.innerHeight;
            for (var i = 0; i < options.length; i++) {
              var value = options[i];
              var selector = value.selector;
              var offset = value.offset;
              var callback = value.callback;

              var currentElement = document.querySelector(selector);
              if (currentElement !== null) {
                var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

                if (windowScroll > elementOffset + offset) {
                  if (value.done !== true) {
                    if (typeof callback === 'string') {
                      var callbackFunc = new Function(callback);
                      callbackFunc();
                    } else if (typeof callback === 'function') {
                      callback();
                    }
                    value.done = true;
                  }
                }
              }
            }
          }
        }, 100);
      };
    }
  };

  return ScrollfirePatch;
})();

exports.ScrollfirePatch = ScrollfirePatch;

var MdScrollfireTarget = (function () {
  var _instanceInitializers13 = {};

  _createDecoratedClass(MdScrollfireTarget, [{
    key: 'callback',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return null;
    },
    enumerable: true
  }, {
    key: 'offset',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return 0;
    },
    enumerable: true
  }], null, _instanceInitializers13);

  function MdScrollfireTarget(element) {
    _classCallCheck(this, _MdScrollfireTarget);

    _defineDecoratedPropertyDescriptor(this, 'callback', _instanceInitializers13);

    _defineDecoratedPropertyDescriptor(this, 'offset', _instanceInitializers13);

    this.element = element;
  }

  var _MdScrollfireTarget = MdScrollfireTarget;
  MdScrollfireTarget = _aureliaDependencyInjection.inject(Element)(MdScrollfireTarget) || MdScrollfireTarget;
  MdScrollfireTarget = _aureliaTemplating.customAttribute('md-scrollfire-target')(MdScrollfireTarget) || MdScrollfireTarget;
  return MdScrollfireTarget;
})();

exports.MdScrollfireTarget = MdScrollfireTarget;

var MdScrollfire = (function () {
  function MdScrollfire(element, scrollfirePatch) {
    _classCallCheck(this, _MdScrollfire);

    this.targetId = 0;

    scrollfirePatch.patch();
    this.element = element;
    this.log = _aureliaLogging.getLogger('md-scrollfire');
  }

  MdScrollfire.prototype.attached = function attached() {
    var _this5 = this;

    var targets = $('[md-scrollfire-target]', this.element);
    if (targets.length > 0) {
      (function () {
        _this5.log.debug('targets', targets);
        var self = _this5;
        var options = [];
        targets.each(function (i, el) {
          var target = $(el);
          if (!target.attr('id')) {
            target.attr('id', 'md-scrollfire-target-' + self.targetId++);
          }
          options.push({
            selector: '#' + target.attr('id'),
            callback: target.get(0).au['md-scrollfire-target'].viewModel.callback,
            offset: parseInt(target.get(0).au['md-scrollfire-target'].viewModel.offset, 10)
          });
        });
        if (options.length > 0) {
          _this5.log.debug('configuring scrollFire with these options:', options);
          Materialize.scrollFire(options);
        }
      })();
    }
  };

  var _MdScrollfire = MdScrollfire;
  MdScrollfire = _aureliaDependencyInjection.inject(Element, ScrollfirePatch)(MdScrollfire) || MdScrollfire;
  MdScrollfire = _aureliaTemplating.customAttribute('md-scrollfire')(MdScrollfire) || MdScrollfire;
  return MdScrollfire;
})();

exports.MdScrollfire = MdScrollfire;

var MdScrollSpy = (function () {
  var _instanceInitializers14 = {};

  _createDecoratedClass(MdScrollSpy, [{
    key: 'target',
    decorators: [_aureliaTemplating.bindable()],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers14);

  function MdScrollSpy(element) {
    _classCallCheck(this, _MdScrollSpy);

    _defineDecoratedPropertyDescriptor(this, 'target', _instanceInitializers14);

    this.element = element;
  }

  MdScrollSpy.prototype.attached = function attached() {
    $(this.target, this.element).scrollSpy();
  };

  MdScrollSpy.prototype.detached = function detached() {};

  var _MdScrollSpy = MdScrollSpy;
  MdScrollSpy = _aureliaDependencyInjection.inject(Element)(MdScrollSpy) || MdScrollSpy;
  MdScrollSpy = _aureliaTemplating.customAttribute('md-scrollspy')(MdScrollSpy) || MdScrollSpy;
  return MdScrollSpy;
})();

exports.MdScrollSpy = MdScrollSpy;

var MdSelect = (function () {
  function MdSelect(element, logManager, observerLocator) {
    _classCallCheck(this, _MdSelect);

    this._suspendUpdate = false;

    this.element = element;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.log = LogManager.getLogger('md-select');
    this.observerLocator = observerLocator;
    this.valueObserver = this.observerLocator.getObserver(this.element, 'value');
  }

  MdSelect.prototype.attached = function attached() {
    this.valueObserver.subscribe(this.handleChangeFromViewModel);

    $(this.element).material_select();
    $(this.element).on('change', this.handleChangeFromNativeSelect);
  };

  MdSelect.prototype.detached = function detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    $(this.element).material_select('destroy');
    this.valueObserver.unsubscribe();
  };

  MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {

    if (!this._suspendUpdate) {
      this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');
      this.log.debug('this.valueObserver.value', this.valueObserver.value);

      this._suspendUpdate = false;
    }
  };

  MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
    this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
    if (!this._suspendUpdate) {
      $(this.element).material_select();
    }
  };

  var _MdSelect = MdSelect;
  MdSelect = _aureliaTemplating.customAttribute('md-select')(MdSelect) || MdSelect;
  MdSelect = _aureliaDependencyInjection.inject(Element, LogManager, _aureliaBinding.ObserverLocator)(MdSelect) || MdSelect;
  return MdSelect;
})();

exports.MdSelect = MdSelect;

var MdSidenavCollapse = (function () {
  var _instanceInitializers15 = {};

  _createDecoratedClass(MdSidenavCollapse, [{
    key: 'ref',
    decorators: [_aureliaTemplating.bindable()],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers15);

  function MdSidenavCollapse(element, observerLocator) {
    _classCallCheck(this, _MdSidenavCollapse);

    _defineDecoratedPropertyDescriptor(this, 'ref', _instanceInitializers15);

    this.element = element;
    this.observerLocator = observerLocator;
    this.log = _aureliaLogging.getLogger('md-sidenav-collapse');
  }

  MdSidenavCollapse.prototype.attached = function attached() {
    var _this6 = this;

    this.ref.whenAttached.then(function () {

      _this6.element.setAttribute('data-activates', _this6.ref.controlId);
      var sideNavConfig = {
        edge: _this6.ref.mdEdge || 'left',
        closeOnClick: _this6.ref.mdCloseOnClick,
        menuWidth: parseInt(_this6.ref.mdWidth, 10)
      };

      $(_this6.element).sideNav(sideNavConfig);
    });
  };

  MdSidenavCollapse.prototype.detached = function detached() {};

  var _MdSidenavCollapse = MdSidenavCollapse;
  MdSidenavCollapse = _aureliaDependencyInjection.inject(Element, _aureliaBinding.ObserverLocator)(MdSidenavCollapse) || MdSidenavCollapse;
  MdSidenavCollapse = _aureliaTemplating.customAttribute('md-sidenav-collapse')(MdSidenavCollapse) || MdSidenavCollapse;
  return MdSidenavCollapse;
})();

exports.MdSidenavCollapse = MdSidenavCollapse;

var MdSidenav = (function () {
  var _instanceInitializers16 = {};

  _createDecoratedClass(MdSidenav, [{
    key: 'mdCloseOnClick',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'mdEdge',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return 'left';
    },
    enumerable: true
  }, {
    key: 'mdFixed',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'mdWidth',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return 250;
    },
    enumerable: true
  }], [{
    key: 'id',
    value: 0,
    enumerable: true
  }], _instanceInitializers16);

  function MdSidenav(element) {
    var _this7 = this;

    _classCallCheck(this, _MdSidenav);

    _defineDecoratedPropertyDescriptor(this, 'mdCloseOnClick', _instanceInitializers16);

    _defineDecoratedPropertyDescriptor(this, 'mdEdge', _instanceInitializers16);

    _defineDecoratedPropertyDescriptor(this, 'mdFixed', _instanceInitializers16);

    _defineDecoratedPropertyDescriptor(this, 'mdWidth', _instanceInitializers16);

    this.element = element;
    this.controlId = 'md-sidenav-' + MdSidenav.id++;
    this.log = _aureliaLogging.getLogger('md-sidenav');
    this.whenAttached = new Promise(function (resolve, reject) {
      _this7.attachedResolver = resolve;
    });
  }

  MdSidenav.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.sidenav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.attributeManager.addClasses('fixed');
      if (this.mdEdge === 'right') {
        this.attributeManager.addClasses('right-aligned');
      }
    }

    this.attachedResolver();
  };

  MdSidenav.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['fixed', 'right-aligned']);
  };

  MdSidenav.prototype.fixedChanged = function fixedChanged(newValue) {
    if (this.attributeManager) {
      if (newValue) {
        this.attributeManager.addClasses('fixed');
      } else {
        this.attributeManager.removeClasses('fixed');
      }
    }
  };

  var _MdSidenav = MdSidenav;
  MdSidenav = _aureliaDependencyInjection.inject(Element)(MdSidenav) || MdSidenav;
  MdSidenav = _aureliaTemplating.customElement('md-sidenav')(MdSidenav) || MdSidenav;
  return MdSidenav;
})();

exports.MdSidenav = MdSidenav;

var MdSlider = (function () {
  var _instanceInitializers17 = {};

  _createDecoratedClass(MdSlider, [{
    key: 'mdFillContainer',
    decorators: [_aureliaTemplating.bindable({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime })],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'mdHeight',
    decorators: [_aureliaTemplating.bindable({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime })],
    initializer: function initializer() {
      return 400;
    },
    enumerable: true
  }, {
    key: 'mdIndicators',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'mdInterval',
    decorators: [_aureliaTemplating.bindable({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime })],
    initializer: function initializer() {
      return 6000;
    },
    enumerable: true
  }, {
    key: 'mdTransition',
    decorators: [_aureliaTemplating.bindable({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime })],
    initializer: function initializer() {
      return 500;
    },
    enumerable: true
  }], null, _instanceInitializers17);

  function MdSlider(element) {
    _classCallCheck(this, _MdSlider);

    _defineDecoratedPropertyDescriptor(this, 'mdFillContainer', _instanceInitializers17);

    _defineDecoratedPropertyDescriptor(this, 'mdHeight', _instanceInitializers17);

    _defineDecoratedPropertyDescriptor(this, 'mdIndicators', _instanceInitializers17);

    _defineDecoratedPropertyDescriptor(this, 'mdInterval', _instanceInitializers17);

    _defineDecoratedPropertyDescriptor(this, 'mdTransition', _instanceInitializers17);

    this.element = element;
    this.log = _aureliaLogging.getLogger('md-slider');
  }

  MdSlider.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdFillContainer)) {
      this.element.classList.add('fullscreen');
    }
    this.refresh();
  };

  MdSlider.prototype.pause = function pause() {
    $(this.element).slider('pause');
  };

  MdSlider.prototype.start = function start() {
    $(this.element).slider('start');
  };

  MdSlider.prototype.next = function next() {
    $(this.element).slider('next');
  };

  MdSlider.prototype.prev = function prev() {
    $(this.element).slider('prev');
  };

  MdSlider.prototype.refresh = function refresh() {
    var options = {
      height: parseInt(this.mdHeight, 10),
      indicators: getBooleanFromAttributeValue(this.mdIndicators),
      interval: parseInt(this.mdInterval, 10),
      transition: parseInt(this.mdTransition, 10)
    };
    this.log.debug('refreshing slider, params:', options);
    $(this.element).slider(options);
  };

  MdSlider.prototype.mdIndicatorsChanged = function mdIndicatorsChanged() {
    this.refresh();
  };

  var _MdSlider = MdSlider;
  MdSlider = _aureliaTemplating.inlineView('\n  <template class="slider">\n  <require from="./slider.css"></require>\n  <ul class="slides">\n    <content select="li"></content>\n  </ul>\n  </template>\n')(MdSlider) || MdSlider;
  MdSlider = _aureliaDependencyInjection.inject(Element)(MdSlider) || MdSlider;
  MdSlider = _aureliaTemplating.customElement('md-slider')(MdSlider) || MdSlider;
  return MdSlider;
})();

exports.MdSlider = MdSlider;

var MdSwitch = (function () {
  var _instanceInitializers18 = {};

  _createDecoratedClass(MdSwitch, [{
    key: 'mdChecked',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay
    })],
    initializer: null,
    enumerable: true
  }, {
    key: 'mdLabelOff',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return 'Off';
    },
    enumerable: true
  }, {
    key: 'mdLabelOn',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return 'On';
    },
    enumerable: true
  }], null, _instanceInitializers18);

  function MdSwitch(element) {
    _classCallCheck(this, _MdSwitch);

    _defineDecoratedPropertyDescriptor(this, 'mdChecked', _instanceInitializers18);

    _defineDecoratedPropertyDescriptor(this, 'mdLabelOff', _instanceInitializers18);

    _defineDecoratedPropertyDescriptor(this, 'mdLabelOn', _instanceInitializers18);

    this.element = element;
    this.handleChange = this.handleChange.bind(this);
  }

  MdSwitch.prototype.attached = function attached() {
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    this.checkbox.addEventListener('change', this.handleChange);
  };

  MdSwitch.prototype.detached = function detached() {
    this.checkbox.removeEventListener('change', this.handleChange);
  };

  MdSwitch.prototype.handleChange = function handleChange() {
    this.mdChecked = this.checkbox.checked;
  };

  MdSwitch.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  };

  var _MdSwitch = MdSwitch;
  MdSwitch = _aureliaDependencyInjection.inject(Element)(MdSwitch) || MdSwitch;
  MdSwitch = _aureliaTemplating.customElement('md-switch')(MdSwitch) || MdSwitch;
  return MdSwitch;
})();

exports.MdSwitch = MdSwitch;

var MdTabs = (function () {
  function MdTabs(element) {
    _classCallCheck(this, _MdTabs);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.tabAttributeManagers = [];
  }

  MdTabs.prototype.attached = function attached() {
    var _this8 = this;

    this.attributeManager.addClasses('tabs');

    var children = this.element.querySelectorAll('li');
    [].forEach.call(children, function (child) {
      var setter = new AttributeManager(child);
      setter.addClasses(['tab', 'primary-text']);
      _this8.tabAttributeManagers.push(setter);
    });

    $(this.element).tabs();

    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.addEventListener('click', _this8.fireTabSelectedEvent.bind(_this8));
    });
  };

  MdTabs.prototype.detached = function detached() {
    var _this9 = this;

    this.attributeManager.removeClasses('tabs');

    this.tabAttributeManagers.forEach(function (setter) {
      setter.removeClasses('tab');
    });
    this.tabAttributeManagers = [];
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.removeEventListener('click', _this9.fireTabSelectedEvent.bind(_this9));
    });
  };

  MdTabs.prototype.fireTabSelectedEvent = function fireTabSelectedEvent(e) {
    var href = $(e.target).attr('href');
    fireMaterializeEvent(this.element, 'selected', href);
  };

  var _MdTabs = MdTabs;
  MdTabs = _aureliaDependencyInjection.inject(Element)(MdTabs) || MdTabs;
  MdTabs = _aureliaTemplating.customAttribute('md-tabs')(MdTabs) || MdTabs;
  return MdTabs;
})();

exports.MdTabs = MdTabs;

var MdToastService = (function () {
  function MdToastService() {
    _classCallCheck(this, MdToastService);
  }

  MdToastService.prototype.show = function show(message, displayLength, className) {
    return new Promise(function (resolve, reject) {
      Materialize.toast(message, displayLength, className, function () {
        resolve();
      });
    });
  };

  return MdToastService;
})();

exports.MdToastService = MdToastService;

var MdTooltip = (function () {
  var _instanceInitializers19 = {};

  _createDecoratedClass(MdTooltip, [{
    key: 'position',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return 'bottom';
    },
    enumerable: true
  }, {
    key: 'delay',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return 50;
    },
    enumerable: true
  }, {
    key: 'text',
    decorators: [_aureliaTemplating.bindable()],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }], null, _instanceInitializers19);

  function MdTooltip(element) {
    _classCallCheck(this, _MdTooltip);

    _defineDecoratedPropertyDescriptor(this, 'position', _instanceInitializers19);

    _defineDecoratedPropertyDescriptor(this, 'delay', _instanceInitializers19);

    _defineDecoratedPropertyDescriptor(this, 'text', _instanceInitializers19);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdTooltip.prototype.attached = function attached() {
    this.attributeManager.addClasses('tooltipped');
    this.attributeManager.addAttributes({ 'data-position': this.position, 'data-tooltip': this.text });
    $(this.element).tooltip({ delay: parseInt(this.delay, 10) });
  };

  MdTooltip.prototype.detached = function detached() {
    $(this.element).tooltip('remove');
    this.attributeManager.removeClasses('tooltipped');
    this.attributeManager.removeAttributes(['data-position', 'data-tooltip']);
  };

  var _MdTooltip = MdTooltip;
  MdTooltip = _aureliaDependencyInjection.inject(Element)(MdTooltip) || MdTooltip;
  return MdTooltip;
})();

exports.MdTooltip = MdTooltip;

var MdWaves = (function () {
  var _instanceInitializers20 = {};

  _createDecoratedClass(MdWaves, [{
    key: 'block',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'circle',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'color',
    decorators: [_aureliaTemplating.bindable({
      defaultBindingMode: _aureliaBinding.bindingMode.oneTime
    })],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers20);

  function MdWaves(element) {
    _classCallCheck(this, _MdWaves);

    _defineDecoratedPropertyDescriptor(this, 'block', _instanceInitializers20);

    _defineDecoratedPropertyDescriptor(this, 'circle', _instanceInitializers20);

    _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers20);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdWaves.prototype.attached = function attached() {
    var classes = ['waves-effect'];
    if (getBooleanFromAttributeValue(this.block)) {
      classes.push('waves-block');
    }
    if (getBooleanFromAttributeValue(this.circle)) {
      classes.push('waves-circle');
    }
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.addClasses(classes);
    Waves.attach(this.element);
  };

  MdWaves.prototype.detached = function detached() {
    var classes = ['waves-effect', 'waves-block'];
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.removeClasses(classes);
  };

  var _MdWaves = MdWaves;
  MdWaves = _aureliaDependencyInjection.inject(Element)(MdWaves) || MdWaves;
  MdWaves = _aureliaTemplating.customAttribute('md-waves')(MdWaves) || MdWaves;
  return MdWaves;
})();

exports.MdWaves = MdWaves;

var MdFadeinImage = (function () {
  var _instanceInitializers21 = {};

  _createDecoratedClass(MdFadeinImage, [{
    key: 'ref',
    decorators: [_aureliaTemplating.bindable()],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers21);

  function MdFadeinImage(element) {
    _classCallCheck(this, _MdFadeinImage);

    _defineDecoratedPropertyDescriptor(this, 'ref', _instanceInitializers21);

    this.element = element;
    this.fadeInImage = this.fadeInImage.bind(this);
    this.log = _aureliaLogging.getLogger('md-fadein-image');
  }

  MdFadeinImage.prototype.attached = function attached() {
    this.element.addEventListener('click', this.fadeInImage);
    this.ensureOpacity();
  };

  MdFadeinImage.prototype.detached = function detached() {
    this.element.removeEventListener('click', this.fadeInImage);
  };

  MdFadeinImage.prototype.fadeInImage = function fadeInImage() {
    Materialize.fadeInImage(this.ref);
  };

  MdFadeinImage.prototype.ensureOpacity = function ensureOpacity() {
    var opacity = window.getComputedStyle(this.ref).opacity;
    if (opacity !== 0) {
      this.ref.style.opacity = 0;
    }
  };

  var _MdFadeinImage = MdFadeinImage;
  MdFadeinImage = _aureliaDependencyInjection.inject(Element)(MdFadeinImage) || MdFadeinImage;
  MdFadeinImage = _aureliaTemplating.customAttribute('md-fadein-image')(MdFadeinImage) || MdFadeinImage;
  return MdFadeinImage;
})();

exports.MdFadeinImage = MdFadeinImage;

var MdStaggeredList = (function () {
  var _instanceInitializers22 = {};

  _createDecoratedClass(MdStaggeredList, [{
    key: 'ref',
    decorators: [_aureliaTemplating.bindable()],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers22);

  function MdStaggeredList(element) {
    _classCallCheck(this, _MdStaggeredList);

    _defineDecoratedPropertyDescriptor(this, 'ref', _instanceInitializers22);

    this.element = element;
    this.staggerList = this.staggerList.bind(this);
    this.log = _aureliaLogging.getLogger('md-staggered-list');
  }

  MdStaggeredList.prototype.attached = function attached() {
    this.element.addEventListener('click', this.staggerList);
    this.ensureOpacity();
  };

  MdStaggeredList.prototype.detached = function detached() {
    this.element.removeEventListener('click', this.staggerList);
  };

  MdStaggeredList.prototype.staggerList = function staggerList() {
    Materialize.showStaggeredList(this.ref);
  };

  MdStaggeredList.prototype.ensureOpacity = function ensureOpacity() {
    var items = this.ref.querySelectorAll('li');
    [].forEach.call(items, function (item) {
      var opacity = window.getComputedStyle(item).opacity;
      if (opacity !== 0) {
        item.style.opacity = 0;
      }
    });
  };

  var _MdStaggeredList = MdStaggeredList;
  MdStaggeredList = _aureliaDependencyInjection.inject(Element)(MdStaggeredList) || MdStaggeredList;
  MdStaggeredList = _aureliaTemplating.customAttribute('md-staggered-list')(MdStaggeredList) || MdStaggeredList;
  return MdStaggeredList;
})();

exports.MdStaggeredList = MdStaggeredList;