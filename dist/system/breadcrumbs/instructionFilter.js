System.register([], function (exports_1, context_1) {
    "use strict";
    var InstructionFilterValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            InstructionFilterValueConverter = /** @class */ (function () {
                function InstructionFilterValueConverter() {
                }
                InstructionFilterValueConverter.prototype.toView = function (navigationInstructions) {
                    return navigationInstructions.filter(function (i) { return !!i.config.title; });
                };
                return InstructionFilterValueConverter;
            }());
            exports_1("InstructionFilterValueConverter", InstructionFilterValueConverter);
        }
    };
});
//# sourceMappingURL=instructionFilter.js.map