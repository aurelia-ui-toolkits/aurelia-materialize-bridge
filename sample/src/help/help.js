export class Help {
  // TODO: implement tab events or find another way to trigger this
  // tabSelected(e) {
  //   if (jQuery(e.item).text() === 'Aurelia-Materialize Gitter Channel') {
  //     this.gitter.toggleChat(true);
  //   }
  // }

  attached() {
    this.tabs.addEventListener('md-on-tabSelected', e => {
      if (e.detail == '#gitter') {
        this.toggleChat();
      }
    });
  }
  toggleChat() {
    this.gitter.toggleChat(true);
  }
}
