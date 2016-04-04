import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { fireMaterializeEvent } from '../common/events';

@customAttribute('md-modal-trigger')
@inject(Element)
export class MdModalTrigger {
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
  }

  attached() {
    this.attributeManager.addClasses('modal-trigger');
    $(this.element).leanModal({
      complete: this.onComplete
    });
  }

  detached() {
    this.attributeManager.removeClasses('modal-trigger');
  }

  onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  }
}
