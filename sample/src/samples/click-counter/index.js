import {useView} from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Click counter';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true,  title: 'Click counter' }
    ]);

    this.router = router;
  }
}
