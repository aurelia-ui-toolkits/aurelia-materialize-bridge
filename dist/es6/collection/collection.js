import { customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('md-collection')
@inject(Element)
export class MdCollection {
  constructor(element) {
    this.element = element;
  }

  attached() {
    let header = this.element.querySelector('md-collection-header');
    if (header) {
      this.anchor.classList.add('with-header');
    }
  }

  getSelected() {
    let items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    return items.filter(i => i.au['md-collection-selector'].viewModel.isSelected)
      .map(i => i.au['md-collection-selector'].viewModel.item);
  }

  clearSelection() {
    let items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    items.forEach(i => i.au['md-collection-selector'].viewModel.isSelected = false);
  }

  selectAll() {
    let items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    items.forEach(i => {
      let vm = i.au['md-collection-selector'].viewModel;
      vm.isSelected = !vm.mdDisabled;
    });
  }
}
