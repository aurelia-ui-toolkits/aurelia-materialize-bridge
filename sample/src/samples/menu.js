import { bindable } from 'aurelia-templating';
import { EventAggregator } from 'aurelia-event-aggregator';
import { inject } from 'aurelia-dependency-injection';
import { ComponentService } from '../shared/component-service';
import { getLogger } from 'aurelia-logging';
import { TaskQueue } from 'aurelia-framework';
import { MdSidenavService } from 'aurelia-materialize-bridge/sidenav/sidenav-service';

@inject(Element, ComponentService, EventAggregator, TaskQueue, MdSidenavService)
export class Menu {
  @bindable() activeItem;
  subscriptions = [];

  constructor(element, componentService, eventAggregator, taskQueue, sidenavService) {
    this.categories = componentService.getIterableComponents(true);
    this.eventAggregator = eventAggregator;
    this.element = element;
    this.taskQueue = taskQueue;
    this.subscriptions.push(eventAggregator.subscribe('router:navigation:complete', e => this.routeChanged(e)));
    this.log = getLogger('menu');
    this.sidenavService = sidenavService;
  }

  tryCollapseSidenav() {
    this.sideNav.mdFixed = !this.sideNav.mdFixed;
  }

  setActive(ctrl) {
    this.activeItem = ctrl.link;
    return true;
  }

  activeItemChanged(newValue, oldValue) {
    this.taskQueue.queueTask(() => {
      this.log.debug('activeItemChanged', newValue, oldValue);
      // find parent header and expand it
      let header = $('li.active', this.element).parents('.collapsible-body').siblings('.collapsible-header');
      if (header.length > 0) {
        header.addClass('active');
        header.parents('[md-collapsible]').get(0).au['md-collapsible'].viewModel.refresh();
      } else {
        this.log.warn('activeItemChanged', 'header not found');
      }
    });
  }

  routeChanged(e) {
    this.log.debug('routeChanged', e);
    let link = `#${e.instruction.fragment}`;
    this.activeItem = link.split('/').splice(0, 3).join('/');
  }

  detached() {
    this.subscriptions.forEach(i => i.dispose());
  }
}
