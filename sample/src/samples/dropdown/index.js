import { useView } from 'aurelia-framework';
import { Showcase } from 'shared/showcase';

@useView('shared/showcase.html')
export class Index extends Showcase {
  configureRouter(config, router) {
    config.title = 'Dropdown';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Basic use' },
      { route: 'options', moduleId: './options', nav: true, title: 'Options' }
    ]);

    this.router = router;
  }
}
