import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import 'materialize';

@customAttribute('md-box')
@inject(Element)
export class MdBox {
  @bindable({
    defaultBindingMode: bindingMode.oneTome
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
    // FIXME: thwrows "Uncaught TypeError: Cannot read property 'css' of undefined", but so does the original
    $(this.element).materialbox();
  }

  detached() {
    this.attributeManager.removeAttributes('data-caption');
    this.attributeManager.removeClasses('materialboxed');
  }
}
