import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customAttribute('md-tooltip')
@inject(Element)
export class MdTooltip {
  @bindable() position = 'bottom';
  @bindable() delay = 50;
  @bindable() html = false;
  @bindable() text = '';

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  bind() {
    this.html = getBooleanFromAttributeValue(this.html);
  }

  attached() {
    this.attributeManager.addClasses('tooltipped');
    this.attributeManager.addAttributes({ 'data-position': this.position, 'data-tooltip': this.text });
    this.initTooltip();
  }

  detached() {
    $(this.element).tooltip('remove');
    this.attributeManager.removeClasses('tooltipped');
    this.attributeManager.removeAttributes(['data-position', 'data-tooltip']);
  }

  textChanged() {
    this.attributeManager.addAttributes({ 'data-tooltip': this.text });
    this.initTooltip();
  }

  initTooltip() {
    $(this.element).tooltip('remove');
    $(this.element).tooltip({
      delay: parseInt(this.delay, 10),
      html: this.html
    });
  }
}
