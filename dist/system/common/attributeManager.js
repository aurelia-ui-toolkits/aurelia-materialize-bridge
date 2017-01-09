'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var AttributeManager;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('AttributeManager', AttributeManager = function () {
        function AttributeManager(element) {
          _classCallCheck(this, AttributeManager);

          this._colorClasses = ['accent', 'primary'];
          this.addedClasses = [];
          this.addedAttributes = {};

          this.element = element;
        }

        AttributeManager.prototype.addAttributes = function addAttributes(attrs) {
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

        AttributeManager.prototype.removeAttributes = function removeAttributes(attrs) {
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

        AttributeManager.prototype.addClasses = function addClasses(classes) {
          var _this3 = this;

          if (typeof classes === 'string') {
            classes = [classes];
          }
          classes.forEach(function (c) {
            var classListHasColor = _this3._colorClasses.filter(function (cc) {
              return _this3.element.classList.contains(cc);
            }).length > 0;
            if (_this3._colorClasses.indexOf(c) > -1 && classListHasColor) {} else {
              if (!_this3.element.classList.contains(c)) {
                _this3.addedClasses.push(c);
                _this3.element.classList.add(c);
              }
            }
          });
        };

        AttributeManager.prototype.removeClasses = function removeClasses(classes) {
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

        return AttributeManager;
      }());

      _export('AttributeManager', AttributeManager);
    }
  };
});