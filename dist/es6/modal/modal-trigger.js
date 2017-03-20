import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { AttributeManager } from '../common/attributeManager';
import { fireMaterializeEvent } from '../common/events';

@customAttribute('md-modal-trigger')
@inject(Element)
export class MdModalTrigger {
  @bindable() dismissible = true;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
  }

  attached() {
    this.attributeManager.addClasses('modal-trigger');
    $(this.element).leanModal({
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible)
    });
  }

  detached() {
    this.attributeManager.removeClasses('modal-trigger');
  }

  onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  }
}
