'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
exports.fireEvent = fireEvent;
exports.fireMaterializeEvent = fireMaterializeEvent;

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('materialize');

var _aureliaFramework = require('aurelia-framework');

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
    return this.useButton().useCard().useCollapsible().useColors().useNavbar().useSidenav().useTabs().useWaves().useWell();
  };

  ConfigBuilder.prototype.useButton = function useButton() {
    this.globalResources.push('./button/button');
    return this;
  };

  ConfigBuilder.prototype.useCard = function useCard() {
    this.globalResources.push('./card/card');
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

  ConfigBuilder.prototype.useNavbar = function useNavbar() {
    this.globalResources.push('./navbar/navbar');
    return this;
  };

  ConfigBuilder.prototype.useSidenav = function useSidenav() {
    this.globalResources.push('./sidenav/sidenav');
    this.globalResources.push('./sidenav/sidenav-collapse');
    return this;
  };

  ConfigBuilder.prototype.useTabs = function useTabs() {
    this.globalResources.push('./tabs/tabs');
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

var MdButton = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(MdButton, [{
    key: 'disabled',
    decorators: [_aureliaFramework.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'flat',
    decorators: [_aureliaFramework.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'large',
    decorators: [_aureliaFramework.bindable()],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }], null, _instanceInitializers);

  function MdButton(element) {
    _classCallCheck(this, _MdButton);

    _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'flat', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'large', _instanceInitializers);

    this.attributeManager = new AttributeManager(element);
  }

  MdButton.prototype.attached = function attached() {
    var classes = [];

    if (getBooleanFromAttributeValue(this.flat)) {
      classes.push('btn-flat');
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

  var _MdButton = MdButton;
  MdButton = _aureliaFramework.inject(Element)(MdButton) || MdButton;
  MdButton = _aureliaFramework.customAttribute('md-button')(MdButton) || MdButton;
  return MdButton;
})();

exports.MdButton = MdButton;

var MdCard = (function () {
  var _instanceInitializers2 = {};

  _createDecoratedClass(MdCard, [{
    key: 'title',
    decorators: [_aureliaFramework.bindable({
      defaultBindingMode: _aureliaFramework.bindingMode.oneTime
    })],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers2);

  function MdCard(element) {
    _classCallCheck(this, _MdCard);

    _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers2);
  }

  var _MdCard = MdCard;
  MdCard = _aureliaFramework.inject(Element)(MdCard) || MdCard;
  MdCard = _aureliaFramework.customElement('md-card')(MdCard) || MdCard;
  return MdCard;
})();

exports.MdCard = MdCard;

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
  MdCollapsible = _aureliaFramework.inject(Element)(MdCollapsible) || MdCollapsible;
  MdCollapsible = _aureliaFramework.bindable({ name: 'popout', defaultValue: false })(MdCollapsible) || MdCollapsible;
  MdCollapsible = _aureliaFramework.bindable({ name: 'accordion', defaultValue: false })(MdCollapsible) || MdCollapsible;
  MdCollapsible = _aureliaFramework.customAttribute('md-collapsible')(MdCollapsible) || MdCollapsible;
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

var MdNavbar = (function () {
  var _instanceInitializers3 = {};

  _createDecoratedClass(MdNavbar, [{
    key: 'fixed',
    decorators: [_aureliaFramework.bindable()],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers3);

  function MdNavbar(element) {
    _classCallCheck(this, _MdNavbar);

    _defineDecoratedPropertyDescriptor(this, 'fixed', _instanceInitializers3);

    this.element = element;
  }

  MdNavbar.prototype.attached = function attached() {
    this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
    if (getBooleanFromAttributeValue(this.fixed)) {
      this.fixedAttributeManager.addClasses('navbar-fixed');
    }
  };

  MdNavbar.prototype.detached = function detached() {
    if (getBooleanFromAttributeValue(this.fixed)) {
      this.fixedAttributeManager.removeClasses('navbar-fixed');
    }
  };

  var _MdNavbar = MdNavbar;
  MdNavbar = _aureliaFramework.inject(Element)(MdNavbar) || MdNavbar;
  MdNavbar = _aureliaFramework.customElement('md-navbar')(MdNavbar) || MdNavbar;
  return MdNavbar;
})();

exports.MdNavbar = MdNavbar;

var MdSidenavCollapse = (function () {
  var _instanceInitializers4 = {};

  _createDecoratedClass(MdSidenavCollapse, [{
    key: 'ref',
    decorators: [_aureliaFramework.bindable()],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers4);

  function MdSidenavCollapse(element) {
    _classCallCheck(this, _MdSidenavCollapse);

    _defineDecoratedPropertyDescriptor(this, 'ref', _instanceInitializers4);

    this.element = element;
  }

  MdSidenavCollapse.prototype.attached = function attached() {
    this.element.setAttribute('data-activates', this.ref.controlId);
    $(this.element).sideNav({
      edge: this.ref.edge || 'left',
      closeOnClick: this.ref.closeOnClick
    });
  };

  MdSidenavCollapse.prototype.detached = function detached() {};

  var _MdSidenavCollapse = MdSidenavCollapse;
  MdSidenavCollapse = _aureliaFramework.inject(Element)(MdSidenavCollapse) || MdSidenavCollapse;
  MdSidenavCollapse = _aureliaFramework.customAttribute('md-sidenav-collapse')(MdSidenavCollapse) || MdSidenavCollapse;
  return MdSidenavCollapse;
})();

exports.MdSidenavCollapse = MdSidenavCollapse;

var MdSidenav = (function () {
  var _instanceInitializers5 = {};

  _createDecoratedClass(MdSidenav, [{
    key: 'edge',
    decorators: [_aureliaFramework.bindable()],
    initializer: function initializer() {
      return 'left';
    },
    enumerable: true
  }, {
    key: 'closeOnClick',
    decorators: [_aureliaFramework.bindable()],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }], [{
    key: 'id',
    value: 0,
    enumerable: true
  }], _instanceInitializers5);

  function MdSidenav(element) {
    _classCallCheck(this, _MdSidenav);

    _defineDecoratedPropertyDescriptor(this, 'edge', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'closeOnClick', _instanceInitializers5);

    this.element = element;
    this.controlId = 'md-sidenav-' + MdSidenav.id++;
  }

  MdSidenav.prototype.attached = function attached() {};

  var _MdSidenav = MdSidenav;
  MdSidenav = _aureliaFramework.inject(Element)(MdSidenav) || MdSidenav;
  MdSidenav = _aureliaFramework.customElement('md-sidenav')(MdSidenav) || MdSidenav;
  return MdSidenav;
})();

exports.MdSidenav = MdSidenav;

var MdTab = (function () {
  var _instanceInitializers6 = {};

  _createDecoratedClass(MdTab, [{
    key: 'forElement',
    decorators: [_aureliaFramework.bindable({
      attribute: 'for-element',
      defaultBindingMode: _aureliaFramework.bindingMode.oneWay
    })],
    initializer: null,
    enumerable: true
  }, {
    key: 'tab',
    decorators: [_aureliaFramework.bindable({
      defaultBindingMode: _aureliaFramework.bindingMode.oneWay
    })],
    initializer: null,
    enumerable: true
  }, {
    key: 'title',
    decorators: [_aureliaFramework.bindable({
      defaultBindingMode: _aureliaFramework.bindingMode.oneWay
    })],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }], null, _instanceInitializers6);

  function MdTab(element) {
    _classCallCheck(this, _MdTab);

    _defineDecoratedPropertyDescriptor(this, 'forElement', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'tab', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers6);

    this.element = element;
  }

  MdTab.prototype.attached = function attached() {};

  MdTab.prototype.detached = function detached() {};

  MdTab.prototype.forElementChanged = function forElementChanged(newValue) {};

  var _MdTab = MdTab;
  MdTab = _aureliaFramework.inject(Element)(MdTab) || MdTab;
  MdTab = _aureliaFramework.containerless()(MdTab) || MdTab;
  MdTab = _aureliaFramework.customElement('md-tab')(MdTab) || MdTab;
  return MdTab;
})();

exports.MdTab = MdTab;

var MdTabsElement = (function () {
  function MdTabsElement(element) {
    _classCallCheck(this, _MdTabsElement);

    this.element = element;
  }

  MdTabsElement.prototype.attached = function attached() {
    $(this.element).tabs();
  };

  MdTabsElement.prototype.detached = function detached() {};

  var _MdTabsElement = MdTabsElement;
  MdTabsElement = _aureliaFramework.inlineView('\n  <template>\n    <ul class="tabs">\n      <content></content>\n    </ul>\n  </template>\n')(MdTabsElement) || MdTabsElement;
  MdTabsElement = _aureliaFramework.inject(Element)(MdTabsElement) || MdTabsElement;
  MdTabsElement = _aureliaFramework.customElement('md-tabs')(MdTabsElement) || MdTabsElement;
  MdTabsElement = _aureliaFramework.bindable({
    name: 'tabs',
    defaultBindingMode: _aureliaFramework.bindingMode.oneWay
  })(MdTabsElement) || MdTabsElement;
  return MdTabsElement;
})();

exports.MdTabsElement = MdTabsElement;

var MdTabs = (function () {
  function MdTabs(element) {
    _classCallCheck(this, _MdTabs);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.tabAttributeManagers = [];
  }

  MdTabs.prototype.attached = function attached() {
    var _this5 = this;

    this.attributeManager.addClasses('tabs');

    var children = this.element.querySelectorAll('li');
    [].forEach.call(children, function (child) {
      var setter = new AttributeManager(child);
      setter.addClasses(['tab', 'primary-text']);
      _this5.tabAttributeManagers.push(setter);
    });

    $(this.element).tabs();

    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.addEventListener('click', _this5.fireTabSelectedEvent.bind(_this5));
    });
  };

  MdTabs.prototype.detached = function detached() {
    var _this6 = this;

    this.attributeManager.removeClasses('tabs');

    this.tabAttributeManagers.forEach(function (setter) {
      setter.removeClasses('tab');
    });
    this.tabAttributeManagers = [];
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.removeEventListener('click', _this6.fireTabSelectedEvent.bind(_this6));
    });
  };

  MdTabs.prototype.fireTabSelectedEvent = function fireTabSelectedEvent(e) {
    var href = $(e.target).attr('href');
    fireMaterializeEvent(this.element, 'selected', href);
  };

  var _MdTabs = MdTabs;
  MdTabs = _aureliaFramework.inject(Element)(MdTabs) || MdTabs;
  MdTabs = _aureliaFramework.customAttribute('md-tabs')(MdTabs) || MdTabs;
  return MdTabs;
})();

exports.MdTabs = MdTabs;

var MdWaves = (function () {
  function MdWaves(element) {
    _classCallCheck(this, _MdWaves);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdWaves.prototype.attached = function attached() {
    var classes = ['waves-effect'];
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.addClasses(classes);
    Waves.attach(this.element);
  };

  MdWaves.prototype.detached = function detached() {
    var classes = ['waves-effect'];
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.removeClasses(classes);
  };

  var _MdWaves = MdWaves;
  MdWaves = _aureliaFramework.inject(Element)(MdWaves) || MdWaves;
  MdWaves = _aureliaFramework.bindable({
    name: 'color',
    defaultBindingMode: _aureliaFramework.bindingMode.oneTime
  })(MdWaves) || MdWaves;
  MdWaves = _aureliaFramework.customAttribute('md-waves')(MdWaves) || MdWaves;
  return MdWaves;
})();

exports.MdWaves = MdWaves;