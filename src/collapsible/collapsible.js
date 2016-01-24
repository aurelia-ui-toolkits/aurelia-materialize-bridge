import {customAttribute, bindable, bindingMode, inject} from 'aurelia-framework';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { CssClassSetter } from '../common/cssClassSetter';

@customAttribute('md-collapsible')
@bindable({ name: 'accordion', defaultValue: false })
@inject(Element)

export class MdCollapsible {
  constructor(element) {
    this.element = element;
    this.classSetter = new CssClassSetter(this.element);
  }

  attached() {
    this.classSetter.addClasses('collapsible');
    this.refresh();
  }

  detached() {
    this.classSetter.removeClasses('collapsible');
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
