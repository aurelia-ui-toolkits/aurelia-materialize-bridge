"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_pal_1 = require("aurelia-pal");
/**
 * Plugin configuration builder
 */
class ConfigBuilder {
    constructor() {
        this.globalResources = [];
        this.noWavesAttach = false;
        this.useGlobalResources = true;
        this.useScrollfirePatch = false;
    }
    useAll() {
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
            .useTapTarget()
            .useTimePicker()
            .useTooltip()
            .useTransitions()
            .useWaves()
            .useWell();
    }
    useAutoComplete() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./autocomplete/autocomplete"));
        return this;
    }
    useBadge() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./badge/badge"));
        return this;
    }
    useBox() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./box/box"));
        return this;
    }
    useBreadcrumbs() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./breadcrumbs/breadcrumbs"));
        return this;
    }
    useButton() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./button/button"));
        return this;
    }
    useCarousel() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./carousel/carousel"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./carousel/carousel-item"));
        return this;
    }
    useCharacterCounter() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./char-counter/char-counter"));
        return this;
    }
    useCard() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./card/card"));
        return this;
    }
    useCheckbox() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./checkbox/checkbox"));
        return this;
    }
    useChip() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./chip/chip"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./chip/chips"));
        return this;
    }
    /**
     * Use my control
     */
    useClickCounter() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./click-counter"));
        return this;
    }
    useCollapsible() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./collapsible/collapsible"));
        return this;
    }
    useCollection() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./collection/collection"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./collection/collection-item"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./collection/collection-header"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./collection/md-collection-selector"));
        return this;
    }
    useColors() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./colors/md-colors"));
        return this;
    }
    useDatePicker() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./datepicker/datepicker"));
        return this;
    }
    useDropdown() {
        // this.globalResources.push("./dropdown/dropdown-element");
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./dropdown/dropdown"));
        return this;
    }
    useFab() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./fab/fab"));
        return this;
    }
    useFile() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./file/file"));
        return this;
    }
    useFooter() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./footer/footer"));
        return this;
    }
    useInput() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./input/input"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./input/input-prefix"));
        return this;
    }
    useModal() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./modal/modal"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./modal/modal-trigger"));
        return this;
    }
    useNavbar() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./navbar/navbar"));
        return this;
    }
    usePagination() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./pagination/pagination"));
        return this;
    }
    useParallax() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./parallax/parallax"));
        return this;
    }
    useProgress() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./progress/progress"));
        return this;
    }
    usePushpin() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./pushpin/pushpin"));
        return this;
    }
    useRadio() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./radio/radio"));
        return this;
    }
    useRange() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./range/range"));
        return this;
    }
    useScrollfire() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./scrollfire/scrollfire"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./scrollfire/scrollfire-target"));
        return this;
    }
    useScrollSpy() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./scrollspy/scrollspy"));
        return this;
    }
    useSelect() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./select/select"));
        return this;
    }
    useSidenav() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./sidenav/sidenav"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./sidenav/sidenav-collapse"));
        return this;
    }
    useSlider() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./slider/slider"));
        // this.globalResources.push("./slider/slide");
        return this;
    }
    useSwitch() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./switch/switch"));
        return this;
    }
    /**
     * Use materialized tabs
     */
    useTabs() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./tabs/tabs"));
        return this;
    }
    useTapTarget() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./tap-target/tap-target"));
        return this;
    }
    useTimePicker() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./timepicker/timepicker"));
        return this;
    }
    useTooltip() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./tooltip/tooltip"));
        return this;
    }
    useTransitions() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./transitions/fadein-image"));
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./transitions/staggered-list"));
        return this;
    }
    /**
     * Use ripple/waves effect
     */
    useWaves() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./waves/waves"));
        return this;
    }
    useWell() {
        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName("./well/md-well.html"));
        return this;
    }
    preventWavesAttach() {
        this.noWavesAttach = true;
        return this;
    }
    /**
     * Don't globalize any resources
     * Allows you to import yourself via <require></require>
     */
    withoutGlobalResources() {
        this.useGlobalResources = false;
        return this;
    }
    withScrollfirePatch() {
        this.useScrollfirePatch = true;
        return this;
    }
}
exports.ConfigBuilder = ConfigBuilder;
