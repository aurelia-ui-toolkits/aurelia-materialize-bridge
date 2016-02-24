import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { fireEvent } from '../common/events';

@customElement('md-file')
export class MdFileInput {
  @bindable() mdCaption = 'File';
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue;

  _suspendUpdate = false;

  constructor() {
    this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
  }

  attached() {
    $(this.filePath).on('change', this.handleChangeFromNativeInput);
  }

  detached() {
    $(this.element).off('change', this.handleChangeFromNativeInput);
  }

  handleChangeFromNativeInput() {
    if (!this._suspendUpdate) {
      this._suspendUpdate = true;
      fireEvent(this.filePath, 'change');
      this._suspendUpdate = false;
    }
  }
}
