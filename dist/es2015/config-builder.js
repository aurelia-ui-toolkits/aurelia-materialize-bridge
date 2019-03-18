import * as tslib_1 from "tslib";
import { PLATFORM } from "aurelia-pal";
import { deprecated } from "./aurelia";
/**
 * Plugin configuration builder
 */
export class ConfigBuilder {
    constructor() {
        this.globalResources = [];
        this.noWavesAttach = false;
        this.autoButtonWaves = false;
        this.useGlobalResources = true;
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
        this.globalResources.push(PLATFORM.moduleName("./click-counter/click-counter"));
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
    useLegacyColors() {
        let i = this.globalResources.indexOf("./colors/md-colors");
        if (i >= 0) {
            this.globalResources.splice(i, 1);
        }
        this.globalResources.push(PLATFORM.moduleName("./colors/md-colors-legacy"));
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
    useLookup() {
        this.globalResources.push(PLATFORM.moduleName("./lookup/lookup"));
        return this;
    }
    useModal() {
        this.globalResources.push(PLATFORM.moduleName("./modal/modal"));
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
    useWaitCursor() {
        this.globalResources.push(PLATFORM.moduleName("./wait-cursor/wait-cursor"));
        return this;
    }
    useWaves() {
        this.globalResources.push(PLATFORM.moduleName("./waves/waves"));
        return this;
    }
    useValidationContainer() {
        this.globalResources.push(PLATFORM.moduleName("./validation/validation-container"));
        return this;
    }
    useWell() {
        this.globalResources.push(PLATFORM.moduleName("./well/md-well"));
        return this;
    }
    preventWavesAttach() {
        this.noWavesAttach = true;
        return this;
    }
    useAutoButtonWaves(use) {
        this.autoButtonWaves = use;
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
}
tslib_1.__decorate([
    deprecated({ error: false, message: "Will be removed soon. Please consider using `useColors`." }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", ConfigBuilder)
], ConfigBuilder.prototype, "useLegacyColors", null);
//# sourceMappingURL=config-builder.js.map