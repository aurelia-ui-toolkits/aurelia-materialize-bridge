import { customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';

// taken from: https://github.com/heruan/aurelia-breadcrumbs

@customElement('md-breadcrumbs')
@inject(Element, Router)
export class MdBreadcrumbs {
  constructor(element, router) {
    this.element = element;
    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  }

  navigate(navigationInstruction) {
    // this.router.navigateToRoute(navigationInstruction.config.name);
  }
}
