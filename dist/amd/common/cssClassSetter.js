define(['exports'], function (exports) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var CssClassSetter = (function () {
    function CssClassSetter(element) {
      _classCallCheck(this, CssClassSetter);

      this.addedClasses = [];

      this.element = element;
    }

    CssClassSetter.prototype.addClasses = function addClasses(classes) {
      var _this = this;

      if (typeof classes === 'string') {
        classes = [classes];
      }
      classes.forEach(function (c) {
        if (!_this.element.classList.contains(c)) {
          _this.addedClasses.push(c);
          _this.element.classList.add(c);
        }
      });
    };

    CssClassSetter.prototype.removeClasses = function removeClasses(classes) {
      var _this2 = this;

      if (typeof classes === 'string') {
        classes = [classes];
      }
      classes.forEach(function (c) {
        if (_this2.element.classList.contains(c) && _this2.addedClasses.indexOf(c) > -1) {
          _this2.element.classList.remove(c);
          _this2.addedClasses.splice(_this2.addedClasses.indexOf(c), 1);
        }
      });
    };

    return CssClassSetter;
  })();

  exports.CssClassSetter = CssClassSetter;
});