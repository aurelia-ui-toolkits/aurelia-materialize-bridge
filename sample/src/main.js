export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', plugin => {
      plugin.useClickCounter()
        .useBox()
        .useButton()
        .useCard()
        .useCarousel()
        .useCheckbox()
        .useCollapsible()
        .useColors()
        .useDatePicker()
        .useDropdown()
        .useModal()
        .useNavbar()
        .useParallax()
        .usePushpin()
        .useScrollfire()
        .useScrollSpy()
        .useSelect()
        .useSidenav()
        .useSlider()
        .useSwitch()
        .useTabs()
        .useTooltip()
        .useTransitions()
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
