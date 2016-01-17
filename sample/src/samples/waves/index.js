import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Waves';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Waves' },
      { route: 'colors', moduleId: './colors', nav: true, title: 'Colors' }
    ]);

    this.router = router;
  }
}
