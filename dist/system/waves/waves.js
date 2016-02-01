System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager'], function (_export) {
  'use strict';

  var bindable, customAttribute, bindingMode, inject, AttributeManager, MdWaves;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }],
    execute: function () {
      MdWaves = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdWaves, [{
          key: 'color',
          decorators: [bindable({
            defaultBindingMode: bindingMode.oneTime
          })],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function MdWaves(element) {
          _classCallCheck(this, _MdWaves);

          _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

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
        MdWaves = inject(Element)(MdWaves) || MdWaves;
        MdWaves = customAttribute('md-waves')(MdWaves) || MdWaves;
        return MdWaves;
      })();

      _export('MdWaves', MdWaves);
    }
  };
});