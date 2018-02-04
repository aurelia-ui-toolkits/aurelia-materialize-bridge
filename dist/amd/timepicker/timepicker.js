var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "../common/attributes"], function (require, exports, aurelia_framework_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import {fireEvent} from '../common/events';
    // Materialize doesn't present the full api.
    // See here for full api: https://github.com/weareoutman/clockpicker
    let MdTimePicker = class MdTimePicker {
        constructor(element) {
            this.twelveHour = false;
            this.element = element;
            this.updateFromElement = this.updateFromElement.bind(this);
        }
        bind() {
            this.twelveHour = attributes_1.getBooleanFromAttributeValue(this.twelveHour);
        }
        attached() {
            let options = {
                twelvehour: this.twelveHour
            };
            $(this.element).pickatime(options);
            this.element.value = this.value;
            $(this.element).on("change", this.updateFromElement);
        }
        detached() {
            $(this.element).off("change", this.updateFromElement);
            $(this.element).pickatime("remove");
        }
        updateFromElement() {
            this.value = this.element.value;
        }
        valueChanged(newValue) {
            this.element.value = newValue;
        }
    };
    __decorate([
        aurelia_framework_1.bindable
    ], MdTimePicker.prototype, "twelveHour", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
    ], MdTimePicker.prototype, "value", void 0);
    MdTimePicker = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customAttribute("md-timepicker")
    ], MdTimePicker);
    exports.MdTimePicker = MdTimePicker;
});
