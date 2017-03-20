'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var MaterializeFormValidationRenderer;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('MaterializeFormValidationRenderer', MaterializeFormValidationRenderer = function () {
        function MaterializeFormValidationRenderer() {
          _classCallCheck(this, MaterializeFormValidationRenderer);

          this.className = 'md-input-validation';
          this.classNameFirst = 'md-input-validation-first';
        }

        MaterializeFormValidationRenderer.prototype.render = function render(instruction) {
          var _this = this;

          var allElements = new Array();
          for (var _iterator = instruction.unrender, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref2 = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref2 = _i.value;
            }

            var _ref5 = _ref2;
            var result = _ref5.result,
                elements = _ref5.elements;

            for (var _iterator3 = elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
              var _ref6;

              if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref6 = _iterator3[_i3++];
              } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref6 = _i3.value;
              }

              var element = _ref6;

              this.remove(element, result);
              if (allElements.indexOf(element) == -1) {
                allElements.push(element);
              }
            }
          }
          for (var _iterator2 = instruction.render, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref4;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref4 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref4 = _i2.value;
            }

            var _ref7 = _ref4;
            var result = _ref7.result,
                elements = _ref7.elements;

            for (var _iterator4 = elements, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
              var _ref8;

              if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                _ref8 = _iterator4[_i4++];
              } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                _ref8 = _i4.value;
              }

              var _element = _ref8;

              this.add(_element, result);
              if (allElements.indexOf(_element) == -1) {
                allElements.push(_element);
              }
            }
          }
          allElements.forEach(function (e) {
            return _this.underlineInput(e);
          });
        };

        MaterializeFormValidationRenderer.prototype.underlineInput = function underlineInput(element) {
          var input = void 0;
          switch (element.tagName) {
            case 'MD-INPUT':
              {
                input = element.querySelector('input') || element.querySelector('textarea');
                break;
              }
            case 'SELECT':
              {
                var selectWrapper = element.closest('.select-wrapper');
                if (selectWrapper) {
                  input = selectWrapper.querySelector('input');
                }
                break;
              }
            case 'INPUT':
              {
                input = element;
                break;
              }
            default:
              break;
          }
          if (input) {
            if (element.querySelectorAll('.' + this.className).length === 0) {
              input.classList.remove('invalid');
              input.classList.add('valid');
            } else {
              input.classList.remove('valid');
              input.classList.add('invalid');
            }
          }
        };

        MaterializeFormValidationRenderer.prototype.add = function add(element, result) {
          if (result.valid) {
            return;
          }
          switch (element.tagName) {
            case 'MD-INPUT':
              {
                var label = element.querySelector('label');
                var input = element.querySelector('input') || element.querySelector('textarea');
                if (label) {
                  label.removeAttribute('data-error');
                }
                if (input) {
                  result.target = input;
                  if (input.hasAttribute('data-show-errortext')) {
                    this.addMessage(element, result);
                  }
                }
                break;
              }
            case 'SELECT':
              {
                var selectWrapper = element.closest('.select-wrapper');
                if (!selectWrapper) {
                  return;
                }
                var _input = selectWrapper.querySelector('input');
                if (_input) {
                  result.target = _input;
                  if (!(_input.hasAttribute('data-show-errortext') && _input.getAttribute('data-show-errortext') === 'false')) {
                    this.addMessage(selectWrapper, result);
                  }
                }
                break;
              }
            case 'INPUT':
              {
                if (element.hasAttribute('md-datepicker')) {
                  if (!(element.hasAttribute('data-show-errortext') && element.getAttribute('data-show-errortext') === 'false')) {
                    this.addMessage(element.parentNode, result);
                  }
                }
                break;
              }
            default:
              break;
          }
        };

        MaterializeFormValidationRenderer.prototype.remove = function remove(element, result) {
          if (result.valid) {
            return;
          }
          switch (element.tagName) {
            case 'MD-INPUT':
              {
                this.removeMessage(element, result);
                break;
              }
            case 'SELECT':
              {
                var selectWrapper = element.closest('.select-wrapper');
                if (!selectWrapper) {
                  return;
                }

                if ($(selectWrapper.parentElement).children().hasClass('md-input-validation')) {
                  this.removeMessage(selectWrapper.parentElement, result);
                } else {
                  this.removeMessage(selectWrapper, result);
                }
                break;
              }
            case 'INPUT':
              {
                if (element.hasAttribute('md-datepicker')) {
                  this.removeMessage(element.parentNode, result);
                }
                break;
              }
            default:
              break;
          }
        };

        MaterializeFormValidationRenderer.prototype.addMessage = function addMessage(element, result) {
          var message = document.createElement('div');
          message.id = 'md-input-validation-' + result.id;
          message.textContent = result.message;
          message.className = this.className;
          if (element.querySelectorAll('.' + this.className).length === 0) {
            message.className += ' ' + this.classNameFirst;
          }
          message.style.opacity = 0;
          element.appendChild(message, element.nextSibling);
          window.getComputedStyle(message).opacity;
          message.style.opacity = 1;
        };

        MaterializeFormValidationRenderer.prototype.removeMessage = function removeMessage(element, result) {
          var message = element.querySelector('#md-input-validation-' + result.id);
          if (message) {
            element.removeChild(message);
          }
        };

        return MaterializeFormValidationRenderer;
      }());

      _export('MaterializeFormValidationRenderer', MaterializeFormValidationRenderer);
    }
  };
});
//# sourceMappingURL=../dist/dev/validation/validationRenderer.js.map
