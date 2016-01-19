export class BasicUse {
  attached() {
    this.tabs.addEventListener('md-on-tabSelected', (e) => {
      this.logger.log(`tab selected ${e.detail}`);
    });
  }
  // onTabSelected(e) {
  //   this.logger.log(`tab selected ${e.detail}`);
  // }
}
