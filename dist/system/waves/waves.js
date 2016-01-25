System.register(['aurelia-framework', '../common/cssClassSetter'], function (_export) {
  'use strict';

  var bindable, bindingMode, customAttribute, inject, CssClassSetter, MdWaves;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }, function (_commonCssClassSetter) {
      CssClassSetter = _commonCssClassSetter.CssClassSetter;
    }],
    execute: function () {
      MdWaves = (function () {
        function MdWaves(element) {
          _classCallCheck(this, _MdWaves);

          this.element = element;
          this.classSetter = new CssClassSetter(this.element);
        }

        MdWaves.prototype.attached = function attached() {
          var classes = ['waves-effect'];
          if (this.color) {
            classes.push('waves-' + this.color);
          }

          this.classSetter.addClasses(classes);
          Waves.attach(this.element);
        };

        MdWaves.prototype.detached = function detached() {
          var classes = ['waves-effect'];
          if (this.color) {
            classes.push('waves-' + this.color);
          }

          this.classSetter.removeClasses(classes);
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