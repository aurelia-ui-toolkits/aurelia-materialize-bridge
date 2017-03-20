'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, inject, getLogger, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, MdStaggeredList;

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
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }],
    execute: function () {
      _export('MdStaggeredList', MdStaggeredList = (_dec = customAttribute('md-staggered-list'), _dec2 = inject(Element), _dec3 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdStaggeredList(element) {
          _classCallCheck(this, MdStaggeredList);

          _initDefineProp(this, 'ref', _descriptor, this);

          this.element = element;
          this.staggerList = this.staggerList.bind(this);
          this.log = getLogger('md-staggered-list');
        }

        MdStaggeredList.prototype.attached = function attached() {
          this.element.addEventListener('click', this.staggerList);
          this.ensureOpacity();
        };

        MdStaggeredList.prototype.detached = function detached() {
          this.element.removeEventListener('click', this.staggerList);
        };

        MdStaggeredList.prototype.staggerList = function staggerList() {
          Materialize.showStaggeredList($(this.ref));
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

        return MdStaggeredList;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ref', [_dec3], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('MdStaggeredList', MdStaggeredList);
    }
  };
});
//# sourceMappingURL=../dist/dev/transitions/staggered-list.js.map
