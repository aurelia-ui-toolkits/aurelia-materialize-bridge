import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { TaskQueue } from 'aurelia-task-queue';
import { fireMaterializeEvent } from '../common/events';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('md-tabs')
@inject(Element, TaskQueue)
export class MdTabs {
  @bindable() fixed = false;
  @bindable() onShow = null;
  @bindable() transparent = false;

  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
    this.attributeManager = new AttributeManager(this.element);
    this.tabAttributeManagers = [];
  }

  attached() {
    this.attributeManager.addClasses('tabs');

    let children = this.element.querySelectorAll('li');
    [].forEach.call(children, child => {
      let setter = new AttributeManager(child);
      setter.addClasses(['tab', 'primary-text']);
      this.tabAttributeManagers.push(setter);
    });

    const self = this;
    $(this.element).tabs({
      onShow: function(jQueryElement) {
        if (self.onShow) {
          self.onShow({ element: jQueryElement});
        }
      }
    });
    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.addEventListener('click', this.fireTabSelectedEvent);
    });
  }

  detached() {
    this.attributeManager.removeClasses('tabs');

    // no destroy handler in tabs

    this.tabAttributeManagers.forEach(setter => {
      setter.removeClasses('tab');
    });
    this.tabAttributeManagers = [];
    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.removeEventListener('click', this.fireTabSelectedEvent);
    });
  }

  fixedChanged(newValue) {
    if (newValue) {
      this.attributeManager.addClasses('tabs-fixed-width');
    } else {
      this.attributeManager.removeClasses('tabs-fixed-width');
    }
  }

  transparentChanged(newValue) {
    if (newValue) {
      this.attributeManager.addClasses('tabs-transparent');
    } else {
      this.attributeManager.removeClasses('tabs-transparent');
    }
  }

  fireTabSelectedEvent(e) {
    let href = e.target.getAttribute('href');
    fireMaterializeEvent(this.element, 'selected', href);
  }

  selectTab(id) {
    $(this.element).tabs('select_tab', id);
    this.fireTabSelectedEvent({
      target: { getAttribute: () => `#${id}` }
    });
  }

  // FIXME: probably bad - binding this introduces dirty checking
  get selectedTab() {
    let children = this.element.querySelectorAll('li.tab a');
    let index = -1;
    let href = null;
    [].forEach.call(children, (a, i) => {
      if (a.classList.contains('active')) {
        index = i;
        href = a.href;
        return;
      }
    });
    return { href, index };
  }
}
