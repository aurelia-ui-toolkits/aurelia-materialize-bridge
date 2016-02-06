import { useView } from 'aurelia-framework';
import { Showcase } from 'shared/showcase';

@useView('shared/showcase.html')
export class Index extends Showcase {
  configureRouter(config, router) {
    config.title = 'Dialogs';
    config.map([
      { route: ['', 'toast'], moduleId: './toast', nav: true, title: 'Toasts' },
      { route: 'tooltip', moduleId: './tooltip', nav: true, title: 'Tooltips' }
    ]);

    this.router = router;
  }
}
