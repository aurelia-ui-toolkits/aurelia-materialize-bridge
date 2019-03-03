import { PLATFORM } from "aurelia-pal";
import { deprecated } from "./aurelia";

/**
 * Plugin configuration builder
 */
export class ConfigBuilder {

	globalResources = [];
	noWavesAttach: boolean = false;
	autoButtonWaves: boolean = false;
	useGlobalResources: boolean = true;

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

	useAutoComplete(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./autocomplete/autocomplete"));
		return this;
	}

	useBadge(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./badge/badge"));
		return this;
	}

	useBox(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./box/box"));
		return this;
	}

	useBreadcrumbs(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./breadcrumbs/breadcrumbs"));
		return this;
	}

	useButton(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./button/button"));
		return this;
	}

	useCarousel(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./carousel/carousel"));
		this.globalResources.push(PLATFORM.moduleName("./carousel/carousel-item"));
		return this;
	}

	useCharacterCounter(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./char-counter/char-counter"));
		return this;
	}

	useCard(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./card/card"));
		return this;
	}

	useCheckbox(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./checkbox/checkbox"));
		return this;
	}

	useChip(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./chip/chip"));
		this.globalResources.push(PLATFORM.moduleName("./chip/chips"));
		return this;
	}

	/**
	 * Use my control
	 */
	useClickCounter(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./click-counter/click-counter"));
		return this;
	}

	useCollapsible(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./collapsible/collapsible"));
		return this;
	}

	useCollection(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./collection/collection"));
		this.globalResources.push(PLATFORM.moduleName("./collection/collection-item"));
		this.globalResources.push(PLATFORM.moduleName("./collection/collection-header"));
		this.globalResources.push(PLATFORM.moduleName("./collection/md-collection-selector"));
		return this;
	}

	useColors(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./colors/md-colors"));
		return this;
	}

	@deprecated({error: false, message: "Will be removed soon. Please consider using `useColors`."})
	useLegacyColors(): ConfigBuilder {
		let i = this.globalResources.indexOf("./colors/md-colors");
		if (i >= 0) {
			this.globalResources.splice(i, 1);
		}
		this.globalResources.push(PLATFORM.moduleName("./colors/md-colors-legacy"));
		return this;
	}

	useDatePicker(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./datepicker/datepicker"));
		return this;
	}

	useDropdown(): ConfigBuilder {
		// this.globalResources.push("./dropdown/dropdown-element");
		this.globalResources.push(PLATFORM.moduleName("./dropdown/dropdown"));
		return this;
	}

	useFab(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./fab/fab"));
		return this;
	}

	useFile(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./file/file"));
		return this;
	}

	useFooter(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./footer/footer"));
		return this;
	}

	useInput(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./input/input"));
		this.globalResources.push(PLATFORM.moduleName("./input/input-prefix"));
		return this;
	}

	useLookup(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./lookup/lookup"));
		return this;
	}

	useModal(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./modal/modal"));
		return this;
	}

	useNavbar(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./navbar/navbar"));
		return this;
	}

	usePagination(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./pagination/pagination"));
		return this;
	}

	useParallax(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./parallax/parallax"));
		return this;
	}

	useProgress(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./progress/progress"));
		return this;
	}

	usePushpin(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./pushpin/pushpin"));
		return this;
	}

	useRadio(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./radio/radio"));
		return this;
	}

	useRange(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./range/range"));
		return this;
	}

	useScrollSpy(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./scrollspy/scrollspy"));
		return this;
	}

	useSelect(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./select/select"));
		return this;
	}

	useSidenav(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./sidenav/sidenav"));
		this.globalResources.push(PLATFORM.moduleName("./sidenav/sidenav-collapse"));
		return this;
	}

	useSlider(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./slider/slider"));
		// this.globalResources.push("./slider/slide");
		return this;
	}

	useSwitch(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./switch/switch"));
		return this;
	}

	useTabs(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./tabs/tabs"));
		return this;
	}

	useTapTarget(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./tap-target/tap-target"));
		return this;
	}

	useTimePicker(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./timepicker/timepicker"));
		return this;
	}

	useTooltip(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./tooltip/tooltip"));
		return this;
	}

	useWaitCursor(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./wait-cursor/wait-cursor"));
		return this;
	}

	useWaves(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./waves/waves"));
		return this;
	}

	useValidationContainer(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./validation/validation-container"));
		return this;
	}

	useWell(): ConfigBuilder {
		this.globalResources.push(PLATFORM.moduleName("./well/md-well"));
		return this;
	}

	preventWavesAttach(): ConfigBuilder {
		this.noWavesAttach = true;
		return this;
	}

	useAutoButtonWaves(use: boolean): ConfigBuilder {
		this.autoButtonWaves = use;
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
}
