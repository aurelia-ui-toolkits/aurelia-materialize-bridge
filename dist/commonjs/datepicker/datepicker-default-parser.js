"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatePickerDefaultParser = /** @class */ (function () {
    function DatePickerDefaultParser() {
    }
    DatePickerDefaultParser.prototype.canParse = function (value) {
        if (value) {
            return true;
        }
        return false;
    };
    DatePickerDefaultParser.prototype.parse = function (value) {
        if (value) {
            var result = value.split("/").join("-");
            result = new Date(result);
            return isNaN(result) ? null : result;
        }
        return null;
    };
    return DatePickerDefaultParser;
}());
exports.DatePickerDefaultParser = DatePickerDefaultParser;
