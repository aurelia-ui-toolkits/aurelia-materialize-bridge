import { customAttribute, bindable, bindingMode, inject } from 'aurelia-framework';

@customAttribute('md-tabs')
@inject(Element)
export class MdTabs {
  constructor (element) {
    this.element = element;
  }
  attached() {
    $(this.element).tabs();
  }
  detached() {
    // no destroy handler in tabs
  }
}
