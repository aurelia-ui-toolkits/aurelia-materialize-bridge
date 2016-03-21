export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', plugin => {
      plugin.useClickCounter()
        .useBadge()
        .useBreadcrumbs()
        .useBox()
        .useButton()
        .useCard()
        .useCarousel()
        .useCharacterCounter()
        .useCheckbox()
        .useChip()
        .useCollapsible()
        .useCollection()
        .useColors()
        .useDatePicker()
        .useDropdown()
        .useFab()
        .useFile()
        .useFooter()
        .useInput()
        .useModal()
        .useNavbar()
        .usePagination()
        .useParallax()
        .useProgress()
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
