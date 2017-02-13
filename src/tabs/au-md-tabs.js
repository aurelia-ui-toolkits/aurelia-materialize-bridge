import {inject} from 'aurelia-dependency-injection';
import {children} from 'aurelia-templating';
// import {DOM} from 'aurelia-pal';
import {getLogger} from 'aurelia-logging';
import {TaskQueue} from 'aurelia-task-queue';

@inject(Element, TaskQueue)
export class AuMdTabs {
  @children('au-md-tab') tabs = [];
  activeTab;

  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.log = getLogger('au-md-tabs');
  }

  attached() {
    this.log.debug('[attached] tabs:', this.tabs);
    this.setActive(this.tabs[0]);
  }

  animateIndicator(previousTab) {
    /*eslint new-cap:0*/
    const index = this.getTabIndex(this.activeTab);
    const previousIndex = this.getTabIndex(previousTab);
    // const $indicator = $(this.indicator);
    const indicatorPosition = this.calculateIndicator();
    const transition = 300;

    if ((index - previousIndex) >= 0) {
      // $indicator.velocity({'right': indicatorPosition.right }, { duration: transition, queue: false, easing: 'easeOutQuad'});
      Vel(this.indicator, {'right': indicatorPosition.right }, { duration: transition, queue: false, easing: 'easeOutQuad'});
      // $indicator.velocity({'left': indicatorPosition.left }, {duration: transition, queue: false, easing: 'easeOutQuad', delay: 90});
      Vel(this.indicator, {'left': indicatorPosition.left }, {duration: transition, queue: false, easing: 'easeOutQuad', delay: 90});
    } else {
      // $indicator.velocity({'left': indicatorPosition.left }, { duration: transition, queue: false, easing: 'easeOutQuad'});
      Vel(this.indicator, {'left': indicatorPosition.left }, { duration: transition, queue: false, easing: 'easeOutQuad'});
      // $indicator.velocity({'right': indicatorPosition.right }, {duration: transition, queue: false, easing: 'easeOutQuad', delay: 90});
      Vel(this.indicator, {'right': indicatorPosition.right }, {duration: transition, queue: false, easing: 'easeOutQuad', delay: 90});
    }
  }

  calculateIndicator() {
    const tabsWidth = $(this.tabBar).width();
    // const tabWith = Math.max(tabsWidth, this.tabBar.scrollWidth / this.tabs.length);
    // const tabBarChildren = this.tabBar.querySelectorAll('a.au-md-tab');
    const tab = this.tabBar.querySelector('.au-md-tab.active');
    const tabLeft = $(tab).position().left;
    const left = tabLeft + $(this.tabBar).scrollLeft();
    const right = tabsWidth - tabLeft - $(tab).outerWidth() - $(this.tabBar).scrollLeft();

    return { left, right };
  }

  getTabIndex(tab) {
    let index = -1;
    this.tabs.forEach((t, i) => {
      if (t === tab) {
        index = i;
      }
    });
    return index;
  }

  setActive(tab) {
    this.log.debug('[setActive]', tab);
    let previousTab = null;
    if (this.activeTab) {
      previousTab = this.activeTab;
      this.activeTab.isActive = false;
    }
    this.activeTab = tab;
    this.activeTab.isActive = true;

    this.taskQueue.queueTask(() => {
      this.animateIndicator(previousTab);
      // const indicatorPosition = this.calculateIndicator();
      // this.indicator.style.left = indicatorPosition.left;
      // this.indicator.style.right = indicatorPosition.right;
      // $(this.indicator).css('left', indicatorPosition.left);
      // $(this.indicator).css('right', indicatorPosition.right);
      // this.log.debug('[setActive] - indicatorPosition', indicatorPosition);
    });
  }
}
