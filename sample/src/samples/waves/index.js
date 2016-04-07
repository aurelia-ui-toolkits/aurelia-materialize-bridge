import { inject, useView } from 'aurelia-framework';
import { Registry } from 'shared/registry';

@inject(Registry)
@useView('shared/showcase.html')
export class Index {
  constructor(registry) {
    this.registry = registry;
  }

  configureRouter(config, router) {
    config.title = 'Waves';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Basic use' },
      { route: 'colors', moduleId: './colors', nav: true, title: 'Colors' }
    ]);

    this.router = router;
    // return this.registry.load(config, 'waves');
  }
}
