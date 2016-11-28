import { inject } from 'aurelia-dependency-injection';
import { ComponentService } from '../shared/component-service';

@inject(ComponentService)
export class Samples {
  constructor(componentService) {
    this.routerConfig = componentService.getRouterConfig(true);
  }

  configureRouter(config, router) {
    config.map(this.routerConfig);
    this.router = router;
  }
}
