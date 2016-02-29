import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('md-pagination')
@inject(Element)
export class MdPagination {
  @bindable() mdPages = 5;
  activePage = 1;

  attached() {
    this.mdPages = parseInt(this.mdPages, 10);
  }
}
