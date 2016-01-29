import {useView} from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'NavBar';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true,  title: 'Basic use' },
      { route: 'left-aligned-links', moduleId: './left-aligned-links', nav: true,  title: 'Left aligned links' }
    ]);

    this.router = router;
  }
}
