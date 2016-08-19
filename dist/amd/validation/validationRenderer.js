define(['exports', 'aurelia-dependency-injection', 'aurelia-validation'], function (exports, _aureliaDependencyInjection, _aureliaValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MaterializeFormValidationRenderer = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var MaterializeFormValidationRenderer = exports.MaterializeFormValidationRenderer = (_dec = (0, _aureliaDependencyInjection.inject)(Element), (0, _aureliaValidation.validationRenderer)(_class = _dec(_class = function () {
    function MaterializeFormValidationRenderer(boundaryElement) {
      _classCallCheck(this, MaterializeFormValidationRenderer);

      this.boundaryElement = boundaryElement;
    }

    MaterializeFormValidationRenderer.prototype.render = function render(error, target) {
      if (!target || !(this.boundaryElement === target || this.boundaryElement.contains(target))) {
        return;
      }

      var errorMessage = error.message || 'error';

      switch (target.tagName) {
        case 'MD-INPUT':
          {
            var input = target.querySelector('input');
            if (input) {
              input.classList.remove('valid');
              input.classList.add('invalid');

              error.target = input;

              var label = target.querySelector('label');
              if (label) {
                label.classList.remove('valid');
                label.classList.add('active');
                label.classList.add('invalid');

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
      }

      target.errors = target.errors || new Map();
      target.errors.set(error);
    };

    MaterializeFormValidationRenderer.prototype.unrender = function unrender(error, target) {
      if (!target || !target.errors || !target.errors.has(error)) {
        return;
      }

      target.errors.delete(error);

      switch (target.tagName) {
        case 'MD-INPUT':
          {
            var input = target.querySelector('input');
            if (input) {

              input.classList.remove('invalid');
              input.classList.add('valid');

              var label = target.querySelector('label');
              if (label) {
                label.classList.remove('invalid');
                label.classList.add('valid');
              }
            }
            break;
          }
      }
    };

    return MaterializeFormValidationRenderer;
  }()) || _class) || _class);
});