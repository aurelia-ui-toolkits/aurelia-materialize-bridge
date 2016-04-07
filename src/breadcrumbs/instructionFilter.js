export class InstructionFilterValueConverter {
  toView(navigationInstructions) {
    return navigationInstructions.filter(i => {
      let result = false;
      if (i.config.title) {
        result = true;
      }
      return result;
    });
  }
}
