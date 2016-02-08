import { inject } from 'aurelia-dependency-injection';
import { ComponentService } from '../shared/component-service';

@inject(ComponentService)
export class Menu {
  activeItem;
  constructor(componentService) {
    this.categories = componentService.getIterableComponents(true);
  }

  setActive(ctrl) {
    this.activeItem = ctrl.link;
    return true;
  }
}
