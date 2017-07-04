import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('md-collapsible')
@bindable({ name: 'accordion', defaultValue: false })
@bindable({ name: 'popout', defaultValue: false })
@bindable({ name: 'onOpen' })
@bindable({ name: 'onClose' })
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
    $(this.element).collapsible('destroy');
  }

  refresh() {
    let accordion = getBooleanFromAttributeValue(this.accordion);
    let dataCollapsibleAttributeValue = accordion ? 'accordion' : 'expandable';

    this.attributeManager.addAttributes({ 'data-collapsible': dataCollapsibleAttributeValue });

    $(this.element).collapsible({
      accordion,
      onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
      onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
    });
  }

  accordionChanged() {
    this.refresh();
  }

  buildCollapsibleOpenCloseCallbackHandler(handler) {
    return typeof(handler) === 'function' ?
     (targetElementJquery) => {
       let targetElement = targetElementJquery[0];

       handler(targetElement);
     } : null;
  }

  open(index = 0) {
    $(this.element).collapsible('open', index);
  }

  close(index = 0) {
    $(this.element).collapsible('close', index);
  }
}
