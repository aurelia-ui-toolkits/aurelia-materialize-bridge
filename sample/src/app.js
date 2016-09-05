export class App {
  primaryColor = '#ee6e73';
  accentColor = '#2bbbad';
  errorColor = '#f44336';

  configureRouter(config, router) {
    config.title = 'Aurelia Materialize Components';

    config.map([
      { name: 'about',            route: ['', 'about'],                moduleId: 'about/about',                 title: 'About' },
      { name: 'installation',     route: 'installation',               moduleId: 'installation/installation',   title: 'Installation' },
      { name: 'project-status',   route: 'project-status',             moduleId: 'project-status/controls',     title: 'Project status'},
      { name: 'help',             route: 'help',                       moduleId: 'help/help',                   title: 'Help' },
      // { name: 'docs',             route: 'help/docs/:category/:file',  moduleId: 'help/help',                   title: 'Help' },
      { name: 'support',          route: 'help/support',  moduleId: 'help/support',                   title: 'Support' },
      { name: 'samples',          route: ['samples'],                  moduleId: 'samples/samples',             title: 'Samples' }
    ]);

    this.router = router;
  }
}
