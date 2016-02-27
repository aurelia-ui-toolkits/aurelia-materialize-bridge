System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, AttributeManager, MdCharCounter;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }],
    execute: function () {
      MdCharCounter = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdCharCounter, [{
          key: 'length',
          decorators: [bindable()],
          initializer: function initializer() {
            return 120;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function MdCharCounter(element) {
          _classCallCheck(this, _MdCharCounter);

          _defineDecoratedPropertyDescriptor(this, 'length', _instanceInitializers);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        MdCharCounter.prototype.attached = function attached() {
          var _this = this;

          this.length = parseInt(this.length, 10);

          if (this.element.tagName.toUpperCase() === 'INPUT') {
            this.attributeManager.addAttributes({ 'length': this.length });
            $(this.element).characterCounter();
          } else {
            $(this.element).find('input').each(function (i, el) {
              $(el).attr('length', _this.length);
            });
            $(this.element).find('input').characterCounter();
          }
        };

        MdCharCounter.prototype.detached = function detached() {
          this.attributeManager.removeAttributes(['length']);
        };

        var _MdCharCounter = MdCharCounter;
        MdCharCounter = inject(Element)(MdCharCounter) || MdCharCounter;
        MdCharCounter = customAttribute('md-char-counter')(MdCharCounter) || MdCharCounter;
        return MdCharCounter;
      })();

      _export('MdCharCounter', MdCharCounter);
    }
  };
});