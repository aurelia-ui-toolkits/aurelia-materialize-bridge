"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InstructionFilterValueConverter = /** @class */ (function () {
    function InstructionFilterValueConverter() {
    }
    InstructionFilterValueConverter.prototype.toView = function (navigationInstructions) {
        return navigationInstructions.filter(function (i) { return !!i.config.title; });
    };
    return InstructionFilterValueConverter;
}());
exports.InstructionFilterValueConverter = InstructionFilterValueConverter;
//# sourceMappingURL=instructionFilter.js.map