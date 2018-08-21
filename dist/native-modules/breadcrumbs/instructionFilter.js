var InstructionFilterValueConverter = /** @class */ (function () {
    function InstructionFilterValueConverter() {
    }
    InstructionFilterValueConverter.prototype.toView = function (navigationInstructions) {
        return navigationInstructions.filter(function (i) { return !!i.config.title; });
    };
    return InstructionFilterValueConverter;
}());
export { InstructionFilterValueConverter };
//# sourceMappingURL=instructionFilter.js.map