import { bindable, customAttribute, autoinject, bindingMode } from "aurelia-framework";
import { TaskQueue } from "aurelia-task-queue";
import { getLogger, Logger } from "aurelia-logging";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { DatePickerDefaultParser } from "./datepicker-default-parser";
import { fireEvent } from "../common/events";
import { ValidateResult } from "aurelia-validation";
import { MaterializeFormValidationRenderer } from "../index";

@autoinject
@customAttribute("md-datepicker")
export class MdDatePicker {
	constructor(private element: Element, private taskQueue: TaskQueue, private defaultParser: DatePickerDefaultParser) {
		this.log = getLogger("md-datepicker");
		this.parsers.push(defaultParser);
		this.onCalendarIconClick = this.onCalendarIconClick.bind(this);
	}

	log: Logger;
	picker: any;

	@bindable
	container: Element;

	@bindable
	translation;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	value: Date;
	valueChanged(newValue: Date) {
		if (this.options.max && newValue > this.options.max) {
			this.value = this.options.max;
		}
		this.log.debug("selectedChanged", this.value);
		// this.taskQueue.queueTask(() => {
		this.picker.set("select", this.value);
		// });
	}

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	parsers: any[] = [];

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	selectMonths: boolean = true;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	selectYears: number | string = 15;

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	options: DatePickerOptions = {};

	@bindable
	showErrortext: boolean | string = true;

	calendarIcon = null;

	attached() {
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
	}

	bind() {
		this.selectMonths = getBooleanFromAttributeValue(this.selectMonths);
		if (typeof this.selectYears === "string") {
			this.selectYears = parseInt(this.selectYears, 10);
		}
		this.element.classList.add("date-picker");

		let options: DatePickerOptions = {
			selectMonths: this.selectMonths,
			selectYears: this.selectYears,
			onClose() {
				// see https://github.com/Dogfalo/materialize/issues/2067
				// and: https://github.com/amsul/pickadate.js/issues/160
				$(document.activeElement).blur();
			}
		};
		let i18n = {};
		// let i18n = {
		//   selectMonths: true, // Creates a dropdown to control month
		//   selectYears: 15, // Creates a dropdown of 15 years to control year
		//   monthsFull: [ 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember' ],
		//   monthsShort: [ 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez' ],
		//   weekdaysFull: [ 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag' ],
		//   weekdaysShort: [ 'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa' ],
		//   today: 'Heute',
		//   clear: 'Löschen',
		//   close: 'Schließen',
		//   firstDay: 1,
		//   format: 'dddd, dd. mmmm yyyy',
		//   formatSubmit: 'yyyy/mm/dd'
		// };
		Object.assign(options, i18n);

		if (this.options) {
			Object.assign(options, this.options);
			// merge callback methods if there is a hook in the advanced options
			if (this.options.onClose) {
				options.onClose = () => {
					this.options.onClose();
					$(document.activeElement).blur();
				};
			}
		}
		if (this.container) {
			options.container = this.container;
		}
		this.picker = $(this.element).pickadate(options).pickadate("picker");
		this.picker.on({
			close: this.onClose.bind(this)
		});

		if (this.value) {
			this.picker.set("select", this.value);
		}
		if (this.options && this.options.editable) {
			$(this.element).on("keydown", (e) => {
				if (e.keyCode === 13 || e.keyCode === 9) {
					if (this.parseDate($(this.element).val())) {
						this.updateValue();
						this.closeDatePicker();
					} else {
						this.openDatePicker();
					}
				} else {
					this.value = null;
				}
			});
		} else {
			$(this.element).on("focusin", () => {
				this.openDatePicker();
			});
		}
		if (this.options.showIcon) {
			this.element.classList.add("left");
			this.calendarIcon = document.createElement("i");
			this.calendarIcon.classList.add("right");
			this.calendarIcon.classList.add("material-icons");
			this.calendarIcon.textContent = "today";
			this.element.parentNode.insertBefore(this.calendarIcon, this.element.nextSibling);
			$(this.calendarIcon).on("click", this.onCalendarIconClick);

			options.iconClass = options.iconClass || "std-icon-fixup";
			this.calendarIcon.classList.add(options.iconClass);
		}

		this.setErrorTextAttribute();
	}

	parseDate(value) {
		if (this.parsers && this.parsers.length && this.parsers.length > 0) {
			for (const parser of this.parsers) {
				if (parser.canParse(value)) {
					const parsedDate = parser.parse(value);
					if (parsedDate !== null) {
						this.picker.set("select", parsedDate);
						return true;
					}
				}
			}
		}
		return false;
	}

	detached() {
		if (this.options.showIcon) {
			this.element.classList.remove("left");
			$(this.calendarIcon).off("click", this.onCalendarIconClick);
			$(this.calendarIcon).remove();
			this.calendarIcon = null;
		}
		if (this.picker) {
			this.picker.stop();
		}
		this.element.mdUnrenderValidateResults = undefined;
		this.element.mdRenderValidateResults = undefined;
	}

	openDatePicker() {
		$(this.element).pickadate("open");
	}

	closeDatePicker() {
		$(this.element).pickadate("close");
	}

	updateValue() {
		let selected = this.picker.get("select");
		this.value = selected ? selected.obj : null;
	}

	onClose() {
		this.updateValue();
		fireEvent(this.element, "blur");
	}

	onCalendarIconClick(event) {
		event.stopPropagation();
		this.openDatePicker();
	}

	// onSet(value) {
	//   //handle this ourselves since Dogfalo removed this functionality from the original plugin
	//   if (this.options && this.options.closeOnSelect && value.select) {
	//     this.value = value.select;
	//     this.picker.close();
	//   }
	//   // this.value = new Date(value.select);
	// }

	showErrortextChanged() {
		this.setErrorTextAttribute();
	}

	setErrorTextAttribute() {
		if (!this.element) {
			return;
		}
		this.log.debug("showErrortextChanged: " + this.showErrortext);
		this.element.setAttribute("data-show-errortext", getBooleanFromAttributeValue(this.showErrortext).toString());
	}

	mdUnrenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		for (let result of results) {
			if (!result.valid) {
				renderer.removeMessage(this.element.parentElement, result);
			}
		}
		renderer.removeValidationClasses(this.element);
	}

	mdRenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		if (!(this.element.hasAttribute("data-show-errortext") && this.element.getAttribute("data-show-errortext") === "false")) {
			for (let result of results) {
				if (!result.valid) {
					renderer.addMessage(this.element.parentElement, result);
				}
			}
		}
		renderer.addValidationClasses(this.element, !results.find(x => !x.valid));
	}
}
