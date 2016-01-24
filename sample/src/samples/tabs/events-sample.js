export class Events {
  onTabSelected(e) {
    this.logger.log(`tab selected ${e.detail}`);
  }
}
