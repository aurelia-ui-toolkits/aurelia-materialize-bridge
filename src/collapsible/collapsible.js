import {customAttribute, bindable, bindingMode, inject} from 'aurelia-framework';

@customAttribute('md-collapsible')
@bindable({ name: 'accordion', defaultValue: false })
@inject(Element)

export class MdCollapsible {
  constructor(element) {
    this.element = element;
  }

  attached() {
    refresh();
  }
  refresh() {
    $(this.element).collapsible({
      accordion: (this.accordion === true || this.accordion === 'true' )
    });
  }
}
