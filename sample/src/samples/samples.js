export class Samples {
  configureRouter(config, router) {
    config.map([
      { name: 'click-counter', route: 'click-counter', moduleId: 'samples/click-counter/index', title: 'click-counter' },
      { name: 'collapsible', route: 'collapsible', moduleId: 'samples/collapsible/index', title: 'collapsible' },
      { name: 'waves', route: 'waves', moduleId: 'samples/waves/index', title: 'waves' }
    ]);
    this.router = router;
  }
}
