import { MdTabs } from "aurelia-materialize-bridge";

export class App {
	demotabs: MdTabs;

	selectTab2() {
		this.demotabs.selectTab("tab_2");
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
