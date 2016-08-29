/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  useScrollfirePatch: boolean = false;
  globalResources = [];

  useAll(): ConfigBuilder {
    return this
      .useAutoComplete()
      .useBadge()
      .useBox()
      .useBreadcrumbs()
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
  }

  useAutoComplete(): ConfigBuilder {
    this.globalResources.push('./autocomplete/autocomplete');
    return this;
  }

  useBadge(): ConfigBuilder {
    this.globalResources.push('./badge/badge');
    return this;
  }

  useBox(): ConfigBuilder {
    this.globalResources.push('./box/box');
    return this;
  }

  useBreadcrumbs(): ConfigBuilder {
    this.globalResources.push('./breadcrumbs/breadcrumbs');
    return this;
  }

  useButton(): ConfigBuilder {
    this.globalResources.push('./button/button');
    return this;
  }

  useCarousel(): ConfigBuilder {
    this.globalResources.push('./carousel/carousel');
    this.globalResources.push('./carousel/carousel-item');
    return this;
  }

  useCharacterCounter(): ConfigBuilder {
    this.globalResources.push('./char-counter/char-counter');
    return this;
  }

  useCard(): ConfigBuilder {
    this.globalResources.push('./card/card');
    return this;
  }

  useCheckbox(): ConfigBuilder {
    this.globalResources.push('./checkbox/checkbox');
    return this;
  }

  useChip(): ConfigBuilder {
    this.globalResources.push('./chip/chip');
    this.globalResources.push('./chip/chips');
    return this;
  }

  /**
  * Use my control
  */
  useClickCounter(): ConfigBuilder {
    this.globalResources.push('./click-counter');
    return this;
  }

  useCollapsible(): ConfigBuilder {
    this.globalResources.push('./collapsible/collapsible');
    return this;
  }

  useCollection() : ConfigBuilder {
    this.globalResources.push('./collection/collection');
    this.globalResources.push('./collection/collection-item');
    this.globalResources.push('./collection/collection-header');
    this.globalResources.push('./collection/md-collection-selector');
    return this;
  }

  useColors() : ConfigBuilder {
    this.globalResources.push('./colors/md-colors.html');
    return this;
  }

  useDatePicker() : ConfigBuilder {
    this.globalResources.push('./datepicker/datepicker');
    return this;
  }

  useDropdown() : ConfigBuilder {
    // this.globalResources.push('./dropdown/dropdown-element');
    this.globalResources.push('./dropdown/dropdown');
    return this;
  }

  useFab() : ConfigBuilder {
    this.globalResources.push('./fab/fab');
    return this;
  }

  useFile() : ConfigBuilder {
    this.globalResources.push('./file/file');
    return this;
  }

  useFooter() : ConfigBuilder {
    this.globalResources.push('./footer/footer');
    return this;
  }

  useInput() : ConfigBuilder {
    this.globalResources.push('./input/input');
    this.globalResources.push('./input/input-prefix');
    return this;
  }

  useModal(): ConfigBuilder {
    this.globalResources.push('./modal/modal-trigger');
    return this;
  }

  useNavbar(): ConfigBuilder {
    this.globalResources.push('./navbar/navbar');
    return this;
  }

  usePagination(): ConfigBuilder {
    this.globalResources.push('./pagination/pagination');
    return this;
  }

  useParallax(): ConfigBuilder {
    this.globalResources.push('./parallax/parallax');
    return this;
  }

  useProgress(): ConfigBuilder {
    this.globalResources.push('./progress/progress');
    return this;
  }

  usePushpin(): ConfigBuilder {
    this.globalResources.push('./pushpin/pushpin');
    return this;
  }

  useRadio(): ConfigBuilder {
    this.globalResources.push('./radio/radio');
    return this;
  }

  useRange(): ConfigBuilder {
    this.globalResources.push('./range/range');
    return this;
  }

  useScrollfire(): ConfigBuilder {
    this.globalResources.push('./scrollfire/scrollfire');
    this.globalResources.push('./scrollfire/scrollfire-target');
    return this;
  }

  useScrollSpy(): ConfigBuilder {
    this.globalResources.push('./scrollspy/scrollspy');
    return this;
  }

  useSelect(): ConfigBuilder {
    this.globalResources.push('./select/select');
    return this;
  }

  useSidenav(): ConfigBuilder {
    this.globalResources.push('./sidenav/sidenav');
    this.globalResources.push('./sidenav/sidenav-collapse');
    return this;
  }

  useSlider(): ConfigBuilder {
    this.globalResources.push('./slider/slider');
    // this.globalResources.push('./slider/slide');
    return this;
  }

  useSwitch(): ConfigBuilder {
    this.globalResources.push('./switch/switch');
    return this;
  }

  /**
   * Use materialized tabs
   */
  useTabs(): ConfigBuilder {
    this.globalResources.push('./tabs/tabs');
    return this;
  }

  useTooltip(): ConfigBuilder {
    this.globalResources.push('./tooltip/tooltip');
    return this;
  }

  useTransitions(): ConfigBuilder {
    this.globalResources.push('./transitions/fadein-image');
    this.globalResources.push('./transitions/staggered-list');
    return this;
  }

  /**
   * Use ripple/waves effect
   */
  useWaves(): ConfigBuilder {
    this.globalResources.push('./waves/waves');
    return this;
  }

  useWell(): ConfigBuilder {
    this.globalResources.push('./well/md-well.html');
    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import yourself via <require></require>
  */
  withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }

  withScrollfirePatch(): ConfigBuilder {
    this.useScrollfirePatch = true;
    return this;
  }
}
