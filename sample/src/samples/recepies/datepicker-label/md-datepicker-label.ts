import { autoinject } from "aurelia-framework";

@autoinject
export class MdDatepickerLabelCustomAttribute {
	constructor(private element: Element) {
		this.element = element;
	}

	value;

	attached() {
		let input = $(this.element);
		let div = $("<div class='input-field date-picker'></div>");
		let va = this.element.attributes.getNamedItem("validate");
		if (va) {
			div.attr(va.name, va.value);
		}
		input.wrap(div);
		let label = $(`<label class='${input.val() ? "active" : ""}' for='${this.element.id}'>${this.value}</label>`).insertAfter(input);
		let picker = $(this.element).pickadate("picker");
		picker.on("close", () => {
			if (input.val()) {
				label.addClass("active");
			}
			else {
				label.removeClass("active");
			}
		});
	}
}
