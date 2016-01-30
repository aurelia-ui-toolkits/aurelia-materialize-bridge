export class Samples {
  configureRouter(config, router) {
    config.map([
      { name: 'button', route: 'button', moduleId: 'samples/button/index', title: 'button' },
      { name: 'card', route: 'card', moduleId: 'samples/card/index', title: 'card' },
      { name: 'checkbox', route: 'checkbox', moduleId: 'samples/checkbox/index', title: 'checkbox' },
      { name: 'click-counter', route: 'click-counter', moduleId: 'samples/click-counter/index', title: 'click-counter' },
      { name: 'collapsible', route: 'collapsible', moduleId: 'samples/collapsible/index', title: 'collapsible' },
      { name: 'dialogs', route: 'dialogs', moduleId: 'samples/dialogs/index', title: 'dialogs' },
      { name: 'dropdown', route: 'dropdown', moduleId: 'samples/dropdown/index', title: 'dropdown' },
      { name: 'navbar', route: 'navbar', moduleId: 'samples/navbar/index', title: 'navbar' },
      { name: 'media', route: 'media', moduleId: 'samples/media/index', title: 'media' },
      { name: 'select', route: 'select', moduleId: 'samples/select/index', title: 'select' },
      { name: 'sidenav', route: 'sidenav', moduleId: 'samples/sidenav/index', title: 'sidenav' },
      { name: 'tabs', route: 'tabs', moduleId: 'samples/tabs/index', title: 'tabs' },
      { name: 'waves', route: 'waves', moduleId: 'samples/waves/index', title: 'waves' }
    ]);
    this.router = router;
  }
}
