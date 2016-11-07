import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Input';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Basic use' },
      { route: 'theming', moduleId: './theming', nav: true, title: 'Theming' }
    ]);

    this.router = router;
  }
}
