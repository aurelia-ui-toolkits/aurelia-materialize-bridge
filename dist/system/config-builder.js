'use strict';

System.register(['./dropdown/dropdown-fix'], function (_export, _context) {
  "use strict";

  var applyMaterializeDropdownFix, ConfigBuilder;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_dropdownDropdownFix) {
      applyMaterializeDropdownFix = _dropdownDropdownFix.applyMaterializeDropdownFix;
    }],
    execute: function () {
      _export('ConfigBuilder', ConfigBuilder = function () {
        function ConfigBuilder() {
          _classCallCheck(this, ConfigBuilder);

          this.useGlobalResources = true;
          this.useScrollfirePatch = false;
          this.globalResources = [];
        }

        ConfigBuilder.prototype.useAll = function useAll() {
          return this.useAutoComplete().useBadge().useBox().useBreadcrumbs().useButton().useCard().useCarousel().useCharacterCounter().useCheckbox().useChip().useCollapsible().useCollection().useColors().useDatePicker().useDropdown().useFab().useFile().useFooter().useInput().useModal().useNavbar().usePagination().useParallax().useProgress().usePushpin().useRadio().useRange().useScrollfire().useScrollSpy().useSelect().useSidenav().useSlider().useSwitch().useTabs().useTooltip().useTransitions().useWaves().useWell();
        };

        ConfigBuilder.prototype.useAutoComplete = function useAutoComplete() {
          this.globalResources.push('./autocomplete/autocomplete');
          return this;
        };

        ConfigBuilder.prototype.useBadge = function useBadge() {
          this.globalResources.push('./badge/badge');
          return this;
        };

        ConfigBuilder.prototype.useBox = function useBox() {
          this.globalResources.push('./box/box');
          return this;
        };

        ConfigBuilder.prototype.useBreadcrumbs = function useBreadcrumbs() {
          this.globalResources.push('./breadcrumbs/breadcrumbs');
          return this;
        };

        ConfigBuilder.prototype.useButton = function useButton() {
          this.globalResources.push('./button/button');
          return this;
        };

        ConfigBuilder.prototype.useCarousel = function useCarousel() {
          this.globalResources.push('./carousel/carousel');
          this.globalResources.push('./carousel/carousel-item');
          return this;
        };

        ConfigBuilder.prototype.useCharacterCounter = function useCharacterCounter() {
          this.globalResources.push('./char-counter/char-counter');
          return this;
        };

        ConfigBuilder.prototype.useCard = function useCard() {
          this.globalResources.push('./card/card');
          return this;
        };

        ConfigBuilder.prototype.useCheckbox = function useCheckbox() {
          this.globalResources.push('./checkbox/checkbox');
          return this;
        };

        ConfigBuilder.prototype.useChip = function useChip() {
          this.globalResources.push('./chip/chip');
          this.globalResources.push('./chip/chips');
          return this;
        };

        ConfigBuilder.prototype.useClickCounter = function useClickCounter() {
          this.globalResources.push('./click-counter');
          return this;
        };

        ConfigBuilder.prototype.useCollapsible = function useCollapsible() {
          this.globalResources.push('./collapsible/collapsible');
          return this;
        };

        ConfigBuilder.prototype.useCollection = function useCollection() {
          this.globalResources.push('./collection/collection');
          this.globalResources.push('./collection/collection-item');
          this.globalResources.push('./collection/collection-header');
          this.globalResources.push('./collection/md-collection-selector');
          return this;
        };

        ConfigBuilder.prototype.useColors = function useColors() {
          this.globalResources.push('./colors/md-colors');
          return this;
        };

        ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
          this.globalResources.push('./datepicker/datepicker');
          return this;
        };

        ConfigBuilder.prototype.useDropdown = function useDropdown() {
          this.globalResources.push('./dropdown/dropdown');
          return this;
        };

        ConfigBuilder.prototype.useDropdownFix = function useDropdownFix() {
          applyMaterializeDropdownFix();
          return this;
        };

        ConfigBuilder.prototype.useFab = function useFab() {
          this.globalResources.push('./fab/fab');
          return this;
        };

        ConfigBuilder.prototype.useFile = function useFile() {
          this.globalResources.push('./file/file');
          return this;
        };

        ConfigBuilder.prototype.useFooter = function useFooter() {
          this.globalResources.push('./footer/footer');
          return this;
        };

        ConfigBuilder.prototype.useInput = function useInput() {
          this.globalResources.push('./input/input');
          this.globalResources.push('./input/input-prefix');
          return this;
        };

        ConfigBuilder.prototype.useModal = function useModal() {
          this.globalResources.push('./modal/modal-trigger');
          return this;
        };

        ConfigBuilder.prototype.useNavbar = function useNavbar() {
          this.globalResources.push('./navbar/navbar');
          return this;
        };

        ConfigBuilder.prototype.usePagination = function usePagination() {
          this.globalResources.push('./pagination/pagination');
          return this;
        };

        ConfigBuilder.prototype.useParallax = function useParallax() {
          this.globalResources.push('./parallax/parallax');
          return this;
        };

        ConfigBuilder.prototype.useProgress = function useProgress() {
          this.globalResources.push('./progress/progress');
          return this;
        };

        ConfigBuilder.prototype.usePushpin = function usePushpin() {
          this.globalResources.push('./pushpin/pushpin');
          return this;
        };

        ConfigBuilder.prototype.useRadio = function useRadio() {
          this.globalResources.push('./radio/radio');
          return this;
        };

        ConfigBuilder.prototype.useRange = function useRange() {
          this.globalResources.push('./range/range');
          return this;
        };

        ConfigBuilder.prototype.useScrollfire = function useScrollfire() {
          this.globalResources.push('./scrollfire/scrollfire');
          this.globalResources.push('./scrollfire/scrollfire-target');
          return this;
        };

        ConfigBuilder.prototype.useScrollSpy = function useScrollSpy() {
          this.globalResources.push('./scrollspy/scrollspy');
          return this;
        };

        ConfigBuilder.prototype.useSelect = function useSelect() {
          this.globalResources.push('./select/select');
          return this;
        };

        ConfigBuilder.prototype.useSidenav = function useSidenav() {
          this.globalResources.push('./sidenav/sidenav');
          this.globalResources.push('./sidenav/sidenav-collapse');
          return this;
        };

        ConfigBuilder.prototype.useSlider = function useSlider() {
          this.globalResources.push('./slider/slider');

          return this;
        };

        ConfigBuilder.prototype.useSwitch = function useSwitch() {
          this.globalResources.push('./switch/switch');
          return this;
        };

        ConfigBuilder.prototype.useTabs = function useTabs() {
          this.globalResources.push('./tabs/tabs');
          return this;
        };

        ConfigBuilder.prototype.useTooltip = function useTooltip() {
          this.globalResources.push('./tooltip/tooltip');
          return this;
        };

        ConfigBuilder.prototype.useTransitions = function useTransitions() {
          this.globalResources.push('./transitions/fadein-image');
          this.globalResources.push('./transitions/staggered-list');
          return this;
        };

        ConfigBuilder.prototype.useWaves = function useWaves() {
          this.globalResources.push('./waves/waves');
          return this;
        };

        ConfigBuilder.prototype.useWell = function useWell() {
          this.globalResources.push('./well/md-well.html');
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
      }());

      _export('ConfigBuilder', ConfigBuilder);
    }
  };
});