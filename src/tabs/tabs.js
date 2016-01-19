import { customAttribute, bindable, bindingMode, inject } from 'aurelia-framework';
import { fireMaterializeEvent } from '../common/events';

@customAttribute('md-tabs')
@inject(Element)
export class MdTabs {
  constructor (element) {
    this.element = element;
  }
  attached() {
    $(this.element).tabs();
    // $('li a', this.element).on('click', this.fireTabSelectedEvent);
    let children = this.element.querySelectorAll('li a');
    [].forEach.call(children, a => {
      a.addEventListener('click', this.fireTabSelectedEvent.bind(this));
    });
  }
  detached() {
    // no destroy handler in tabs
    let children = this.element.querySelectorAll('li a');
    [].forEach.call(children, a => {
      a.removeEventListener('click', this.fireTabSelectedEvent.bind(this));
    });
  }
  fireTabSelectedEvent(e) {
    let href = $(e.target).attr('href');
    fireMaterializeEvent(this.element, 'tabSelected', href);
  }
}
