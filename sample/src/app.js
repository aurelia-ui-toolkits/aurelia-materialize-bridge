export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Materialize Components';

    config.map([
      { name: 'about',            route: ['', 'about'],                moduleId: 'about/about',                 title: 'About' },
      { name: 'installation',     route: 'installation',               moduleId: 'installation/installation',   title: 'Installation' },
      { name: 'project-status',   route: 'project-status',             moduleId: 'project-status/controls',     title: 'Project status'}
    ]);

    this.router = router;
  }
}
