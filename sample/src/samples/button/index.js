import { useView } from 'aurelia-framework';
import { Showcase } from 'shared/showcase';

@useView('shared/showcase.html')
export class Index extends Showcase {
  configureRouter(config, router) {
    config.title = 'Button';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Basic use' }
    ]);

    this.router = router;
  }
}
