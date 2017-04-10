import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getLogger } from 'aurelia-logging';

@customElement('md-tap-target')
@inject(Element)
export class MdTapTarget {
  static controlId = 0;
  @bindable() mdRef = null;

  constructor(element) {
    this.element = element;
    this.log = getLogger('md-tap-target');
  }

  bind() {
    if (!this.mdRef) {
      throw new Error('md-tap-target needs a referenced element');
    } else {
      let id = this.mdRef.getAttribute('id');
      if (!id) {
        id = `md-tap-target-${MdTapTarget.controlId++}`;
        this.mdRef.setAttribute('id', id);
      }
      this.element.setAttribute('data-activates', id);
    }
  }

  open() {
    $(this.element).tapTarget('open');
  }

  close() {
    $(this.element).tapTarget('close');
  }
}
