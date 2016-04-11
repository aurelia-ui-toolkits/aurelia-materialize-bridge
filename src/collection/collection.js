import { customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('md-collection')
@inject(Element)
export class MdCollection {
  constructor(element) {
    this.element = element;
  }

  getSelected() {
    let items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    return items.filter(i => i.au['md-collection-selector'].viewModel.isSelected)
      .map(i => i.au['md-collection-selector'].viewModel.item);
  }
}
