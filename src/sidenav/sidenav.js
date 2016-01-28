import { bindable, customElement, inject } from 'aurelia-framework';

@customElement('md-sidenav')
@inject(Element)
export class MdSidenav {
  static id = 0;
  @bindable() edge = 'left';
  @bindable() closeOnClick = true;

  constructor(element) {
    this.element = element;
    this.controlId = `md-sidenav-${MdSidenav.id++}`;
  }

  attached() {
    // this.controlId = 'md-sidenav-' + id++;
  }
}
