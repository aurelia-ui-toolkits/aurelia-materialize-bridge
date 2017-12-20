System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager', 'aurelia-logging'], function (_export, _context) {
  "use strict";

  var bindable, customElement, inject, getBooleanFromAttributeValue, AttributeManager, getLogger, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp, MdSidenav;

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
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }],
    execute: function () {
      _export('MdSidenav', MdSidenav = (_dec = customElement('md-sidenav'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
        function MdSidenav(element) {
          var _this = this;

          _classCallCheck(this, MdSidenav);

          _initDefineProp(this, 'mdCloseOnClick', _descriptor, this);

          _initDefineProp(this, 'mdEdge', _descriptor2, this);

          _initDefineProp(this, 'mdFixed', _descriptor3, this);

          _initDefineProp(this, 'mdWidth', _descriptor4, this);

          this.element = element;
          this.controlId = 'md-sidenav-' + MdSidenav.id++;
          this.log = getLogger('md-sidenav');
          this.whenAttached = new Promise(function (resolve, reject) {
            _this.attachedResolver = resolve;
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

        MdSidenav.prototype.mdFixedChanged = function mdFixedChanged(newValue) {
          if (this.attributeManager) {
            if (getBooleanFromAttributeValue(newValue)) {
              this.attributeManager.addClasses('fixed');
            } else {
              this.attributeManager.removeClasses('fixed');
            }
          }
        };

        return MdSidenav;
      }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdCloseOnClick', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdEdge', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return 'left';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdFixed', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdWidth', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 300;
        }
      })), _class2)) || _class) || _class));

      _export('MdSidenav', MdSidenav);
    }
  };
});
//# sourceMappingURL=../dist/dev/sidenav/sidenav.js.map
