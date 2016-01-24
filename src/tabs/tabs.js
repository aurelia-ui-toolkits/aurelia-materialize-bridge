import { customAttribute, bindable, bindingMode, inject } from 'aurelia-framework';
import { fireEvent, fireMaterializeEvent } from '../common/events';
import { CssClassSetter } from '../common/cssClassSetter';

@customAttribute('md-tabs')
@inject(Element)
export class MdTabs {
  constructor (element) {
    this.element = element;
    this.classSetter = new CssClassSetter(this.element);
    this.tabClassSetters = [];
  }
  attached() {
    this.classSetter.addClasses('tabs');
    $(this.element).tabs();

    let children = this.element.querySelectorAll('li');
    [].forEach.call(children, child => {
      let setter = new CssClassSetter(child);
      setter.addClasses('tab');
      tabClassSetters.push(setter);
    });

    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.addEventListener('click', this.fireTabSelectedEvent.bind(this));
    });
  }
  detached() {
    this.classSetter.removeClasses('tabs');

    // no destroy handler in tabs

    tabClassSetters.foreach(setter => {
      setter.removeClasses('tab');
    });
    tabClassSetters = [];
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
