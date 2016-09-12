import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getLogger } from 'aurelia-logging';

@customAttribute('md-staggered-list')
@inject(Element)
export class MdStaggeredList {
  @bindable() ref;

  constructor(element) {
    this.element = element;
    this.staggerList = this.staggerList.bind(this);
    this.log = getLogger('md-staggered-list');
  }

  attached() {
    this.element.addEventListener('click', this.staggerList);
    this.ensureOpacity();
  }

  detached() {
    this.element.removeEventListener('click', this.staggerList);
  }

  staggerList() {
    Materialize.showStaggeredList($(this.ref));
  }

  ensureOpacity() {
    let items = this.ref.querySelectorAll('li');
    [].forEach.call(items, item => {
      let opacity = window.getComputedStyle(item).opacity;
      if (opacity !== 0) {
        item.style.opacity = 0;
      }
    });
  }
}
