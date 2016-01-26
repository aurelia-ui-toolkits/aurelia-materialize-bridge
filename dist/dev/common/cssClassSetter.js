System.register([], function (_export) {
  'use strict';

  var CssClassSetter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      CssClassSetter = (function () {
        function CssClassSetter(element) {
          _classCallCheck(this, CssClassSetter);

          this.addedClasses = [];
          this.addedAttributes = {};

          this.element = element;
        }

        CssClassSetter.prototype.addAttributes = function addAttributes(attrs) {
          var _this = this;

          var keys = Object.keys(attrs);
          keys.forEach(function (k) {
            if (!_this.element.getAttribute(k)) {
              _this.addedAttributes[k] = attrs[k];
              _this.element.setAttribute(k, attrs[k]);
            } else if (_this.element.getAttribute(k) !== attrs[k]) {
              _this.element.setAttribute(k, attrs[k]);
            }
          });
        };

        CssClassSetter.prototype.removeAttributes = function removeAttributes(attrs) {
          var _this2 = this;

          if (typeof attrs === 'string') {
            attrs = [attrs];
          }
          attrs.forEach(function (a) {
            if (_this2.element.getAttribute(a) && !!_this2.addedAttributes[a]) {
              _this2.element.removeAttribute(a);
              _this2.addedAttributes[a] = null;
              delete _this2.addedAttributes[a];
            }
          });
        };

        CssClassSetter.prototype.addClasses = function addClasses(classes) {
          var _this3 = this;

          if (typeof classes === 'string') {
            classes = [classes];
          }
          classes.forEach(function (c) {
            if (!_this3.element.classList.contains(c)) {
              _this3.addedClasses.push(c);
              _this3.element.classList.add(c);
            }
          });
        };

        CssClassSetter.prototype.removeClasses = function removeClasses(classes) {
          var _this4 = this;

          if (typeof classes === 'string') {
            classes = [classes];
          }
          classes.forEach(function (c) {
            if (_this4.element.classList.contains(c) && _this4.addedClasses.indexOf(c) > -1) {
              _this4.element.classList.remove(c);
              _this4.addedClasses.splice(_this4.addedClasses.indexOf(c), 1);
            }
          });
        };

        return CssClassSetter;
      })();

      _export('CssClassSetter', CssClassSetter);
    }
  };
});
//# sourceMappingURL=../dist/dev/common/cssClassSetter.js.map
