export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', plugin => {
      plugin.useClickCounter()
        .useBadge()
        .useBox()
        .useButton()
        .useCard()
        .useCarousel()
        .useCharacterCounter()
        .useCheckbox()
        .useCollapsible()
        .useColors()
        .useDatePicker()
        .useDropdown()
        .useFab()
        .useFile()
        .useInput()
        .useModal()
        .useNavbar()
        .useParallax()
        .usePushpin()
        .useRadio()
        .useRange()
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
