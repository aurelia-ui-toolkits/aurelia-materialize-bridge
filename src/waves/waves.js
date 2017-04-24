import { bindable, customAttribute } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { ConfigBuilder } from '../config-builder';

@customAttribute('md-waves')
@inject(Element, ConfigBuilder)
export class MdWaves {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) block = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) circle = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) color;

  constructor(element, configBuilder) {
    this.element = element;
    this.configBuilder = configBuilder;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    let classes = ['waves-effect'];
    if (getBooleanFromAttributeValue(this.block)) {
      classes.push('waves-block');
    }
    if (getBooleanFromAttributeValue(this.circle)) {
      classes.push('waves-circle');
    }
    if (this.color) {
      classes.push(`waves-${this.color}`);
    }

    this.attributeManager.addClasses(classes);
    if (!this.configBuilder.noWavesAttach) {
      Waves.attach(this.element);
    }
  }

  detached() {
    let classes = ['waves-effect', 'waves-block'];
    if (this.color) {
      classes.push(`waves-${this.color}`);
    }

    this.attributeManager.removeClasses(classes);
  }
}
