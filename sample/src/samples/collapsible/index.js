import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
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
