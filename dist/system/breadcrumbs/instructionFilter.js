"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var InstructionFilterValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("InstructionFilterValueConverter", InstructionFilterValueConverter = function () {
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
      }());

      _export("InstructionFilterValueConverter", InstructionFilterValueConverter);
    }
  };
});