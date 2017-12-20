System.register(['aurelia-templating', 'aurelia-logging', 'aurelia-dependency-injection', '../common/attributes', '../common/events'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, getLogger, inject, getBooleanFromAttributeValue, fireMaterializeEvent, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, MdSidenavCollapse;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }, function (_commonEvents) {
      fireMaterializeEvent = _commonEvents.fireMaterializeEvent;
    }],
    execute: function () {
      _export('MdSidenavCollapse', MdSidenavCollapse = (_dec = customAttribute('md-sidenav-collapse'), _dec2 = inject(Element), _dec3 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdSidenavCollapse(element) {
          _classCallCheck(this, MdSidenavCollapse);

          _initDefineProp(this, 'ref', _descriptor, this);

          this.element = element;
          this.log = getLogger('md-sidenav-collapse');
        }

        MdSidenavCollapse.prototype.attached = function attached() {
          var _this = this;

          this.ref.whenAttached.then(function () {
            var closeOnClick = _this.ref.mdFixed && window.innerWidth > 992 ? false : getBooleanFromAttributeValue(_this.ref.mdCloseOnClick);

            _this.onHide = _this.onHide.bind(_this);
            _this.onShow = _this.onShow.bind(_this);

            _this.element.setAttribute('data-activates', _this.ref.controlId);
            var sideNavConfig = {
              edge: _this.ref.mdEdge || 'left',
              closeOnClick: closeOnClick,
              menuWidth: parseInt(_this.ref.mdWidth, 10),
              onClose: _this.onHide,
              onOpen: _this.onShow
            };
            $(_this.element).sideNav(sideNavConfig);
          });
        };

        MdSidenavCollapse.prototype.detached = function detached() {};

        MdSidenavCollapse.prototype.show = function show() {
          $(this.element).sideNav('show');
        };

        MdSidenavCollapse.prototype.hide = function hide() {
          $(this.element).sideNav('hide');
        };

        MdSidenavCollapse.prototype.onShow = function onShow(el) {
          fireMaterializeEvent(this.ref.element, 'sidenav-show');
        };

        MdSidenavCollapse.prototype.onHide = function onHide(el) {
          fireMaterializeEvent(this.ref.element, 'sidenav-hide');
        };

        return MdSidenavCollapse;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ref', [_dec3], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('MdSidenavCollapse', MdSidenavCollapse);
    }
  };
});
//# sourceMappingURL=../dist/dev/sidenav/sidenav-collapse.js.map
