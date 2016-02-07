import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Select';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Basic use' },
      { route: 'multiple', moduleId: './multiple', nav: true, title: 'Multiple' },
      { route: 'objects', moduleId: './objects', nav: true, title: 'Binding to objects' }
    ]);

    this.router = router;
  }
}
