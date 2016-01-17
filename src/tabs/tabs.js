import { bindable, bindingMode, customElement, inject, inlineView } from 'aurelia-framework';

@bindable({
  name: 'tabs',
  defaultBindingMode: bindingMode.oneWay
})
@customElement('md-tabs')
@inject(Element)
@inlineView(`
  <template>
    <ul class="tabs">
      <content></content>
    </ul>
  </template>
`)
export class MdTabs {
  constructor (element) {
    this.element = element;
  }
  attached() {
    console.log('[MdTabs]', 'attached', this.tabs)
    $(this.element).tabs();
  }
  detached() {
    // no destroy handler in tabs :-(
  }
}
