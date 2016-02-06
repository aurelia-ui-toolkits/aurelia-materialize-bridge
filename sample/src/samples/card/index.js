import {useView} from 'aurelia-framework';
import { Showcase } from 'shared/showcase';

@useView('shared/showcase.html')
export class Index extends Showcase {
  configureRouter(config, router) {
    config.title = 'Card';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true,  title: 'Basic use' },
      { route: 'image', moduleId: './image', nav: true,  title: 'Image card' }
    ]);

    this.router = router;
  }
}
