export class Events {
  activePage = 1;

  onPageChanged(e) {
    this.logger.log(`page changed ${e.detail}`);
  }
}
