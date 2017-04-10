'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging'], function (_export, _context) {
  "use strict";

  var bindable, customElement, inject, getLogger, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _class3, _temp, MdTapTarget;

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
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }],
    execute: function () {
      _export('MdTapTarget', MdTapTarget = (_dec = customElement('md-tap-target'), _dec2 = inject(Element), _dec3 = bindable(), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
        function MdTapTarget(element) {
          _classCallCheck(this, MdTapTarget);

          _initDefineProp(this, 'mdRef', _descriptor, this);

          this.element = element;
          this.log = getLogger('md-tap-target');
        }

        MdTapTarget.prototype.bind = function bind() {
          if (!this.mdRef) {
            throw new Error('md-tap-target needs a referenced element');
          } else {
            var id = this.mdRef.getAttribute('id');
            if (!id) {
              id = 'md-tap-target-' + MdTapTarget.controlId++;
              this.mdRef.setAttribute('id', id);
            }
            this.element.setAttribute('data-activates', id);
          }
        };

        MdTapTarget.prototype.open = function open() {
          $(this.element).tapTarget('open');
        };

        MdTapTarget.prototype.close = function close() {
          $(this.element).tapTarget('close');
        };

        return MdTapTarget;
      }(), _class3.controlId = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdRef', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('MdTapTarget', MdTapTarget);
    }
  };
});