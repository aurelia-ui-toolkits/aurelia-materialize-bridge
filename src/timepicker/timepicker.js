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
  }

  bind() {
    this.twelveHour = getBooleanFromAttributeValue(this.twelveHour);
  }

  attached() {
    let options = {
      afterDone: this.afterDone.bind(this),
      twelvehour: this.twelveHour
    };
    $(this.element).pickatime(options);
    this.element.value = this.value;
  }

  detached() {
    $(this.element).pickatime('remove');
  }

  afterDone() {
    this.value = this.element.value;
  }

  valueChanged(newValue) {
    this.element.value = newValue;
  }
}
