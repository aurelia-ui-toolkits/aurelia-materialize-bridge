import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Input';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true, title: 'Basic use' },
      { route: 'textarea', moduleId: './textarea', nav: true, title: 'Textarea' },
      { route: 'input-types', moduleId: './input-types', nav: true, title: 'Input types' },
      { route: 'char-counter', moduleId: './char-counter', nav: true, title: 'Character counter' }
    ]);

    this.router = router;
  }
}
