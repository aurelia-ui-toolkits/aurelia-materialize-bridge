// import { computedFrom } from 'aurelia-binding';

export class Help {
  attached() {
    this.tabs.addEventListener('md-on-selected', e => {
      if (e.detail === '#gitter') {
        this.toggleChat();
      }
    });
  }

  toggleChat() {
    this.gitter.toggleChat(true);
  }

  scrollToTop() {
    // window.scrollTo(0, 0);
    $('html, body').animate({ scrollTop: 0 });
  }
  // @computedFrom('document.body.scrollTop')
  showScrollFAB() {
    // return document.body.scrollTop > 200;
    return true;
  }
}
