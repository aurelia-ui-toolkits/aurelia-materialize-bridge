import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customAttribute('md-scrollfire-target')
@inject(Element)
export class MdScrollfireTarget {
  @bindable() callback = null;
  @bindable() offset = 0;
  constructor(element) {
    this.element = element;
  }
}
