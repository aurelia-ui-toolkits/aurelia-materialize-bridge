export class InstructionFilterValueConverter {
    toView(navigationInstructions) {
        return navigationInstructions.filter(i => !!i.config.title);
    }
}
//# sourceMappingURL=instructionFilter.js.map