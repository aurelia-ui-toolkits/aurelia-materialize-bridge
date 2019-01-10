"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_pal_1 = require("aurelia-pal");
var aurelia_1 = require("./aurelia");
/**
 * Plugin configuration builder
 */
var ConfigBuilder = /** @class */ (function () {
    function ConfigBuilder() {
        this.globalResources = [];
        this.noWavesAttach = false;
        this.autoButtonWaves = false;
        this.useGlobalResources = true;
    }
    ConfigBuilder.prototype.useAll = function () {
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
            .useLookup()
            .useModal()
            .useNavbar()
            .usePagination()
            .useParallax()
            .useProgress()
            .usePushpin()
            .useRadio()
            .useRange()
            .useScrollSpy()
            .useSelect()
            .useSidenav()
            .useSlider()
            .useSwitch()
            .useTabs()
            .useTapTarget()
            .useTimePicker()
            .useTooltip()
            .useWaitCursor()
            .useWaves()
            .useAutoButtonWaves(true)
            .useValidationContainer()
            .useWell();
    };
    ConfigBuilder.prototype.useAutoComplete = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./autocomplete/autocomplete"));
        return this;
    };
    ConfigBuilder.prototype.useBadge = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./badge/badge"));
        return this;
    };
    ConfigBuilder.prototype.useBox = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./box/box"));
        return this;
    };
    ConfigBuilder.prototype.useBreadcrumbs = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./breadcrumbs/breadcrumbs"));
        return this;
    };
    ConfigBuilder.prototype.useButton = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./button/button"));
        return this;
    };
    ConfigBuilder.prototype.useCarousel = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./carousel/carousel"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./carousel/carousel-item"));
        return this;
    };
    ConfigBuilder.prototype.useCharacterCounter = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./char-counter/char-counter"));
        return this;
    };
    ConfigBuilder.prototype.useCard = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./card/card"));
        return this;
    };
    ConfigBuilder.prototype.useCheckbox = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./checkbox/checkbox"));
        return this;
    };
    ConfigBuilder.prototype.useChip = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./chip/chip"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./chip/chips"));
        return this;
    };
    /**
     * Use my control
     */
    ConfigBuilder.prototype.useClickCounter = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./click-counter/click-counter"));
        return this;
    };
    ConfigBuilder.prototype.useCollapsible = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./collapsible/collapsible"));
        return this;
    };
    ConfigBuilder.prototype.useCollection = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./collection/collection"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./collection/collection-item"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./collection/collection-header"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./collection/md-collection-selector"));
        return this;
    };
    ConfigBuilder.prototype.useColors = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./colors/md-colors"));
        return this;
    };
    ConfigBuilder.prototype.useLegacyColors = function () {
        var i = this.globalResources.indexOf("./colors/md-colors");
        if (i >= 0) {
            this.globalResources.splice(i, 1);
        }
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./colors/md-colors-legacy"));
        return this;
    };
    ConfigBuilder.prototype.useDatePicker = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./datepicker/datepicker"));
        return this;
    };
    ConfigBuilder.prototype.useDropdown = function () {
        // this.globalResources.push("./dropdown/dropdown-element");
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./dropdown/dropdown"));
        return this;
    };
    ConfigBuilder.prototype.useFab = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./fab/fab"));
        return this;
    };
    ConfigBuilder.prototype.useFile = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./file/file"));
        return this;
    };
    ConfigBuilder.prototype.useFooter = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./footer/footer"));
        return this;
    };
    ConfigBuilder.prototype.useInput = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./input/input"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./input/input-prefix"));
        return this;
    };
    ConfigBuilder.prototype.useLookup = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./lookup/lookup"));
        return this;
    };
    ConfigBuilder.prototype.useModal = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./modal/modal"));
        return this;
    };
    ConfigBuilder.prototype.useNavbar = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./navbar/navbar"));
        return this;
    };
    ConfigBuilder.prototype.usePagination = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./pagination/pagination"));
        return this;
    };
    ConfigBuilder.prototype.useParallax = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./parallax/parallax"));
        return this;
    };
    ConfigBuilder.prototype.useProgress = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./progress/progress"));
        return this;
    };
    ConfigBuilder.prototype.usePushpin = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./pushpin/pushpin"));
        return this;
    };
    ConfigBuilder.prototype.useRadio = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./radio/radio"));
        return this;
    };
    ConfigBuilder.prototype.useRange = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./range/range"));
        return this;
    };
    ConfigBuilder.prototype.useScrollSpy = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./scrollspy/scrollspy"));
        return this;
    };
    ConfigBuilder.prototype.useSelect = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./select/select"));
        return this;
    };
    ConfigBuilder.prototype.useSidenav = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./sidenav/sidenav"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./sidenav/sidenav-collapse"));
        return this;
    };
    ConfigBuilder.prototype.useSlider = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./slider/slider"));
        // this.globalResources.push("./slider/slide");
        return this;
    };
    ConfigBuilder.prototype.useSwitch = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./switch/switch"));
        return this;
    };
    ConfigBuilder.prototype.useTabs = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./tabs/tabs"));
        return this;
    };
    ConfigBuilder.prototype.useTapTarget = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./tap-target/tap-target"));
        return this;
    };
    ConfigBuilder.prototype.useTimePicker = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./timepicker/timepicker"));
        return this;
    };
    ConfigBuilder.prototype.useTooltip = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./tooltip/tooltip"));
        return this;
    };
    ConfigBuilder.prototype.useWaitCursor = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./wait-cursor/wait-cursor"));
        return this;
    };
    ConfigBuilder.prototype.useWaves = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./waves/waves"));
        return this;
    };
    ConfigBuilder.prototype.useValidationContainer = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./validation/validation-container"));
        return this;
    };
    ConfigBuilder.prototype.useWell = function () {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./well/md-well"));
        return this;
    };
    ConfigBuilder.prototype.preventWavesAttach = function () {
        this.noWavesAttach = true;
        return this;
    };
    ConfigBuilder.prototype.useAutoButtonWaves = function (use) {
        this.autoButtonWaves = use;
        return this;
    };
    /**
     * Don't globalize any resources
     * Allows you to import yourself via <require></require>
     */
    ConfigBuilder.prototype.withoutGlobalResources = function () {
        this.useGlobalResources = false;
        return this;
    };
    tslib_1.__decorate([
        aurelia_1.deprecated({ error: false, message: "Will be removed soon. Please consider using `useColors`." }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", ConfigBuilder)
    ], ConfigBuilder.prototype, "useLegacyColors", null);
    return ConfigBuilder;
}());
exports.ConfigBuilder = ConfigBuilder;
//# sourceMappingURL=config-builder.js.map