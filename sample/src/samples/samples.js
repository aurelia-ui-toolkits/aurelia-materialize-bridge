export class Samples {
  configureRouter(config, router) {
    config.map([
      { name: 'click-counter', route: 'click-counter', moduleId: 'samples/click-counter/index', title: 'click-counter' }
    ]);
    this.router = router;
  }
}
