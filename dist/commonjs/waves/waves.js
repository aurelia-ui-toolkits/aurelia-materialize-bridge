'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var MdWaves = (function () {
  function MdWaves(element) {
    _classCallCheck(this, _MdWaves);

    this.element = element;
  }

  MdWaves.prototype.attached = function attached() {
    this.element.classList.add('waves-effect');
    Waves.attach(this.element);
  };

  MdWaves.prototype.detached = function detached() {
    Waves.calm(this.element);
    this.element.classList.remove('waves-effect');
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