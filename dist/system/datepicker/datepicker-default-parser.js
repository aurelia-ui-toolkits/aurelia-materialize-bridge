System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DatePickerDefaultParser;
    return {
        setters: [],
        execute: function () {
            DatePickerDefaultParser = /** @class */ (function () {
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
            exports_1("DatePickerDefaultParser", DatePickerDefaultParser);
        }
    };
});
