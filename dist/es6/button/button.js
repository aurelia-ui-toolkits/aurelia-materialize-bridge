import { bindable, customAttribute, inject } from 'aurelia-framework';
import { CssClassSetter } from '../common/cssClassSetter';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customAttribute('md-button')
@inject(Element)
export class MdButton {
  @bindable() disabled = false;
  @bindable() flat = false;
  @bindable() large = false;

  constructor(element) {
    this.classSetter = new CssClassSetter(element);
  }

  attached() {
    let classes = [];

    if (getBooleanFromAttributeValue(this.flat)) {
      classes.push('btn-flat');
    }
    if (getBooleanFromAttributeValue(this.large)) {
      classes.push('btn-large');
    }

    if (classes.length === 0) {
      classes.push('btn');
    }

    if (getBooleanFromAttributeValue(this.disabled)) {
      classes.push('disabled');
    }

    if (!getBooleanFromAttributeValue(this.flat)) {
      classes.push('accent');
    }
    this.classSetter.addClasses(classes);
  }

  detached() {
    this.classSetter.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled']);
  }

  disabledChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.classSetter.addClasses('disabled');
    } else {
      this.classSetter.removeClasses('disabled');
    }
  }
}
