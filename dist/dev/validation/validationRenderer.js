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

        MaterializeFormValidationRenderer.prototype.pushElementResult = function pushElementResult(elementResults, element, result) {
          if (elementResults.has(element)) {
            elementResults.get(element).push(result);
          } else {
            elementResults.set(element, [result]);
          }
        };

        MaterializeFormValidationRenderer.prototype.render = function render(instruction) {
          var elementResultsToUnrender = new Map();

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

            var _ref7 = _ref2;
            var result = _ref7.result,
                elements = _ref7.elements;

            for (var _iterator5 = elements, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
              var _ref8;

              if (_isArray5) {
                if (_i5 >= _iterator5.length) break;
                _ref8 = _iterator5[_i5++];
              } else {
                _i5 = _iterator5.next();
                if (_i5.done) break;
                _ref8 = _i5.value;
              }

              var element = _ref8;

              this.pushElementResult(elementResultsToUnrender, element, result);
            }
          }
          for (var _iterator2 = elementResultsToUnrender, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref3 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref3 = _i2.value;
            }

            var _ref9 = _ref3,
                _element = _ref9[0],
                results = _ref9[1];

            if (_element.mdUnrenderValidateResults) {
              _element.mdUnrenderValidateResults(results, this);
            } else {
              this.defaultUnrenderValidateResults(_element, results);
            }
          }

          var elementResultsToRender = new Map();
          for (var _iterator3 = instruction.render, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref5;

            if (_isArray3) {
              if (_i3 >= _iterator3.length) break;
              _ref5 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done) break;
              _ref5 = _i3.value;
            }

            var _ref10 = _ref5;
            var result = _ref10.result,
                elements = _ref10.elements;

            for (var _iterator6 = elements, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
              var _ref11;

              if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref11 = _iterator6[_i6++];
              } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref11 = _i6.value;
              }

              var _element2 = _ref11;

              this.pushElementResult(elementResultsToRender, _element2, result);
            }
          }
          for (var _iterator4 = elementResultsToRender, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
            var _ref6;

            if (_isArray4) {
              if (_i4 >= _iterator4.length) break;
              _ref6 = _iterator4[_i4++];
            } else {
              _i4 = _iterator4.next();
              if (_i4.done) break;
              _ref6 = _i4.value;
            }

            var _ref12 = _ref6,
                _element3 = _ref12[0],
                results = _ref12[1];

            if (_element3.mdUnrenderValidateResults) {
              _element3.mdRenderValidateResults(results, this);
            } else {
              this.defaultRenderValidateResults(_element3, results);
            }
          }
        };

        MaterializeFormValidationRenderer.prototype.defaultUnrenderValidateResults = function defaultUnrenderValidateResults(element, results) {
          if (element.tagName !== 'INPUT') {
            return;
          }
          this.removeValidationClasses(element);
        };

        MaterializeFormValidationRenderer.prototype.defaultRenderValidateResults = function defaultRenderValidateResults(element, results) {
          if (element.tagName !== 'INPUT') {
            return;
          }
          this.addValidationClasses(element, !results.find(function (x) {
            return !x.valid;
          }));
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

        MaterializeFormValidationRenderer.prototype.removeValidationClasses = function removeValidationClasses(input) {
          input.classList.remove('valid');
          input.classList.remove('invalid');
        };

        MaterializeFormValidationRenderer.prototype.addValidationClasses = function addValidationClasses(input, isValid) {
          if (isValid) {
            input.classList.remove('invalid');
            input.classList.add('valid');
          } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
          }
        };

        return MaterializeFormValidationRenderer;
      }());

      _export('MaterializeFormValidationRenderer', MaterializeFormValidationRenderer);
    }
  };
});
//# sourceMappingURL=../dist/dev/validation/validationRenderer.js.map
