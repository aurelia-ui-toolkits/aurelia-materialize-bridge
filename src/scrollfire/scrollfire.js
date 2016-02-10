import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getLogger } from 'aurelia-logging';
import { ScrollfirePatch } from './scrollfire-patch';

@customAttribute('md-scrollfire')
@inject(Element, ScrollfirePatch)
export class MdScrollfire {
  @bindable() callback = null;
  @bindable() offset = 0;
  targetId = 0;
  constructor(element, scrollfirePatch) {
    scrollfirePatch.patch();
    this.element = element;
    this.log = getLogger('md-scrollfire');
  }

  attached() {
    let targets = $('[md-scrollfire-target]', this.element);
    if (targets.length > 0) {
      this.log.debug('targets', targets);
      let self = this;
      let options = [];
      targets.each((i, el) => {
        let target = $(el);
        if (!target.attr('id')) {
          target.attr('id', `md-scrollfire-target-${self.targetId++}`);
        }
        options.push({
          selector: '#' + target.attr('id'),
          callback: target.get(0).au['md-scrollfire-target'].viewModel.callback,
          // callback: 'testScrollfire()',
          offset: target.get(0).au['md-scrollfire-target'].viewModel.offset
        });
      });
      if (options.length > 0) {
        this.log.debug('configuring scrollFire with these options:', options);
        Materialize.scrollFire(options);
      }
    }
  }
}
