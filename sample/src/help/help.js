// import { computedFrom } from 'aurelia-binding';

export class Help {
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
