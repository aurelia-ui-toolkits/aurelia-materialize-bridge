System.register([], function (_export) {
  'use strict';

  var ConfigBuilder;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ConfigBuilder = (function () {
        function ConfigBuilder() {
          _classCallCheck(this, ConfigBuilder);

          this.useGlobalResources = true;
          this.globalResources = [];
        }

        ConfigBuilder.prototype.useAll = function useAll() {
          return this.useBox().useButton().useCard().useCarousel().useCheckbox().useCollapsible().useColors().useDropdown().useNavbar().useSelect().useSidenav().useSlider().useSwitch().useTabs().useTooltip().useTransitions().useWaves().useWell();
        };

        ConfigBuilder.prototype.useBox = function useBox() {
          this.globalResources.push('./box/box');
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

        ConfigBuilder.prototype.useCard = function useCard() {
          this.globalResources.push('./card/card');
          return this;
        };

        ConfigBuilder.prototype.useCheckbox = function useCheckbox() {
          this.globalResources.push('./checkbox/checkbox');
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

        ConfigBuilder.prototype.useColors = function useColors() {
          this.globalResources.push('./colors/md-colors.html');
          return this;
        };

        ConfigBuilder.prototype.useDropdown = function useDropdown() {
          this.globalResources.push('./dropdown/dropdown');
          return this;
        };

        ConfigBuilder.prototype.useNavbar = function useNavbar() {
          this.globalResources.push('./navbar/navbar');
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
          this.globalResources.push('./slider/slide');
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

        return ConfigBuilder;
      })();

      _export('ConfigBuilder', ConfigBuilder);
    }
  };
});
//# sourceMappingURL=dist/dev/config-builder.js.map
