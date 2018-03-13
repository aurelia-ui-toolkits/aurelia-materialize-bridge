System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DatePickerDefaultParser;
    return {
        setters: [],
        execute: function () {
            DatePickerDefaultParser = class DatePickerDefaultParser {
                canParse(value) {
                    if (value) {
                        return true;
                    }
                    return false;
                }
                parse(value) {
                    if (value) {
                        let result = value.split("/").join("-");
                        result = new Date(result);
                        return isNaN(result) ? null : result;
                    }
                    return null;
                }
            };
            exports_1("DatePickerDefaultParser", DatePickerDefaultParser);
        }
    };
});
