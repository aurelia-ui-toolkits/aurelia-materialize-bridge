// import 'materialize';

//Configure Bluebird Promises.
(Promise.config || P.config)({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  return aurelia.loader.loadModule('materialize').then(() => {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-materialize-bridge', plugin => {
        plugin.useClickCounter()
          .useAutoComplete()
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
          // .useDropdownFix()
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
      })
      .plugin('aurelia-validation');

    aurelia.use.globalResources('shared/collapse-panel');
    aurelia.use.globalResources('shared/markdown');
    aurelia.use.globalResources('shared/logger');
    aurelia.use.globalResources('shared/au-code');
    aurelia.use.globalResources('shared/sampleValueConverters');

    return aurelia.start()
      .then(au => au.setRoot('app'));
  });
}
