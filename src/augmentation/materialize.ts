// tslint:disable:interface-name

declare namespace M {
	interface Tabs {
		updateTabIndicator();
		_calcRightPos(el);
	}

	interface FormSelectOptions {
		classes: string;
	}

	class FormSelect extends Component<FormSelectOptions> {
		input: Element;
		wrapper: Element;
	}
}

interface JQuery {
	autocomplete(options: any);
	materialbox();
	carousel(command: string);
	carousel(options?: any);
	characterCounter();
	material_chip(command: string);
	material_chip(options?: any);
	collapsible(command: string, index?: number);
	collapsible(options?: any);
	pickadate(options: DatePickerOptions): any;
	pickadate(command: string);
	dropdown(command: any);
	leanModal(options: any);
	parallax();
	pushpin(options: any);
	scrollSpy();
	material_select(command?: string);
	sideNav(options?: any);
	slider(command?: string);
	slider(options: any);
	tabs(options: any);
	tabs(command: string, index: string);
	tapTarget(command?: string);
	pickatime(command?: string);
	pickatime(options: any);
	tooltip(command?: string);
	tooltip(options: any);
	modal(command?: string);
	modal(options: any);
}

interface DatePickerOptions {
	selectMonths?: boolean;
	selectYears?: number;
	container?: Element;
	editable?: boolean;
	showIcon?: boolean;
	iconClass?: string;
	min?: Date;
	max?: Date;
	onClose?();
}

declare namespace Materialize {
	function updateTextFields();
	function scrollFire(option: any);
	function fadeInImage(options: any);
	function showStaggeredList(options: any);

	interface DropDownOptions {
		closeOnClick?: boolean;
	}
}

declare namespace Waves {
	function attach(element: Element);
}
