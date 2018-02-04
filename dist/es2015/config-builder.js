import { PLATFORM } from "aurelia-pal";
/**
 * Plugin configuration builder
 */
export class ConfigBuilder {
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
        this.globalResources.push(PLATFORM.moduleName("./autocomplete/autocomplete"));
        return this;
    }
    useBadge() {
        this.globalResources.push(PLATFORM.moduleName("./badge/badge"));
        return this;
    }
    useBox() {
        this.globalResources.push(PLATFORM.moduleName("./box/box"));
        return this;
    }
    useBreadcrumbs() {
        this.globalResources.push(PLATFORM.moduleName("./breadcrumbs/breadcrumbs"));
        return this;
    }
    useButton() {
        this.globalResources.push(PLATFORM.moduleName("./button/button"));
        return this;
    }
    useCarousel() {
        this.globalResources.push(PLATFORM.moduleName("./carousel/carousel"));
        this.globalResources.push(PLATFORM.moduleName("./carousel/carousel-item"));
        return this;
    }
    useCharacterCounter() {
        this.globalResources.push(PLATFORM.moduleName("./char-counter/char-counter"));
        return this;
    }
    useCard() {
        this.globalResources.push(PLATFORM.moduleName("./card/card"));
        return this;
    }
    useCheckbox() {
        this.globalResources.push(PLATFORM.moduleName("./checkbox/checkbox"));
        return this;
    }
    useChip() {
        this.globalResources.push(PLATFORM.moduleName("./chip/chip"));
        this.globalResources.push(PLATFORM.moduleName("./chip/chips"));
        return this;
    }
    /**
     * Use my control
     */
    useClickCounter() {
        this.globalResources.push(PLATFORM.moduleName("./click-counter"));
        return this;
    }
    useCollapsible() {
        this.globalResources.push(PLATFORM.moduleName("./collapsible/collapsible"));
        return this;
    }
    useCollection() {
        this.globalResources.push(PLATFORM.moduleName("./collection/collection"));
        this.globalResources.push(PLATFORM.moduleName("./collection/collection-item"));
        this.globalResources.push(PLATFORM.moduleName("./collection/collection-header"));
        this.globalResources.push(PLATFORM.moduleName("./collection/md-collection-selector"));
        return this;
    }
    useColors() {
        this.globalResources.push(PLATFORM.moduleName("./colors/md-colors"));
        return this;
    }
    useDatePicker() {
        this.globalResources.push(PLATFORM.moduleName("./datepicker/datepicker"));
        return this;
    }
    useDropdown() {
        // this.globalResources.push("./dropdown/dropdown-element");
        this.globalResources.push(PLATFORM.moduleName("./dropdown/dropdown"));
        return this;
    }
    useFab() {
        this.globalResources.push(PLATFORM.moduleName("./fab/fab"));
        return this;
    }
    useFile() {
        this.globalResources.push(PLATFORM.moduleName("./file/file"));
        return this;
    }
    useFooter() {
        this.globalResources.push(PLATFORM.moduleName("./footer/footer"));
        return this;
    }
    useInput() {
        this.globalResources.push(PLATFORM.moduleName("./input/input"));
        this.globalResources.push(PLATFORM.moduleName("./input/input-prefix"));
        return this;
    }
    useModal() {
        this.globalResources.push(PLATFORM.moduleName("./modal/modal"));
        this.globalResources.push(PLATFORM.moduleName("./modal/modal-trigger"));
        return this;
    }
    useNavbar() {
        this.globalResources.push(PLATFORM.moduleName("./navbar/navbar"));
        return this;
    }
    usePagination() {
        this.globalResources.push(PLATFORM.moduleName("./pagination/pagination"));
        return this;
    }
    useParallax() {
        this.globalResources.push(PLATFORM.moduleName("./parallax/parallax"));
        return this;
    }
    useProgress() {
        this.globalResources.push(PLATFORM.moduleName("./progress/progress"));
        return this;
    }
    usePushpin() {
        this.globalResources.push(PLATFORM.moduleName("./pushpin/pushpin"));
        return this;
    }
    useRadio() {
        this.globalResources.push(PLATFORM.moduleName("./radio/radio"));
        return this;
    }
    useRange() {
        this.globalResources.push(PLATFORM.moduleName("./range/range"));
        return this;
    }
    useScrollfire() {
        this.globalResources.push(PLATFORM.moduleName("./scrollfire/scrollfire"));
        this.globalResources.push(PLATFORM.moduleName("./scrollfire/scrollfire-target"));
        return this;
    }
    useScrollSpy() {
        this.globalResources.push(PLATFORM.moduleName("./scrollspy/scrollspy"));
        return this;
    }
    useSelect() {
        this.globalResources.push(PLATFORM.moduleName("./select/select"));
        return this;
    }
    useSidenav() {
        this.globalResources.push(PLATFORM.moduleName("./sidenav/sidenav"));
        this.globalResources.push(PLATFORM.moduleName("./sidenav/sidenav-collapse"));
        return this;
    }
    useSlider() {
        this.globalResources.push(PLATFORM.moduleName("./slider/slider"));
        // this.globalResources.push("./slider/slide");
        return this;
    }
    useSwitch() {
        this.globalResources.push(PLATFORM.moduleName("./switch/switch"));
        return this;
    }
    /**
     * Use materialized tabs
     */
    useTabs() {
        this.globalResources.push(PLATFORM.moduleName("./tabs/tabs"));
        return this;
    }
    useTapTarget() {
        this.globalResources.push(PLATFORM.moduleName("./tap-target/tap-target"));
        return this;
    }
    useTimePicker() {
        this.globalResources.push(PLATFORM.moduleName("./timepicker/timepicker"));
        return this;
    }
    useTooltip() {
        this.globalResources.push(PLATFORM.moduleName("./tooltip/tooltip"));
        return this;
    }
    useTransitions() {
        this.globalResources.push(PLATFORM.moduleName("./transitions/fadein-image"));
        this.globalResources.push(PLATFORM.moduleName("./transitions/staggered-list"));
        return this;
    }
    /**
     * Use ripple/waves effect
     */
    useWaves() {
        this.globalResources.push(PLATFORM.moduleName("./waves/waves"));
        return this;
    }
    useWell() {
        this.globalResources.push(PLATFORM.moduleName("./well/md-well.html"));
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
