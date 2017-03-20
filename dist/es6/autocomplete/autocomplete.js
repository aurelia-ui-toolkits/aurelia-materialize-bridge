import {bindable, customAttribute} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {fireEvent} from '../common/events';

@customAttribute('md-autocomplete')
@inject(Element)
export class MdAutoComplete {
  input = null;
  @bindable() values = {};

  constructor(element) {
    this.element = element;
  }

  attached() {
    if (this.element.tagName.toLowerCase() === 'input') {
      this.input = this.element;
    } else if (this.element.tagName.toLowerCase() === 'md-input') {
      this.input = this.element.au.controller.viewModel.input;
    } else {
      throw new Error('md-autocomplete must be attached to either an input or md-input element');
    }
    this.refresh();
  }

  detached() {
    // remove .autocomplete-content children
    $(this.input).siblings('.autocomplete-content').off('click');
    $(this.input).siblings('.autocomplete-content').remove();
  }

  refresh() {
    this.detached();
    $(this.input).autocomplete({
      data: this.values
    });
    // $('.autocomplete-content', this.element).on('click', () => {
    //   fireEvent(this.input, 'change');
    // });
    $(this.input).siblings('.autocomplete-content').on('click', () => {
      fireEvent(this.input, 'change');
    });
  }

  valuesChanged(newValue) {
    this.refresh();
  }
}
