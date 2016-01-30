import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Media';
    config.map([
      { route: ['', 'box'], moduleId: './box', nav: true, title: 'Material Box (basic)' },
      { route: 'box-caption', moduleId: './box-caption', nav: true, title: 'Material Box (caption)' }
    ]);

    this.router = router;
  }
}
