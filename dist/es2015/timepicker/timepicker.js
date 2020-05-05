var MdTimePicker_1;
import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdTimePicker = MdTimePicker_1 = class MdTimePicker {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.controlId = `md-timepicker-${MdTimePicker_1.id++}`;
        this.validateResults = [];
        this.label = "";
        this.placeholder = "";
        this.showErrortext = true;
        this.calendarIcon = null;
        this.done = () => {
            this.setValue(this.input.value);
            au.fireEvent(this.element, "blur");
        };
        this.mdUnrenderValidateResults = (results, renderer) => {
            this.validateResults = this.validateResults.filter(x => !results.find(y => y.id === x.id));
            this.validationClass = undefined;
        };
        this.mdRenderValidateResults = (results, renderer) => {
            if (this.showErrortext) {
                this.validateResults.push(...results.filter(x => !x.valid));
            }
            this.validationClass = results.find(x => !x.valid) ? "invalid" : "valid";
        };
    }
    valueChanged() {
        if (this.valueChangedSuppress) {
            this.valueChangedSuppress = false;
            return;
        }
        this.input.value = this.value;
    }
    setValue(newValue) {
        if (this.value !== newValue) {
            this.valueChangedSuppress = true;
            this.value = newValue;
        }
    }
    attached() {
        if (this.placeholder) {
            this.input.setAttribute("placeholder", this.placeholder);
        }
        let options = {
            duration: this.duration,
            container: this.container,
            showClearBtn: this.showClearBtn,
            defaultTime: this.defaultTime,
            fromNow: this.fromNow,
            i18n: this.i18n,
            autoClose: this.autoClose,
            twelveHour: this.twelveHour,
            vibrate: this.vibrate,
            onSelect: (hour, minute) => au.fireMaterializeEvent(this.element, "select", { hour, minute }),
            onOpenStart: () => au.fireMaterializeEvent(this.element, "open"),
            onOpenEnd: () => au.fireMaterializeEvent(this.element, "close"),
            onCloseStart: () => au.fireMaterializeEvent(this.element, "open"),
            onCloseEnd: () => au.fireMaterializeEvent(this.element, "close")
        };
        au.cleanOptions(options);
        this.instance = new M.Timepicker(this.input, options);
        this.input.addEventListener("change", this.done);
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
        this.valueChanged();
        au.updateLabel(this.input, this.labelElement);
    }
    bind() {
        //
    }
    detached() {
        this.input.removeEventListener("change", this.done);
        this.instance.destroy();
        this.validateResults = [];
        this.validationClass = undefined;
        this.element.mdUnrenderValidateResults = undefined;
        this.element.mdRenderValidateResults = undefined;
    }
    open() {
        this.instance.open();
    }
    close() {
        this.instance.close();
    }
};
MdTimePicker.id = 0;
__decorate([
    au.ato.bindable.stringMd,
    __metadata("design:type", String)
], MdTimePicker.prototype, "label", void 0);
__decorate([
    au.ato.bindable.booleanMd,
    __metadata("design:type", Boolean)
], MdTimePicker.prototype, "inline", void 0);
__decorate([
    au.ato.bindable.stringMd,
    __metadata("design:type", String)
], MdTimePicker.prototype, "placeholder", void 0);
__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdTimePicker.prototype, "duration", void 0);
__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", String)
], MdTimePicker.prototype, "container", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdTimePicker.prototype, "showClearBtn", void 0);
__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", String)
], MdTimePicker.prototype, "defaultTime", void 0);
__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdTimePicker.prototype, "fromNow", void 0);
__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdTimePicker.prototype, "i18n", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdTimePicker.prototype, "autoClose", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdTimePicker.prototype, "twelveHour", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdTimePicker.prototype, "vibrate", void 0);
__decorate([
    au.ato.bindable.booleanMd,
    __metadata("design:type", Boolean)
], MdTimePicker.prototype, "showErrortext", void 0);
__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
    __metadata("design:type", String)
], MdTimePicker.prototype, "value", void 0);
MdTimePicker = MdTimePicker_1 = __decorate([
    au.autoinject,
    au.customElement("md-timepicker"),
    __metadata("design:paramtypes", [Element, au.TaskQueue])
], MdTimePicker);
export { MdTimePicker };
//# sourceMappingURL=timepicker.js.map