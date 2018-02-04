"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstructionFilterValueConverter {
    toView(navigationInstructions) {
        return navigationInstructions.filter(i => !!i.config.title);
    }
}
exports.InstructionFilterValueConverter = InstructionFilterValueConverter;
