import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import 'materialize/js/waves';

@customAttribute('md-waves')
@inject(Element)
export class MdWaves {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) color;
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    let classes = ['waves-effect'];
    if (this.color) {
      classes.push(`waves-${this.color}`);
    }

    this.attributeManager.addClasses(classes);
    Waves.attach(this.element);
  }

  detached() {
    let classes = ['waves-effect'];
    if (this.color) {
      classes.push(`waves-${this.color}`);
    }

    this.attributeManager.removeClasses(classes);
  }
}
