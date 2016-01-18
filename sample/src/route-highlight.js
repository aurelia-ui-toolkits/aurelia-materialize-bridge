import {inject, bindable, customAttribute} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Element, Router, EventAggregator)
@customAttribute('route-highlight')
export class RouteHighlight {

    @bindable routes;

    constructor(element, router, eventAggregator) {
      this.element = element;
      this.router = router;
      this.ea = eventAggregator;

      this.subscription = this.ea.subscribe('router:navigation:complete', () => this.refresh());
    }

    routesChanged() {
      this.refresh();
    }

    refresh() {
      let instruction = this.router.currentInstruction;
      let isActive = false;

      if (instruction) {
        let activeRoute = instruction.config.name;

        if (Array.isArray(this.routes)) {
          isActive = this.routes.includes(activeRoute);
        } else {
          isActive = this.routes === activeRoute;
        }
      }

      if (isActive) {
        this.highlight();
      } else {
        this.unhighlight();
      }
    }

    highlight() {
      // jQuery(this.element).addClass('active');
      this.element.classList.add('active');
    }

    unhighlight() {
      // jQuery(this.element).removeClass('active');
      this.element.classList.remove('active');
    }

    detached() {
      if (this.subscription) {
        this.subscription();
      }
    }
}
