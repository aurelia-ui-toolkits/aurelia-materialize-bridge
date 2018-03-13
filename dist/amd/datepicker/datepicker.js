var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-task-queue", "aurelia-logging", "../common/attributes", "./datepicker-default-parser", "../common/events"], function (require, exports, aurelia_framework_1, aurelia_task_queue_1, aurelia_logging_1, attributes_1, datepicker_default_parser_1, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdDatePicker = class MdDatePicker {
        constructor(element, taskQueue, defaultParser) {
            this.element = element;
            this.taskQueue = taskQueue;
            this.defaultParser = defaultParser;
            this.parsers = [];
            this.selectMonths = true;
            this.selectYears = 15;
            this.options = {};
            this.showErrortext = true;
            this.calendarIcon = null;
            this.mdUnrenderValidateResults = (results, renderer) => {
                for (let result of results) {
                    if (!result.valid) {
                        renderer.removeMessage(this.element.parentNode, result);
                    }
                }
                renderer.removeValidationClasses(this.element);
            };
            this.mdRenderValidateResults = (results, renderer) => {
                if (!(this.element.hasAttribute("data-show-errortext") && this.element.getAttribute("data-show-errortext") === "false")) {
                    for (let result of results) {
                        if (!result.valid) {
                            renderer.addMessage(this.element.parentNode, result);
                        }
                    }
                }
                renderer.addValidationClasses(this.element, !results.find(x => !x.valid));
            };
            this.log = aurelia_logging_1.getLogger("md-datepicker");
            this.parsers.push(defaultParser);
            this.onCalendarIconClick = this.onCalendarIconClick.bind(this);
        }
        valueChanged(newValue) {
            if (this.options.max && newValue > this.options.max) {
                this.value = this.options.max;
            }
            this.log.debug("selectedChanged", this.value);
            // this.taskQueue.queueTask(() => {
            this.picker.set("select", this.value);
            // });
        }
        attached() {
            this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
            this.element.mdRenderValidateResults = this.mdRenderValidateResults;
        }
        bind() {
            this.selectMonths = attributes_1.getBooleanFromAttributeValue(this.selectMonths);
            if (typeof this.selectYears === "string") {
                this.selectYears = parseInt(this.selectYears, 10);
            }
            this.element.classList.add("date-picker");
            let options = {
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
                        }
                        else {
                            this.openDatePicker();
                        }
                    }
                    else {
                        this.value = null;
                    }
                });
            }
            else {
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
            events_1.fireEvent(this.element, "blur");
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
            this.element.setAttribute("data-show-errortext", attributes_1.getBooleanFromAttributeValue(this.showErrortext).toString());
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Element)
    ], MdDatePicker.prototype, "container", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdDatePicker.prototype, "translation", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Date)
    ], MdDatePicker.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Array)
    ], MdDatePicker.prototype, "parsers", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdDatePicker.prototype, "selectMonths", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdDatePicker.prototype, "selectYears", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdDatePicker.prototype, "options", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdDatePicker.prototype, "showErrortext", void 0);
    MdDatePicker = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customAttribute("md-datepicker"),
        __metadata("design:paramtypes", [Element, aurelia_task_queue_1.TaskQueue, datepicker_default_parser_1.DatePickerDefaultParser])
    ], MdDatePicker);
    exports.MdDatePicker = MdDatePicker;
});
