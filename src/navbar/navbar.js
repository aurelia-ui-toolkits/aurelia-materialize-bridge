import { bindable, customElement, inject } from 'aurelia-framework';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { CssClassSetter } from '../common/cssClassSetter';

@customElement('md-navbar')
@inject(Element)
export class MdNavbar {
  @bindable() fixed;
  fixedClassSetter;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.fixedClassSetter = new CssClassSetter(this.fixedAnchor);
    if (getBooleanFromAttributeValue(this.fixed)) {
      // this.fixedAnchor.classList.add('navbar-fixed');
      this.fixedClassSetter.addClasses('navbar-fixed');
    }
  }

  detached() {
    if (getBooleanFromAttributeValue(this.fixed)) {
      // this.fixedAnchor.classList.remove('navbar-fixed');
      this.fixedClassSetter.removeClasses('navbar-fixed');
    }
  }
}
