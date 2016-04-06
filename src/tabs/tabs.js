import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { TaskQueue } from 'aurelia-task-queue';
import { fireMaterializeEvent } from '../common/events';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('md-tabs')
@inject(Element, TaskQueue)
export class MdTabs {
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

    // this.taskQueue.queueTask(() => {
    $(this.element).tabs();
    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.addEventListener('click', this.fireTabSelectedEvent);
    });
    // });
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

  fireTabSelectedEvent(e) {
    // fix Materialize tab indicator (see: https://github.com/Dogfalo/materialize/pull/2809)
    // happens only when the indicator animation is finished
    // Waves animation duration: 300ms, delay: 90ms
    // window.setTimeout(() => {
    //   let indicatorRight = $('.indicator', this.element).css('right');
    //   if (indicatorRight.indexOf('-') === 0) {
    //     $('.indicator', this.element).css('right', 0);
    //   }
    // }, 310);
    let href = e.target.getAttribute('href');
    fireMaterializeEvent(this.element, 'selected', href);
  }

  selectTab(id) {
    $(this.element).tabs('select_tab', id);
    this.fireTabSelectedEvent({
      target: { getAttribute: () => `#${id}` }
    });
  }

  // FIXME: probably bad
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
