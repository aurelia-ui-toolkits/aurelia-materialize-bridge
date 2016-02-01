import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import 'materialize';

@customAttribute('md-staggered-list')
@inject(Element)
export class MdStaggeredList {
  @bindable() ref;

  constructor(element) {
    this.element = element;
    this.staggerList = this.staggerList.bind(this);
  }

  attached() {
    this.element.addEventListener('click', this.staggerList);
  }

  detached() {
    this.element.removeEventListener('click', this.staggerList);
  }

  staggerList() {
    Materialize.showStaggeredList(this.ref);
  }
}
