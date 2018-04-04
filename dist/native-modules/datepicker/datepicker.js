import * as tslib_1 from "tslib";
import { bindable, customAttribute, autoinject, bindingMode } from "aurelia-framework";
import { TaskQueue } from "aurelia-task-queue";
import { getLogger } from "aurelia-logging";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { DatePickerDefaultParser } from "./datepicker-default-parser";
import { fireEvent } from "../common/events";
var MdDatePicker = /** @class */ (function () {
    function MdDatePicker(element, taskQueue, defaultParser) {
        var _this = this;
        this.element = element;
        this.taskQueue = taskQueue;
        this.defaultParser = defaultParser;
        this.parsers = [];
        this.selectMonths = true;
        this.selectYears = 15;
        this.options = {};
        this.showErrortext = true;
        this.calendarIcon = null;
        this.mdUnrenderValidateResults = function (results, renderer) {
            try {
                for (var results_1 = tslib_1.__values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                    var result = results_1_1.value;
                    if (!result.valid) {
                        renderer.removeMessage(_this.element.parentElement, result);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            renderer.removeValidationClasses(_this.element);
            var e_1, _a;
        };
        this.mdRenderValidateResults = function (results, renderer) {
            if (!(_this.element.hasAttribute("data-show-errortext") && _this.element.getAttribute("data-show-errortext") === "false")) {
                try {
                    for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                        var result = results_2_1.value;
                        if (!result.valid) {
                            renderer.addMessage(_this.element.parentElement, result);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (results_2_1 && !results_2_1.done && (_a = results_2.return)) _a.call(results_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            renderer.addValidationClasses(_this.element, !results.find(function (x) { return !x.valid; }));
            var e_2, _a;
        };
        this.log = getLogger("md-datepicker");
        this.parsers.push(defaultParser);
        this.onCalendarIconClick = this.onCalendarIconClick.bind(this);
    }
    MdDatePicker.prototype.valueChanged = function (newValue) {
        if (this.options.max && newValue > this.options.max) {
            this.value = this.options.max;
        }
        this.log.debug("selectedChanged", this.value);
        // this.taskQueue.queueTask(() => {
        this.picker.set("select", this.value);
        // });
    };
    MdDatePicker.prototype.attached = function () {
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
    };
    MdDatePicker.prototype.bind = function () {
        var _this = this;
        this.selectMonths = getBooleanFromAttributeValue(this.selectMonths);
        if (typeof this.selectYears === "string") {
            this.selectYears = parseInt(this.selectYears, 10);
        }
        this.element.classList.add("date-picker");
        var options = {
            selectMonths: this.selectMonths,
            selectYears: this.selectYears,
            onClose: function () {
                // see https://github.com/Dogfalo/materialize/issues/2067
                // and: https://github.com/amsul/pickadate.js/issues/160
                $(document.activeElement).blur();
            }
        };
        var i18n = {};
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
                options.onClose = function () {
                    _this.options.onClose();
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
            $(this.element).on("keydown", function (e) {
                if (e.keyCode === 13 || e.keyCode === 9) {
                    if (_this.parseDate($(_this.element).val())) {
                        _this.updateValue();
                        _this.closeDatePicker();
                    }
                    else {
                        _this.openDatePicker();
                    }
                }
                else {
                    _this.value = null;
                }
            });
        }
        else {
            $(this.element).on("focusin", function () {
                _this.openDatePicker();
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
    };
    MdDatePicker.prototype.parseDate = function (value) {
        if (this.parsers && this.parsers.length && this.parsers.length > 0) {
            try {
                for (var _a = tslib_1.__values(this.parsers), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var parser = _b.value;
                    if (parser.canParse(value)) {
                        var parsedDate = parser.parse(value);
                        if (parsedDate !== null) {
                            this.picker.set("select", parsedDate);
                            return true;
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return false;
        var e_3, _c;
    };
    MdDatePicker.prototype.detached = function () {
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
    };
    MdDatePicker.prototype.openDatePicker = function () {
        $(this.element).pickadate("open");
    };
    MdDatePicker.prototype.closeDatePicker = function () {
        $(this.element).pickadate("close");
    };
    MdDatePicker.prototype.updateValue = function () {
        var selected = this.picker.get("select");
        this.value = selected ? selected.obj : null;
    };
    MdDatePicker.prototype.onClose = function () {
        this.updateValue();
        fireEvent(this.element, "blur");
    };
    MdDatePicker.prototype.onCalendarIconClick = function (event) {
        event.stopPropagation();
        this.openDatePicker();
    };
    // onSet(value) {
    //   //handle this ourselves since Dogfalo removed this functionality from the original plugin
    //   if (this.options && this.options.closeOnSelect && value.select) {
    //     this.value = value.select;
    //     this.picker.close();
    //   }
    //   // this.value = new Date(value.select);
    // }
    MdDatePicker.prototype.showErrortextChanged = function () {
        this.setErrorTextAttribute();
    };
    MdDatePicker.prototype.setErrorTextAttribute = function () {
        if (!this.element) {
            return;
        }
        this.log.debug("showErrortextChanged: " + this.showErrortext);
        this.element.setAttribute("data-show-errortext", getBooleanFromAttributeValue(this.showErrortext).toString());
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Element)
    ], MdDatePicker.prototype, "container", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdDatePicker.prototype, "translation", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Date)
    ], MdDatePicker.prototype, "value", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Array)
    ], MdDatePicker.prototype, "parsers", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDatePicker.prototype, "selectMonths", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDatePicker.prototype, "selectYears", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDatePicker.prototype, "options", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdDatePicker.prototype, "showErrortext", void 0);
    MdDatePicker = tslib_1.__decorate([
        autoinject,
        customAttribute("md-datepicker"),
        tslib_1.__metadata("design:paramtypes", [Element, TaskQueue, DatePickerDefaultParser])
    ], MdDatePicker);
    return MdDatePicker;
}());
export { MdDatePicker };
