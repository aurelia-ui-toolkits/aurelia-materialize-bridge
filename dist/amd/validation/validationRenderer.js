define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MaterializeFormValidationRenderer = exports.MaterializeFormValidationRenderer = function () {
    function MaterializeFormValidationRenderer() {
      _classCallCheck(this, MaterializeFormValidationRenderer);
    }

    MaterializeFormValidationRenderer.prototype.render = function render(instruction) {
      for (var _iterator = instruction.unrender, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var _ref3 = _ref;
        var error = _ref3.error;
        var elements = _ref3.elements;

        for (var _iterator3 = elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref4 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref4 = _i3.value;
          }

          var element = _ref4;

          this.remove(element, error);
        }
      }

      for (var _iterator2 = instruction.render, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _ref5 = _ref2;
        var error = _ref5.error;
        var elements = _ref5.elements;

        for (var _iterator4 = elements, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref6;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref6 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref6 = _i4.value;
          }

          var _element = _ref6;

          this.add(_element, error);
        }
      }
    };

    MaterializeFormValidationRenderer.prototype.add = function add(element, error) {
      switch (element.tagName) {
        case 'MD-INPUT':
          {
            var errorMessage = error.message || 'error';
            var input = element.querySelector('input');
            if (input) {
              input.classList.remove('valid');
              input.classList.add('invalid');

              error.target = input;

              var label = element.querySelector('label');
              if (label) {
                label.classList.add('active');

                var msg = label.getAttribute('data-error');
                if (!msg) {
                  label.setAttribute('data-error', errorMessage);
                } else {
                  error.message = msg;
                }
              }
            }
            break;
          }
        default:
          break;
      }
    };

    MaterializeFormValidationRenderer.prototype.remove = function remove(element, error) {
      switch (element.tagName) {
        case 'MD-INPUT':
          {
            var input = element.querySelector('input');
            if (input) {
              input.classList.remove('invalid');
              input.classList.add('valid');
            }
            break;
          }
        default:
          break;
      }
    };

    return MaterializeFormValidationRenderer;
  }();
});