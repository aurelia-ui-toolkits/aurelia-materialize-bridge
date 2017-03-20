import { bindable, customAttribute } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customAttribute('md-dropdown')
@inject(Element)
export class MdDropdown {
  static elementId = 0;

  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) activates = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) ref = null;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) alignment = 'left';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) belowOrigin = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) constrainWidth = true;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) gutter = 0;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) hover = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTitle;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) inDuration = 300;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) outDuration = 225;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.handleActivateElement();
    this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

    this.attributeManager.addClasses('dropdown-button');
    this.contentAttributeManager.addClasses('dropdown-content');
    // this.attributeManager.addAttributes({ 'data-activates': this.activates });

    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      constrainWidth: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  }

  detached() {
    this.attributeManager.removeAttributes('data-activates');
    this.attributeManager.removeClasses('dropdown-button');
    this.contentAttributeManager.removeClasses('dropdown-content');
  }

  handleActivateElement() {
    if (this.ref) {
      let id = this.ref.getAttribute('id');
      if (!id) {
        id = `md-dropdown-${MdDropdown.elementId++}`;
        this.ref.setAttribute('id', id);
        this.activates = id;
      }
      this.id = MdDropdown.elementId++;
    }
    this.attributeManager.addAttributes({ 'data-activates': this.activates });
  }
}
