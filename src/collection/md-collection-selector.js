import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { observable } from 'aurelia-binding';
import { fireMaterializeEvent } from '../common/events';

@customElement('md-collection-selector')
@inject(Element)
export class MdlListSelector {
  @bindable() item;
  @observable() isSelected = false;

  constructor(element) {
    this.element = element;
  }

  isSelectedChanged(newValue) {
    fireMaterializeEvent(this.element, 'selection-changed', { item: this.item, isSelected: this.isSelected });
  }
}
