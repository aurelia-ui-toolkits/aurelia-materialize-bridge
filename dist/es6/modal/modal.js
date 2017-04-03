import { getLogger } from 'aurelia-logging';
import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { AttributeManager } from '../common/attributeManager';
import { fireMaterializeEvent } from '../common/events';

@customAttribute('md-modal')
@inject(Element)
export class MdModal {
  @bindable() dismissible = true;
  @bindable() opacity = 0.5; // Opacity of modal background
  @bindable() inDuration = 300; // Transition in duration
  @bindable() outDuration = 200; // Transition out duration
  @bindable() startingTop = '4%'; // Starting top style attribute
  @bindable() endingTop = '10%'; // Ending top style attribute

  constructor(element) {
    this.element = element;
    this.log = getLogger('md-modal');
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  attached() {
    const options = {
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible),
      endingTop: this.endingTop,
      inDuration: parseInt(this.inDuration, 10),
      opacity: parseFloat(this.opacity),
      outDuration: parseInt(this.outDuration, 10),
      ready: this.onReady,
      startingTop: this.startingTop
    };
    this.log.debug('modal options: ', options);
    this.attributeManager.addClasses('modal');
    $(this.element).modal(options);
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
