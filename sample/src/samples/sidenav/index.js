import {useView} from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'SideNav';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true,  title: 'Basic use' },
      { route: 'options', moduleId: './options', nav: true,  title: 'Options' },
      { route: 'fixed', moduleId: './fixed', nav: true,  title: 'Fixed Sidenav' }
    ]);

    this.router = router;
  }
}
