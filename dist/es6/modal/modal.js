import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { AttributeManager } from '../common/attributeManager';
import { fireMaterializeEvent } from '../common/events';

@customAttribute('md-modal')
@inject(Element)
export class MdModal {
  @bindable() dismissible = true;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  attached() {
    this.attributeManager.addClasses('modal');
    $(this.element).modal({
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible),
      ready: this.onReady
    });
  }

  detached() {
    this.attributeManager.removeClasses('modal');
  }

  onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  }

  onReady(modal, trigger) {
    fireMaterializeEvent(this.element, 'modal-ready', { modal, trigger });
  }

  open() {
    $(this.element).modal('open');
  }

  close() {
    $(this.element).modal('close');
  }
}
