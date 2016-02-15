import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Checkbox';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Default checkbox' },
      { route: 'filled-in', moduleId: './filled-in', nav: true, title: 'Filled-in checkbox' },
      { route: 'switch', moduleId: './switch', nav: true, title: 'Switch' }
    ]);

    this.router = router;
  }
}
