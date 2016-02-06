import {useView} from 'aurelia-framework';
import { Showcase } from 'shared/showcase';

@useView('shared/showcase.html')
export class Index extends Showcase {
  configureRouter(config, router) {
    config.title = 'Click counter';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true,  title: 'Click counter' }
    ]);

    this.router = router;
  }
}
