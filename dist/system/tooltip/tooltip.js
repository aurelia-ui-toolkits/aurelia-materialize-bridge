System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, AttributeManager, MdTooltip;

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
      MdTooltip = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdTooltip, [{
          key: 'position',
          decorators: [bindable()],
          initializer: function initializer() {
            return 'bottom';
          },
          enumerable: true
        }, {
          key: 'delay',
          decorators: [bindable()],
          initializer: function initializer() {
            return 50;
          },
          enumerable: true
        }, {
          key: 'text',
          decorators: [bindable()],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }], null, _instanceInitializers);

        function MdTooltip(element) {
          _classCallCheck(this, _MdTooltip);

          _defineDecoratedPropertyDescriptor(this, 'position', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'delay', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'text', _instanceInitializers);

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
        MdTooltip = inject(Element)(MdTooltip) || MdTooltip;
        MdTooltip = customAttribute('md-tooltip')(MdTooltip) || MdTooltip;
        return MdTooltip;
      })();

      _export('MdTooltip', MdTooltip);
    }
  };
});