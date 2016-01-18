import {customAttribute, bindable, bindingMode, inject} from 'aurelia-framework';
import { getBooleanFromAttributeValue } from '../common/attributes';

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
    let accordion = getBooleanFromAttributeValue(this.accordion);
    if (accordion) {
      this.element.setAttribute('data-collapsible', 'accordion');
    } else {
      this.element.setAttribute('data-collapsible', 'expandable');
    }
    $(this.element).collapsible({
      accordion
    });
  }
}
