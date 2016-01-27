export class Samples {
  configureRouter(config, router) {
    config.map([
      { name: 'button', route: 'button', moduleId: 'samples/button/index', title: 'button' },
      { name: 'card', route: 'card', moduleId: 'samples/card/index', title: 'card' },
      { name: 'click-counter', route: 'click-counter', moduleId: 'samples/click-counter/index', title: 'click-counter' },
      { name: 'collapsible', route: 'collapsible', moduleId: 'samples/collapsible/index', title: 'collapsible' },
      { name: 'navbar', route: 'navbar', moduleId: 'samples/navbar/index', title: 'navbar' },
      { name: 'sidenav', route: 'sidenav', moduleId: 'samples/sidenav/index', title: 'sidenav' },
      { name: 'tabs', route: 'tabs', moduleId: 'samples/tabs/index', title: 'tabs' },
      { name: 'waves', route: 'waves', moduleId: 'samples/waves/index', title: 'waves' }
    ]);
    this.router = router;
  }
}
