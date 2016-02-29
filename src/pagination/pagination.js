import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('md-pagination')
@inject(Element)
export class MdPagination {
  @bindable() mdPages = 5;

  attached() {
    this.mdPages = parseInt(mdPages, 10);
  }
}
