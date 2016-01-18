import { customAttribute, bindable, bindingMode, inject } from 'aurelia-framework';
import { fireMaterializeEvent } from '../common/events'

@customAttribute('md-tabs')
@inject(Element)
export class MdTabs {
  constructor (element) {
    this.element = element;
  }
  attached() {
    $(this.element).tabs();
    // $('li a', this.element).on('click', this.fireTabSelectedEvent);
    this.element.querySelectorAll('li a').forEach(a => {
      a.addEventListener('click', this.fireTabSelectedEvent);
    });
  }
  detached() {
    // no destroy handler in tabs
    this.element.querySelectorAll('li a').forEach(a => {
      a.removeEventListener('click', this.fireTabSelectedEvent);
    });
  }
  fireTabSelectedEvent() {
    let href = $('li a').attr('href');
    fireMaterializeEvent(this.element, 'tabSelected', href);
  }
}
