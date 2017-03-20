import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-fab')
@inject(Element)
export class MdFab {
  @bindable() mdFixed = false;
  @bindable() mdLarge = false;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
    this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
  }
}
