import { bindable, bindingMode, containerless, customElement, inject, inlineView } from 'aurelia-framework';

// @bindable({
//   name: 'title',
//   defaultBindingMode: bindingMode.oneWay
// })
@customElement('md-tab')
@containerless()
@inject(Element)
// @inlineView won't work, throwing "title is not defined"
// @inlineView(`
//   <template>
//     <li md-waves class="tab">${title}</li>
//   </template>
// `)
export class MdTab {
  @bindable({
    attribute: 'for-element',
    defaultBindingMode: bindingMode.oneWay
  }) forElement;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) tab;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) title = '';
  constructor (element) {
    this.element = element;
  }
  attached() {
    console.log('[MdTab] attached', 'forElement', this.forElement, this.tab)
  }
  detached() { }
  forElementChanged(newValue) {
    console.log('[MdTab] forElementChanged', 'newValue', newValue)
  }
}
