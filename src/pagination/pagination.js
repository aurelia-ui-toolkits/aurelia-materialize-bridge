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

  // local variables to stop Changed events when parsing to int
  numberOfLinks = 15;
  pages = 5;

  constructor(element) {
    this.element = element;
  }

  bind() {
    // attached() throws unhandled exceptions
    this.pages = parseInt(this.mdPages, 10);
    // We don't want mdVisiblePageLinks to be greater than mdPages
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.mdShowFirstLast = getBooleanFromAttributeValue(this.mdShowFirstLast);
    this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
    this.mdPageLinks = this.generatePageLinks();
  }

  setActivePage(page) {
    this.mdActivePage = parseInt(page, 10);
    this.mdPageLinks = this.generatePageLinks();
    fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
  }

  setFirstPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(1);
    }
  }

  setLastPage() {
    if (this.mdActivePage < this.pages) {
      this.setActivePage(this.pages);
    }
  }

  setPreviousPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(this.mdActivePage - 1);
    }
  }

  setNextPage() {
    if (this.mdActivePage < this.pages) {
      this.setActivePage(this.mdActivePage + 1);
    }
  }

  mdPagesChanged() {
    this.pages = parseInt(this.mdPages, 10);
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.setActivePage(1);
  }

  mdVisiblePageLinksChanged() {
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.mdPageLinks = this.generatePageLinks();
  }

  generatePageLinks() {
    let midPoint = parseInt((this.numberOfLinks / 2), 10);
    let start = Math.max(this.mdActivePage - midPoint, 0);
    // respect visible links
    if (start + midPoint * 2 > this.pages) start = this.pages - midPoint * 2;
    let end = Math.min(start + this.numberOfLinks, this.pages);

    let list = [];
    for (let i = start; i < end; i++) {
      list.push(i);
    }

    return list;
  }
}
