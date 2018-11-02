/**
 * Plugin configuration builder
 */
export declare class ConfigBuilder {
    globalResources: any[];
    noWavesAttach: boolean;
    autoButtonWaves: boolean;
    useGlobalResources: boolean;
    useAll(): ConfigBuilder;
    useAutoComplete(): ConfigBuilder;
    useBadge(): ConfigBuilder;
    useBox(): ConfigBuilder;
    useBreadcrumbs(): ConfigBuilder;
    useButton(): ConfigBuilder;
    useCarousel(): ConfigBuilder;
    useCharacterCounter(): ConfigBuilder;
    useCard(): ConfigBuilder;
    useCheckbox(): ConfigBuilder;
    useChip(): ConfigBuilder;
    /**
     * Use my control
     */
    useClickCounter(): ConfigBuilder;
    useCollapsible(): ConfigBuilder;
    useCollection(): ConfigBuilder;
    useColors(): ConfigBuilder;
    useLegacyColors(): ConfigBuilder;
    useDatePicker(): ConfigBuilder;
    useDropdown(): ConfigBuilder;
    useFab(): ConfigBuilder;
    useFile(): ConfigBuilder;
    useFooter(): ConfigBuilder;
    useInput(): ConfigBuilder;
    useLookup(): ConfigBuilder;
    useModal(): ConfigBuilder;
    useNavbar(): ConfigBuilder;
    usePagination(): ConfigBuilder;
    useParallax(): ConfigBuilder;
    useProgress(): ConfigBuilder;
    usePushpin(): ConfigBuilder;
    useRadio(): ConfigBuilder;
    useRange(): ConfigBuilder;
    useScrollSpy(): ConfigBuilder;
    useSelect(): ConfigBuilder;
    useSidenav(): ConfigBuilder;
    useSlider(): ConfigBuilder;
    useSwitch(): ConfigBuilder;
    useTabs(): ConfigBuilder;
    useTapTarget(): ConfigBuilder;
    useTimePicker(): ConfigBuilder;
    useTooltip(): ConfigBuilder;
    useWaitCursor(): ConfigBuilder;
    useWaves(): ConfigBuilder;
    useValidationContainer(): ConfigBuilder;
    useWell(): ConfigBuilder;
    preventWavesAttach(): ConfigBuilder;
    useAutoButtonWaves(use: boolean): ConfigBuilder;
    /**
     * Don't globalize any resources
     * Allows you to import yourself via <require></require>
     */
    withoutGlobalResources(): ConfigBuilder;
}
