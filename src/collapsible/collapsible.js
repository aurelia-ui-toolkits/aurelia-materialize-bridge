import {customAttribute, bindable, inject} from 'aurelia-framework';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { CssClassSetter } from '../common/cssClassSetter';

@customAttribute('md-collapsible')
@bindable({ name: 'accordion', defaultValue: false })
@bindable({ name: 'popout', defaultValue: false })
@inject(Element)

export class MdCollapsible {
  constructor(element) {
    this.element = element;
    this.classSetter = new CssClassSetter(this.element);
  }

  attached() {
    this.classSetter.addClasses('collapsible');
    if (getBooleanFromAttributeValue(this.popout)) {
      this.classSetter.addClasses('popout');
    }
    this.refresh();
  }

  detached() {
    this.classSetter.removeClasses(['collapsible', 'popout']);
    this.classSetter.removeAttributes(['data-collapsible']);
  }

  refresh() {
    let accordion = getBooleanFromAttributeValue(this.accordion);
    if (accordion) {
      // this.element.setAttribute('data-collapsible', 'accordion');
      this.classSetter.addAttributes({ 'data-collapsible': 'accordion' });
    } else {
      // this.element.setAttribute('data-collapsible', 'expandable');
      this.classSetter.addAttributes({ 'data-collapsible': 'expandable' });
    }

    $(this.element).collapsible({
      accordion
    });
  }

  accordionChanged() {
    this.refresh();
  }
}
