export class Help {
  tabSelected(e) {
    if (jQuery(e.item).text() === 'KendoUI Gitter Channel') {
      this.gitter.toggleChat(true);
    }
  }
}
