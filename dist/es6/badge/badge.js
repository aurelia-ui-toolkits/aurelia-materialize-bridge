import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customAttribute('md-badge')
@inject(Element)
export class MdBadge {
  @bindable() isNew = false;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    let classes = [
      'badge'
    ];
    if (getBooleanFromAttributeValue(this.isNew)) {
      classes.push('new');
    }
    this.attributeManager.addClasses(classes);
  }

  detached() {
    this.attributeManager.removeClasses(['badge', 'new']);
  }
}
