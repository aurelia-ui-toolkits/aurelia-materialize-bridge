import { bindable, bindingMode, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('md-card')
@inject(Element)
export class MdCard {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTitle;

  constructor(element) {

  }
}
