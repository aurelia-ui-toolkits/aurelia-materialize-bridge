import "isomorphic-fetch";
import "materialize-css";
import "aurelia-bootstrapper";
import { PLATFORM, Aurelia } from "aurelia-framework";

export async function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.plugin(PLATFORM.moduleName("aurelia-materialize-bridge"), plugin => {
			plugin.useClickCounter().useAutoComplete().useBadge().useBreadcrumbs().useBox().useButton().useCard().useCarousel().useCharacterCounter().useCheckbox()
				.useChip().useCollapsible().useCollection().useColors().useDatePicker().useDropdown().useFab().useFile().useFooter().useInput().useModal().useNavbar()
				.usePagination().useParallax().useProgress().usePushpin().useRadio().useRange().useScrollfire().useScrollSpy().useSelect().useSidenav().useSlider()
				.useSwitch().useTabs().useTapTarget().useTimePicker().useTooltip().useTransitions().useWaves().useWell();
		})
		.plugin(PLATFORM.moduleName("aurelia-validation"));

	aurelia.use.globalResources(PLATFORM.moduleName("./shared/collapse-panel"));
	aurelia.use.globalResources(PLATFORM.moduleName("./shared/markdown"));
	aurelia.use.globalResources(PLATFORM.moduleName("./shared/logger"));
	aurelia.use.globalResources(PLATFORM.moduleName("./shared/au-code"));
	aurelia.use.globalResources(PLATFORM.moduleName("./shared/sampleValueConverters"));

	await aurelia.start();
	await new Promise(resolve => $(document).ready(() => resolve()));
	aurelia.setRoot(PLATFORM.moduleName("app"));
}
