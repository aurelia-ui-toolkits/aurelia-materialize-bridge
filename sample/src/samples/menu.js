import { inject } from 'aurelia-dependency-injection';
import { ComponentService } from '../shared/component-service';

@inject(ComponentService)
export class Menu {
  constructor(componentService) {
    this.categories = componentService.getIterableComponents(true);
  }

  setActive(ctrl) {
    // console.log(ctrl);
    return true;
  }
}
