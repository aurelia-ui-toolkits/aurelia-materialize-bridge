export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', plugin => {
      plugin.useClickCounter()
        .useButton()
        .useCard()
        .useCheckbox()
        .useCollapsible()
        .useColors()
        .useDropdown()
        .useNavbar()
        .useSelect()
        .useSidenav()
        .useTabs()
        .useTooltip()
        .useWaves()
        .useWell();
    });

  aurelia.use.globalResources('shared/collapse-panel');
  aurelia.use.globalResources('shared/markdown');
  aurelia.use.globalResources('shared/logger');
  aurelia.use.globalResources('shared/au-code');
  aurelia.use.globalResources('shared/sampleValueConverters');

  aurelia.start()
    .then(au => au.setRoot('app'));
}
