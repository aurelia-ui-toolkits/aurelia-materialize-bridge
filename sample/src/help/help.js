export class Help {
  attached() {
    this.tabs.addEventListener('md-on-selected', e => {
      if (e.detail == '#gitter') {
        this.toggleChat();
      }
    });
  }
  toggleChat() {
    this.gitter.toggleChat(true);
  }
}
