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
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) mdVisiblePageLinks = 15;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) mdPageLinks = [];
  @bindable() mdShowFirstLast = true;
  @bindable() mdShowPrevNext = true;
  @bindable() mdShowPageLinks = true;

  constructor(element) {
    this.element = element;
  }

  bind() {
    // attached() throws unhandled exceptions
    this.mdPages = parseInt(this.mdPages, 10);
    // We don't want mdVisiblePageLinks to be greater than mdPages
    this.mdVisiblePageLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.mdPages);
    this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
    this.mdPageLinks = this.generatePageLinks();
  }

  setActivePage(page) {
    this.mdActivePage = page;
    this.mdPageLinks = this.generatePageLinks();
    fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
  }

  setFirstPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(1);
    }
  }

  setLastPage() {
    if (this.mdActivePage < this.mdPages) {
      this.setActivePage(this.mdPages);
    }
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

  mdPagesChanged() {
    this.setActivePage(1);
  }

  mdVisiblePageLinksChanged() {
    this.mdPageLinks = this.generatePageLinks();
  }

  generatePageLinks() {
    let numberOfLinks = parseInt(this.mdVisiblePageLinks, 10);
    let midPoint = parseInt((numberOfLinks / 2));
    let start = Math.max(this.mdActivePage - midPoint, 0);
    let end = Math.min(start + numberOfLinks, this.mdPages);

    let list = [];
    for (let i = start; i < end; i++) {
      list.push(i);
    }

    return list;
  }
}
