import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdDatePicker = /** @class */ (function () {
    function MdDatePicker(element, taskQueue) {
        var _this = this;
        this.element = element;
        this.taskQueue = taskQueue;
        this.controlId = "md-datepicker-" + MdDatePicker_1.id++;
        this.label = "";
        this.placeholder = "";
        this.showErrortext = true;
        this.calendarIcon = null;
        this.done = function () {
            _this.setValue(_this.instance.date);
            au.fireEvent(_this.element, "blur");
        };
        this.mdUnrenderValidateResults = function (results, renderer) {
            try {
                for (var results_1 = tslib_1.__values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                    var result = results_1_1.value;
                    if (!result.valid) {
                        renderer.removeMessage(_this.inputField, result);
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
            renderer.removeValidationClasses(_this.input);
            var e_1, _a;
        };
        this.mdRenderValidateResults = function (results, renderer) {
            if (_this.showErrortext && _this.inputField) {
                try {
                    for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                        var result = results_2_1.value;
                        if (!result.valid) {
                            renderer.addMessage(_this.inputField, result);
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
            renderer.addValidationClasses(_this.input, !results.find(function (x) { return !x.valid; }));
            var e_2, _a;
        };
    }
    MdDatePicker_1 = MdDatePicker;
    MdDatePicker.prototype.valueChanged = function () {
        var _this = this;
        if (this.valueChangedSuppress) {
            this.valueChangedSuppress = false;
            return;
        }
        this.instance.setDate(this.value);
        this.instance.setInputValue();
        // the widget can transform the value internally, so we need to update the final result
        this.taskQueue.queueTask(function () {
            _this.setValue(_this.instance.date);
        });
    };
    MdDatePicker.prototype.setValue = function (newValue) {
        if (this.value !== newValue) {
            this.valueChangedSuppress = true;
            this.value = newValue;
        }
    };
    MdDatePicker.prototype.attached = function () {
        var _this = this;
        if (this.placeholder) {
            this.input.setAttribute("placeholder", this.placeholder);
        }
        var options = {
            autoClose: this.autoClose,
            format: this.format,
            parse: this.parse,
            defaultDate: this.defaultDate,
            setDefaultDate: this.setDefaultDate,
            disableWeekends: this.disableWeekends,
            disableDayFn: this.disableDayFn,
            firstDay: this.firstDay,
            minDate: this.minDate,
            maxDate: this.maxDate,
            yearRange: this.yearRange,
            isRTL: this.isRTL,
            showMonthAfterYear: this.showMonthAfterYear,
            showDaysInNextAndPreviousMonths: this.showDaysInNextAndPreviousMonths,
            container: this.container,
            showClearBtn: this.showClearBtn,
            i18n: this.i18n,
            events: this.events,
            onSelect: function (selectedDate) { return au.fireMaterializeEvent(_this.element, "select", { selectedDate: selectedDate }); },
            onOpen: function () { return au.fireMaterializeEvent(_this.element, "open"); },
            onClose: function () { return au.fireMaterializeEvent(_this.element, "close"); },
            onDraw: function () { return au.fireMaterializeEvent(_this.element, "draw"); }
        };
        au.cleanOptions(options);
        this.instance = new M.Datepicker(this.input, options);
        // doneBtn is not documented but this is the cleanest way to get the value when a user actually confirmed the date
        this.instance.doneBtn.addEventListener("click", this.done);
        if (this.instance.clearBtn) {
            this.instance.clearBtn.addEventListener("click", this.done);
        }
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
        this.valueChanged();
    };
    MdDatePicker.prototype.bind = function () {
        //
    };
    MdDatePicker.prototype.detached = function () {
        this.instance.doneBtn.removeEventListener("click", this.done);
        if (this.instance.clearBtn) {
            this.instance.clearBtn.removeEventListener("click", this.done);
        }
        // this.input.removeEventListener("change", this.onInputChange);
        this.instance.destroy();
        this.element.mdUnrenderValidateResults = undefined;
        this.element.mdRenderValidateResults = undefined;
    };
    MdDatePicker.prototype.open = function () {
        this.instance.open();
    };
    MdDatePicker.prototype.close = function () {
        this.instance.close();
    };
    MdDatePicker.id = 0;
    tslib_1.__decorate([
        au.ato.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdDatePicker.prototype, "label", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdDatePicker.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDatePicker.prototype, "autoClose", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdDatePicker.prototype, "format", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Function)
    ], MdDatePicker.prototype, "parse", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Date)
    ], MdDatePicker.prototype, "defaultDate", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDatePicker.prototype, "setDefaultDate", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDatePicker.prototype, "disableWeekends", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Function)
    ], MdDatePicker.prototype, "disableDayFn", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdDatePicker.prototype, "firstDay", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Date)
    ], MdDatePicker.prototype, "minDate", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Date)
    ], MdDatePicker.prototype, "maxDate", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDatePicker.prototype, "yearRange", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDatePicker.prototype, "isRTL", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDatePicker.prototype, "showMonthAfterYear", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDatePicker.prototype, "showDaysInNextAndPreviousMonths", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Element)
    ], MdDatePicker.prototype, "container", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdDatePicker.prototype, "showClearBtn", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDatePicker.prototype, "i18n", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Array)
    ], MdDatePicker.prototype, "events", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdDatePicker.prototype, "showErrortext", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Date)
    ], MdDatePicker.prototype, "value", void 0);
    MdDatePicker = MdDatePicker_1 = tslib_1.__decorate([
        au.autoinject,
        au.customElement("md-datepicker"),
        tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
    ], MdDatePicker);
    return MdDatePicker;
    var MdDatePicker_1;
}());
export { MdDatePicker };
//# sourceMappingURL=datepicker.js.map