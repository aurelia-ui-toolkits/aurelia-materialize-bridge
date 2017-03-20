import { bindable, customAttribute } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('md-box')
@inject(Element)
export class MdBox {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) caption;
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.attributeManager.addClasses('materialboxed');
    if (this.caption) {
      this.attributeManager.addAttributes({ 'data-caption': this.caption });
    }
    // FIXME:0 throws "Uncaught TypeError: Cannot read property 'css' of undefined", but so does the original
    $(this.element).materialbox();
  }

  detached() {
    this.attributeManager.removeAttributes('data-caption');
    this.attributeManager.removeClasses('materialboxed');
  }
}
