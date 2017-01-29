import {bindable, customAttribute} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import {getLogger} from 'aurelia-logging';

import {fireEvent} from '../common/events';

@customAttribute('md-chips')
@inject(Element)
export class MdChips {
  @bindable() autocompleteData = {};
  @bindable({ defaultBindingMode: bindingMode.twoWay }) data = [];
  @bindable() placeholder = '';
  @bindable() secondaryPlaceholder = '';

  constructor(element) {
    this.element = element;
    this.log = getLogger('md-chips');

    this.onChipAdd = this.onChipAdd.bind(this);
    this.onChipDelete = this.onChipDelete.bind(this);
    this.onChipSelect = this.onChipSelect.bind(this);
  }

  attached() {
    let options = {
      autocompleteData: this.autocompleteData,
      data: this.data,
      placeholder: this.placeholder,
      secondaryPlaceholder: this.secondaryPlaceholder
    };
    $(this.element).material_chip(options);
    $(this.element).on('chip.add', this.onChipAdd);
    $(this.element).on('chip.delete', this.onChipDelete);
    $(this.element).on('chip.select', this.onChipSelect);
  }

  detached() {
    //
  }

  onChipAdd(e, chip) {
    this.data = $(this.element).material_chip('data');
    fireEvent(this.element, 'change', { operation: 'add', target: chip, data: this.data });
  }
  onChipDelete(e, chip) {
    this.data = $(this.element).material_chip('data');
    fireEvent(this.element, 'change', { operation: 'delete', target: chip, data: this.data });
  }
  onChipSelect(e, chip) {
    fireEvent(this.element, 'selected', { target: chip });
  }
}
