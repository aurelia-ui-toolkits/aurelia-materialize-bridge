'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DatePickerDefaultParser = exports.DatePickerDefaultParser = function () {
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
}();