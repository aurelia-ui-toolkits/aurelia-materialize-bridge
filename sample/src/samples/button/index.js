import { inject, useView } from 'aurelia-framework';
import { Registry } from 'shared/registry';

@inject(Registry)
@useView('shared/showcase.html')
export class Index {
  constructor(registry) {
    this.registry = registry;
  }

  configureRouter(config, router) {
    this.router = router;
    return this.registry.load(config, 'button');
  }
}
