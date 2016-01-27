import {customAttribute, bindable, inject} from 'aurelia-framework';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { AttributeManager } from '../common/attributeManager';
import 'jquery';
import * as collapsible from 'materialize/js/collapsible';

@customAttribute('md-collapsible')
@bindable({ name: 'accordion', defaultValue: false })
@bindable({ name: 'popout', defaultValue: false })
@inject(Element)

export class MdCollapsible {
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.attributeManager.addClasses('collapsible');
    if (getBooleanFromAttributeValue(this.popout)) {
      this.attributeManager.addClasses('popout');
    }
    this.refresh();
  }

  detached() {
    this.attributeManager.removeClasses(['collapsible', 'popout']);
    this.attributeManager.removeAttributes(['data-collapsible']);
  }

  refresh() {
    let accordion = getBooleanFromAttributeValue(this.accordion);
    if (accordion) {
      // this.element.setAttribute('data-collapsible', 'accordion');
      this.attributeManager.addAttributes({ 'data-collapsible': 'accordion' });
    } else {
      // this.element.setAttribute('data-collapsible', 'expandable');
      this.attributeManager.addAttributes({ 'data-collapsible': 'expandable' });
    }

    $(this.element).collapsible({
      accordion
    });
  }

  accordionChanged() {
    this.refresh();
  }
}
