import {bindable, children, customElement} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import {TaskQueue} from 'aurelia-task-queue';
import {getBooleanFromAttributeValue} from '../common/attributes';

@customElement('md-carousel')
@inject(Element, TaskQueue)
export class MdCarousel {
  @bindable() mdIndicators = true;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdSlider = false;
  @children('md-carousel-item') items = [];

  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdSlider)) {
      this.element.classList.add('carousel-slider');
    }

    // workaround for: https://github.com/Dogfalo/materialize/issues/2741
    // if (getBooleanFromAttributeValue(this.mdSlider)) {
    //   $(this.element).carousel({full_width: true});
    // } else {
    //   $(this.element).carousel();
    // }
    this.refresh();
  }

  itemsChanged(newValue) {
    this.refresh();
  }

  refresh() {
    if (this.items.length > 0) {
      let options = {
        full_width: getBooleanFromAttributeValue(this.mdSlider),
        fullWidth: getBooleanFromAttributeValue(this.mdSlider),
        indicators: this.mdIndicators
      };

      this.taskQueue.queueTask(() => {
        $(this.element).carousel(options);
      });
    }
  }
}
