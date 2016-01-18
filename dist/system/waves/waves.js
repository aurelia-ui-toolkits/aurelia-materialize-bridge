System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, bindingMode, customAttribute, inject, MdWaves;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      MdWaves = (function () {
        function MdWaves(element) {
          _classCallCheck(this, _MdWaves);

          this.element = element;
          this.keepWavesCssClasses = false;
        }

        MdWaves.prototype.attached = function attached() {
          if (this.element.classList.contains('waves-effect')) {
            this.keepWavesCssClasses = true;
          } else {
            this.element.classList.add('waves-effect');
          }
          if (this.color && !this.element.classList.contains('waves-' + this.color)) {
            this.element.classList.add('waves-' + this.color);
          }

          Waves.attach(this.element);
        };

        MdWaves.prototype.detached = function detached() {
          if (!this.keepWavesCssClasses) {
            this.element.classList.remove('waves-effect');
          }
          if (this.color && this.element.classList.contains('waves-' + this.color)) {
            this.element.classList.remove('waves-' + this.color);
          }
        };

        var _MdWaves = MdWaves;
        MdWaves = inject(Element)(MdWaves) || MdWaves;
        MdWaves = bindable({
          name: 'color',
          defaultBindingMode: bindingMode.oneTime
        })(MdWaves) || MdWaves;
        MdWaves = customAttribute('md-waves')(MdWaves) || MdWaves;
        return MdWaves;
      })();

      _export('MdWaves', MdWaves);
    }
  };
});