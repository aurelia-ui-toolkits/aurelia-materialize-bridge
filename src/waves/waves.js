import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { CssClassSetter } from '../common/cssClassSetter';
import 'materialize/js/waves';

@customAttribute('md-waves')
@bindable({
  name: 'color',
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element/*, CssClassSetter*/)
export class MdWaves {
  constructor(element/*, classSetter*/) {
    this.element = element;
    this.classSetter = new CssClassSetter(this.element);
  }

  attached() {
    let classes = ['waves-effect'];
    if (this.color) {
      classes.push(`waves-${this.color}`);
    }

    this.classSetter.addClasses(classes);
    Waves.attach(this.element);
  }

  detached() {
    let classes = ['waves-effect'];
    if (this.color) {
      classes.push(`waves-${this.color}`);
    }

    this.classSetter.removeClasses(classes);
  }
}
