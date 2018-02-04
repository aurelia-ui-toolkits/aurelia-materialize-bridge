System.register(["aurelia-framework", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributes_1, MdTimePicker;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            }
        ],
        execute: function () {
            MdTimePicker = class MdTimePicker {
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
            exports_1("MdTimePicker", MdTimePicker);
        }
    };
});
