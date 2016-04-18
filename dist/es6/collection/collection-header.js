import { customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('md-collection-header')
@inject(Element)
export class MdCollectionHeader {
  constructor(element) {
    this.element = element;
  }
}
