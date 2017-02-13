import {inject} from 'aurelia-dependency-injection';
import {DOM} from 'aurelia-pal';
import {bindable} from 'aurelia-templating';

@inject(DOM.Element)
export class AuMdTab {
  @bindable() isActive = false;
  @bindable() mdLabel = '';

  constructor(element) {
    this.element = element;
  }
}
