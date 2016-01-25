define(['exports', 'aurelia-framework', '../common/cssClassSetter'], function (exports, _aureliaFramework, _commonCssClassSetter) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdWaves = (function () {
    function MdWaves(element) {
      _classCallCheck(this, _MdWaves);

      this.element = element;
      this.classSetter = new _commonCssClassSetter.CssClassSetter(this.element);
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
    MdWaves = _aureliaFramework.inject(Element)(MdWaves) || MdWaves;
    MdWaves = _aureliaFramework.bindable({
      name: 'color',
      defaultBindingMode: _aureliaFramework.bindingMode.oneTime
    })(MdWaves) || MdWaves;
    MdWaves = _aureliaFramework.customAttribute('md-waves')(MdWaves) || MdWaves;
    return MdWaves;
  })();

  exports.MdWaves = MdWaves;
});