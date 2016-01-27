import { bindable, bindingMode, containerless, customElement, inject } from 'aurelia-framework';

/*
  implementation example

  <div class="row">
      <div class="col s12 m8">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Code Preview</span>
            <div class="row">
              <md-tabs tabs.bind="tabs">
                <md-tab title="Html" for-element="#html"></md-tab>
                <md-tab title="Css (custom color)" for-element="#css"></md-tab>
              </md-tabs>

              <div id="html" class="z-depth-1">
                <au-code language="markup" url="samples/waves/colors-sample.html"></au-code>
              </div>
              <div id="css" class="z-depth-1">
                <au-code language="css" url="samples/waves/colors-sample.css"></au-code>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
*/

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
  constructor(element) {
    this.element = element;
  }
  attached() {
    // console.log('[MdTab] attached', 'forElement', this.forElement, this.tab)
  }
  detached() { }
  forElementChanged(newValue) {
    // console.log('[MdTab] forElementChanged', 'newValue', newValue)
  }
}
