define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdTimePicker = /** @class */ (function () {
        function MdTimePicker(element, taskQueue) {
            var _this = this;
            this.element = element;
            this.taskQueue = taskQueue;
            this.controlId = "md-timepicker-" + MdTimePicker_1.id++;
            this.validateResults = [];
            this.label = "";
            this.placeholder = "";
            this.showErrortext = true;
            this.calendarIcon = null;
            this.done = function () {
                _this.setValue(_this.input.value);
                au.fireEvent(_this.element, "blur");
            };
            this.mdUnrenderValidateResults = function (results, renderer) {
                _this.validateResults = _this.validateResults.filter(function (x) { return !results.find(function (y) { return y.id === x.id; }); });
                _this.validationClass = undefined;
            };
            this.mdRenderValidateResults = function (results, renderer) {
                var _a;
                if (_this.showErrortext) {
                    (_a = _this.validateResults).push.apply(_a, tslib_1.__spread(results.filter(function (x) { return !x.valid; })));
                }
                _this.validationClass = results.find(function (x) { return !x.valid; }) ? "invalid" : "valid";
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
            this.instance.destroy();
            this.validateResults = [];
            this.validationClass = undefined;
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
    exports.MdTimePicker = MdTimePicker;
});
//# sourceMappingURL=timepicker.js.map