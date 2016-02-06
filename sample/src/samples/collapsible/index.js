import { useView } from 'aurelia-framework';
import { Showcase } from 'shared/showcase';

@useView('shared/showcase.html')
export class Index extends Showcase {
  configureRouter(config, router) {
    config.title = 'Collapsible';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Basic use' },
      { route: 'accordion', moduleId: './accordion', nav: true, title: 'Accordion' },
      { route: 'popout', moduleId: './popout', nav: true, title: 'Popout' }
    ]);

    this.router = router;
  }
}
