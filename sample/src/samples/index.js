import {inject} from 'aurelia-dependency-injection';
import {ComponentService} from 'shared/component-service';

@inject(ComponentService)
export class Index {
  constructor(componentService) {
    this.componentService = componentService;
  }

  configureRouter(config, router) {
    const routes = this.componentService.getRouterConfig();
    config.map(routes);
    this.router = router;
  }
}
