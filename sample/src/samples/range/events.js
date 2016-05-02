export class Events {
  rangeValue = 30;

  onChange(e) {
    this.logger.log(`range value changed to ${this.rangeValue}`);
  }
}
