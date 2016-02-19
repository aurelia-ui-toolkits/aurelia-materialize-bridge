import {useView} from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Card';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true,  title: 'Basic use' },
      { route: 'image', moduleId: './image', nav: true,  title: 'Image card' },
      { route: 'reveal', moduleId: './reveal', nav: true,  title: 'Reveal card' },
      { route: 'sizes', moduleId: './sizes', nav: true,  title: 'Card sizes' }
    ]);

    this.router = router;
  }
}
