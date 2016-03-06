'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _commonEvents = require('../common/events');

var _commonAttributeManager = require('../common/attributeManager');

var MdTabs = (function () {
  function MdTabs(element) {
    _classCallCheck(this, _MdTabs);

    this.element = element;
    this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
    this.attributeManager = new _commonAttributeManager.AttributeManager(this.element);
    this.tabAttributeManagers = [];
  }

  MdTabs.prototype.attached = function attached() {
    var _this = this;

    this.attributeManager.addClasses('tabs');

    var children = this.element.querySelectorAll('li');
    [].forEach.call(children, function (child) {
      var setter = new _commonAttributeManager.AttributeManager(child);
      setter.addClasses(['tab', 'primary-text']);
      _this.tabAttributeManagers.push(setter);
    });

    $(this.element).tabs();

    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.addEventListener('click', _this.fireTabSelectedEvent);
    });
  };

  MdTabs.prototype.detached = function detached() {
    var _this2 = this;

    this.attributeManager.removeClasses('tabs');

    this.tabAttributeManagers.forEach(function (setter) {
      setter.removeClasses('tab');
    });
    this.tabAttributeManagers = [];
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.removeEventListener('click', _this2.fireTabSelectedEvent);
    });
  };

  MdTabs.prototype.fireTabSelectedEvent = function fireTabSelectedEvent(e) {
    var _this3 = this;

    window.setTimeout(function () {
      var indicatorRight = $('.indicator', _this3.element).css('right');
      if (indicatorRight.indexOf('-') === 0) {
        $('.indicator', _this3.element).css('right', 0);
      }
    }, 310);
    var href = e.target.getAttribute('href');
    _commonEvents.fireMaterializeEvent(this.element, 'selected', href);
  };

  MdTabs.prototype.selectTab = function selectTab(id) {
    $(this.element).tabs('select_tab', id);
    this.fireTabSelectedEvent({
      target: { getAttribute: function getAttribute() {
          return '#' + id;
        } }
    });
  };

  _createClass(MdTabs, [{
    key: 'selectedTab',
    get: function get() {
      var children = this.element.querySelectorAll('li.tab a');
      var index = -1;
      var href = null;
      [].forEach.call(children, function (a, i) {
        if (a.classList.contains('active')) {
          index = i;
          href = a.href;
          return;
        }
      });
      return { href: href, index: index };
    }
  }]);

  var _MdTabs = MdTabs;
  MdTabs = _aureliaDependencyInjection.inject(Element)(MdTabs) || MdTabs;
  MdTabs = _aureliaTemplating.customAttribute('md-tabs')(MdTabs) || MdTabs;
  return MdTabs;
})();

exports.MdTabs = MdTabs;