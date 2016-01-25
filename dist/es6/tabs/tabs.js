import { customAttribute, inject } from 'aurelia-framework';
import { fireMaterializeEvent } from '../common/events';
import { CssClassSetter } from '../common/cssClassSetter';

@customAttribute('md-tabs')
@inject(Element)
export class MdTabs {
  constructor(element) {
    this.element = element;
    this.classSetter = new CssClassSetter(this.element);
    this.tabClassSetters = [];
  }
  attached() {
    this.classSetter.addClasses('tabs');

    let children = this.element.querySelectorAll('li');
    [].forEach.call(children, child => {
      let setter = new CssClassSetter(child);
      setter.addClasses('tab');
      this.tabClassSetters.push(setter);
    });

    $(this.element).tabs();

    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.addEventListener('click', this.fireTabSelectedEvent.bind(this));
    });
  }
  detached() {
    this.classSetter.removeClasses('tabs');

    // no destroy handler in tabs

    this.tabClassSetters.forEach(setter => {
      setter.removeClasses('tab');
    });
    this.tabClassSetters = [];
    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.removeEventListener('click', this.fireTabSelectedEvent.bind(this));
    });
  }
  fireTabSelectedEvent(e) {
    let href = $(e.target).attr('href');
    fireMaterializeEvent(this.element, 'selected', href);
  }
}
