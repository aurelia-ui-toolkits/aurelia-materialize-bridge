import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { fireMaterializeEvent } from '../common/events';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-pagination')
@inject(Element)
export class MdPagination {
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdActivePage = 1;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) mdPages = 5;
  @bindable() mdShowPrevNext = true;

  constructor(element) {
    this.element = element;
  }

  bind() {
    // attached() throws unhandled exceptions
    this.mdPages = parseInt(this.mdPages, 10);
    this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
  }

  setActivePage(page) {
    this.mdActivePage = page;
    fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
  }

  setPreviousPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(this.mdActivePage - 1);
    }
  }

  setNextPage() {
    if (this.mdActivePage < this.mdPages) {
      this.setActivePage(this.mdActivePage + 1);
    }
  }
}
