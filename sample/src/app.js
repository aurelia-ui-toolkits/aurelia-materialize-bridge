import {inject} from 'aurelia-dependency-injection';
import {Settings} from './settings';

@inject(Settings)
export class App {
  constructor(settings) {
    this.primaryColor = settings.primaryColor;
    this.accentColor = settings.accentColor;
    this.errorColor = settings.errorColor;
  }

  configureRouter(config, router) {
    config.title = 'Aurelia Materialize Components';

    config.map([
      { name: 'about',            route: ['', 'about'],                moduleId: 'about/about',                 title: 'About' },
      { name: 'installation',     route: 'installation',               moduleId: 'installation/installation',   title: 'Installation' },
      { name: 'project-status',   route: 'project-status',             moduleId: 'project-status/controls',     title: 'Components'},
      { name: 'help',             route: 'help',                       moduleId: 'help/help',                   title: 'Help' },
      // { name: 'docs',             route: 'help/docs/:category/:file',  moduleId: 'help/help',                   title: 'Help' },
      { name: 'support',          route: 'help/support',  moduleId: 'help/support',                   title: 'Support' },
      { name: 'samples',          route: ['samples'],                  moduleId: 'samples/index',             title: 'Samples' }
    ]);

    this.router = router;
  }
}
