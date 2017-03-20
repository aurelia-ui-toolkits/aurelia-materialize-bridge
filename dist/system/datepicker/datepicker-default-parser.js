'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var DatePickerDefaultParser;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('DatePickerDefaultParser', DatePickerDefaultParser = function () {
        function DatePickerDefaultParser() {
          _classCallCheck(this, DatePickerDefaultParser);
        }

        DatePickerDefaultParser.prototype.canParse = function canParse(value) {
          if (value) {
            return true;
          }
          return false;
        };

        DatePickerDefaultParser.prototype.parse = function parse(value) {
          if (value) {
            var result = value.split('/').join('-');
            result = new Date(result);
            return isNaN(result) ? null : result;
          }
          return null;
        };

        return DatePickerDefaultParser;
      }());

      _export('DatePickerDefaultParser', DatePickerDefaultParser);
    }
  };
});