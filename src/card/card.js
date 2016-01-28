import { bindable, bindingMode, customElement, inject } from 'aurelia-framework';

@customElement('md-card')
@inject(Element)
export class MdCard {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTitle;

  constructor(element) {

  }
}
