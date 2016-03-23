define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var InstructionFilterValueConverter = exports.InstructionFilterValueConverter = function () {
    function InstructionFilterValueConverter() {
      _classCallCheck(this, InstructionFilterValueConverter);
    }

    InstructionFilterValueConverter.prototype.toView = function toView(navigationInstructions) {
      return navigationInstructions.filter(function (i) {
        var result = false;
        if (i.config.title) {
          result = true;
        }
        return result;
      });
    };

    return InstructionFilterValueConverter;
  }();
});