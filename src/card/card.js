import { bindable, bindingMode, customElement, inject /*, inlineView*/ } from 'aurelia-framework';

@customElement('md-card')
@inject(Element)
// @inlineView(`
//   <template>
//   <div class="card">
//     <div class="card-content">
//       <span class="card-title">${title}</span>
//       <div>
//       <content></content>
//       </div>
//     </div>
//   </div>
//   </template>
// `)
export class MdCard {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) title;

  constructor(element) {

  }
}
