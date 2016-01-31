import {useView} from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Transitions';
    config.map([
      { route: ['', 'show-staggered-list'], moduleId: './show-staggered-list', nav: true,  title: 'Staggered list' },
      { route: 'fadein-image', moduleId: './fadein-image', nav: true,  title: 'Fadein image' }
    ]);

    this.router = router;
  }
}
