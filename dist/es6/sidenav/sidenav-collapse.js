import { bindable, customAttribute, inject } from 'aurelia-framework';

@customAttribute('md-sidenav-collapse')
@inject(Element)
export class MdSidenavCollapse {
  @bindable() ref;
  constructor(element) {
    this.element = element;
  }

  attached() {
    this.element.setAttribute('data-activates', this.ref.controlId);
    $(this.element).sideNav();
    // this.element.addEventListener('click', this.toggleSidenav);
  }

  detached() {
    // this.element.removeEventListener('click', this.toggleSidenav);
  }

  toggleSidenav() {
    $(this.element).sideNav('show');
  }
}
