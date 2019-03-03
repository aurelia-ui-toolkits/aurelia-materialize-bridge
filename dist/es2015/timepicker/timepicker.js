import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdTimePicker = /** @class */ (function () {
    function MdTimePicker(element, taskQueue) {
        var _this = this;
        this.element = element;
        this.taskQueue = taskQueue;
        this.controlId = "md-timepicker-" + MdTimePicker_1.id++;
        this.label = "";
        this.placeholder = "";
        this.showErrortext = true;
        this.calendarIcon = null;
        this.done = function () {
            _this.setValue(_this.input.value);
            au.fireEvent(_this.element, "blur");
        };
        this.mdUnrenderValidateResults = function (results, renderer) {
            var e_1, _a;
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
        };
        this.mdRenderValidateResults = function (results, renderer) {
            var e_2, _a;
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
        };
    }
    MdTimePicker_1 = MdTimePicker;
    MdTimePicker.prototype.valueChanged = function () {
        if (this.valueChangedSuppress) {
            this.valueChangedSuppress = false;
            return;
        }
        this.input.value = this.value;
    };
    MdTimePicker.prototype.setValue = function (newValue) {
        if (this.value !== newValue) {
            this.valueChangedSuppress = true;
            this.value = newValue;
        }
    };
    MdTimePicker.prototype.attached = function () {
        var _this = this;
        if (this.placeholder) {
            this.input.setAttribute("placeholder", this.placeholder);
        }
        var options = {
            duration: this.duration,
            container: this.container,
            showClearBtn: this.showClearBtn,
            defaultTime: this.defaultTime,
            fromNow: this.fromNow,
            i18n: this.i18n,
            autoClose: this.autoClose,
            twelveHour: this.twelveHour,
            vibrate: this.vibrate,
            onSelect: function (hour, minute) { return au.fireMaterializeEvent(_this.element, "select", { hour: hour, minute: minute }); },
            onOpenStart: function () { return au.fireMaterializeEvent(_this.element, "open"); },
            onOpenEnd: function () { return au.fireMaterializeEvent(_this.element, "close"); },
            onCloseStart: function () { return au.fireMaterializeEvent(_this.element, "open"); },
            onCloseEnd: function () { return au.fireMaterializeEvent(_this.element, "close"); }
        };
        au.cleanOptions(options);
        this.instance = new M.Timepicker(this.input, options);
        this.input.addEventListener("change", this.done);
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
        this.valueChanged();
        au.updateLabel(this.input, this.labelElement);
    };
    MdTimePicker.prototype.bind = function () {
        //
    };
    MdTimePicker.prototype.detached = function () {
        this.input.removeEventListener("change", this.done);
        au.MaterializeFormValidationRenderer.removeValidation(this.inputField, this.input);
        this.instance.destroy();
        this.element.mdUnrenderValidateResults = undefined;
        this.element.mdRenderValidateResults = undefined;
    };
    MdTimePicker.prototype.open = function () {
        this.instance.open();
    };
    MdTimePicker.prototype.close = function () {
        this.instance.close();
    };
    var MdTimePicker_1;
    MdTimePicker.id = 0;
    tslib_1.__decorate([
        au.ato.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdTimePicker.prototype, "label", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdTimePicker.prototype, "inline", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdTimePicker.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdTimePicker.prototype, "duration", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdTimePicker.prototype, "container", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdTimePicker.prototype, "showClearBtn", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdTimePicker.prototype, "defaultTime", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdTimePicker.prototype, "fromNow", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdTimePicker.prototype, "i18n", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdTimePicker.prototype, "autoClose", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdTimePicker.prototype, "twelveHour", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdTimePicker.prototype, "vibrate", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdTimePicker.prototype, "showErrortext", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", String)
    ], MdTimePicker.prototype, "value", void 0);
    MdTimePicker = MdTimePicker_1 = tslib_1.__decorate([
        au.autoinject,
        au.customElement("md-timepicker"),
        tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
    ], MdTimePicker);
    return MdTimePicker;
}());
export { MdTimePicker };
//# sourceMappingURL=timepicker.js.map