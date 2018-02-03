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
}
