import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Tabs';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Basic use' },
      { route: 'events', moduleId: './events', nav: true, title: 'Events' },
      { route: 'api', moduleId: './api', nav: true, title: 'API' },
      { route: 'tabs-in-navbar', moduleId: './tabs-in-navbar', nav: true, title: 'Tabs in NavBar' }
    ]);

    this.router = router;
  }
}
