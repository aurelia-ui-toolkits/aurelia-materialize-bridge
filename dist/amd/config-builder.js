define(['exports', 'aurelia-pal', './dropdown/dropdown-fix'], function (exports, _aureliaPal, _dropdownFix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ConfigBuilder = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ConfigBuilder = exports.ConfigBuilder = function () {
    function ConfigBuilder() {
      _classCallCheck(this, ConfigBuilder);

      this.useGlobalResources = true;
      this.useScrollfirePatch = false;
      this.globalResources = [];
    }

    ConfigBuilder.prototype.useAll = function useAll() {
      return this.useAutoComplete().useBadge().useBox().useBreadcrumbs().useButton().useCard().useCarousel().useCharacterCounter().useCheckbox().useChip().useCollapsible().useCollection().useColors().useDatePicker().useDropdown().useFab().useFile().useFooter().useInput().useModal().useNavbar().usePagination().useParallax().useProgress().usePushpin().useRadio().useRange().useScrollfire().useScrollSpy().useSelect().useSidenav().useSlider().useSwitch().useTabs().useTapTarget().useTooltip().useTransitions().useWaves().useWell();
    };

    ConfigBuilder.prototype.useAutoComplete = function useAutoComplete() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./autocomplete/autocomplete'));
      return this;
    };

    ConfigBuilder.prototype.useBadge = function useBadge() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./badge/badge'));
      return this;
    };

    ConfigBuilder.prototype.useBox = function useBox() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./box/box'));
      return this;
    };

    ConfigBuilder.prototype.useBreadcrumbs = function useBreadcrumbs() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./breadcrumbs/breadcrumbs'));
      return this;
    };

    ConfigBuilder.prototype.useButton = function useButton() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./button/button'));
      return this;
    };

    ConfigBuilder.prototype.useCarousel = function useCarousel() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./carousel/carousel'));
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./carousel/carousel-item'));
      return this;
    };

    ConfigBuilder.prototype.useCharacterCounter = function useCharacterCounter() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./char-counter/char-counter'));
      return this;
    };

    ConfigBuilder.prototype.useCard = function useCard() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./card/card'));
      return this;
    };

    ConfigBuilder.prototype.useCheckbox = function useCheckbox() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./checkbox/checkbox'));
      return this;
    };

    ConfigBuilder.prototype.useChip = function useChip() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./chip/chip'));
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./chip/chips'));
      return this;
    };

    ConfigBuilder.prototype.useClickCounter = function useClickCounter() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./click-counter'));
      return this;
    };

    ConfigBuilder.prototype.useCollapsible = function useCollapsible() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collapsible/collapsible'));
      return this;
    };

    ConfigBuilder.prototype.useCollection = function useCollection() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/collection'));
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/collection-item'));
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/collection-header'));
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/md-collection-selector'));
      return this;
    };

    ConfigBuilder.prototype.useColors = function useColors() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./colors/md-colors'));
      return this;
    };

    ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./datepicker/datepicker'));
      return this;
    };

    ConfigBuilder.prototype.useDropdown = function useDropdown() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dropdown/dropdown'));
      return this;
    };

    ConfigBuilder.prototype.useDropdownFix = function useDropdownFix() {
      (0, _dropdownFix.applyMaterializeDropdownFix)();
      return this;
    };

    ConfigBuilder.prototype.useFab = function useFab() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./fab/fab'));
      return this;
    };

    ConfigBuilder.prototype.useFile = function useFile() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./file/file'));
      return this;
    };

    ConfigBuilder.prototype.useFooter = function useFooter() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./footer/footer'));
      return this;
    };

    ConfigBuilder.prototype.useInput = function useInput() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./input/input'));
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./input/input-prefix'));
      return this;
    };

    ConfigBuilder.prototype.useModal = function useModal() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./modal/modal'));
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./modal/modal-trigger'));
      return this;
    };

    ConfigBuilder.prototype.useNavbar = function useNavbar() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./navbar/navbar'));
      return this;
    };

    ConfigBuilder.prototype.usePagination = function usePagination() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./pagination/pagination'));
      return this;
    };

    ConfigBuilder.prototype.useParallax = function useParallax() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./parallax/parallax'));
      return this;
    };

    ConfigBuilder.prototype.useProgress = function useProgress() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./progress/progress'));
      return this;
    };

    ConfigBuilder.prototype.usePushpin = function usePushpin() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./pushpin/pushpin'));
      return this;
    };

    ConfigBuilder.prototype.useRadio = function useRadio() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./radio/radio'));
      return this;
    };

    ConfigBuilder.prototype.useRange = function useRange() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./range/range'));
      return this;
    };

    ConfigBuilder.prototype.useScrollfire = function useScrollfire() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./scrollfire/scrollfire'));
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./scrollfire/scrollfire-target'));
      return this;
    };

    ConfigBuilder.prototype.useScrollSpy = function useScrollSpy() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./scrollspy/scrollspy'));
      return this;
    };

    ConfigBuilder.prototype.useSelect = function useSelect() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./select/select'));
      return this;
    };

    ConfigBuilder.prototype.useSidenav = function useSidenav() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./sidenav/sidenav'));
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./sidenav/sidenav-collapse'));
      return this;
    };

    ConfigBuilder.prototype.useSlider = function useSlider() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./slider/slider'));

      return this;
    };

    ConfigBuilder.prototype.useSwitch = function useSwitch() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./switch/switch'));
      return this;
    };

    ConfigBuilder.prototype.useTabs = function useTabs() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tabs/tabs'));
      return this;
    };

    ConfigBuilder.prototype.useTapTarget = function useTapTarget() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tap-target/tap-target'));
      return this;
    };

    ConfigBuilder.prototype.useTooltip = function useTooltip() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tooltip/tooltip'));
      return this;
    };

    ConfigBuilder.prototype.useTransitions = function useTransitions() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./transitions/fadein-image'));
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./transitions/staggered-list'));
      return this;
    };

    ConfigBuilder.prototype.useWaves = function useWaves() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./waves/waves'));
      return this;
    };

    ConfigBuilder.prototype.useWell = function useWell() {
      this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./well/md-well.html'));
      return this;
    };

    ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
      this.useGlobalResources = false;
      return this;
    };

    ConfigBuilder.prototype.withScrollfirePatch = function withScrollfirePatch() {
      this.useScrollfirePatch = true;
      return this;
    };

    return ConfigBuilder;
  }();
});