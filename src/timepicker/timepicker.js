import {bindable, customAttribute} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import {getBooleanFromAttributeValue} from '../common/attributes';
// import {fireEvent} from '../common/events';

// Materialize doesn't present the full api.
// See here for full api: https://github.com/weareoutman/clockpicker

@inject(Element)
@customAttribute('md-timepicker')
export class MdTimePicker {
  @bindable() twelveHour = false;
  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  constructor(element) {
    this.element = element;
    this.updateFromElement = this.updateFromElement.bind(this);
  }

  bind() {
    this.twelveHour = getBooleanFromAttributeValue(this.twelveHour);
  }

  attached() {
    let options = {
      twelvehour: this.twelveHour
    };
    $(this.element).pickatime(options);
    this.element.value = this.value;
    $(this.element).on('change', this.updateFromElement);
  }

  detached() {
    $(this.element).off('change', this.updateFromElement);
    $(this.element).pickatime('remove');
  }

  updateFromElement() {
    this.value = this.element.value;
  }

  valueChanged(newValue) {
    this.element.value = newValue;
  }
}
