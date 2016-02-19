import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Button';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Basic use' },
      { route: 'fab', moduleId: './fab', nav: true, title: 'Floating action button' },
      { route: 'fab-fixed', moduleId: './fab-fixed', nav: true, title: 'Fixed action button' }
    ]);

    this.router = router;
  }
}
