System.register(["aurelia-framework", "../common/attributes", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributes_1, events_1, MdSwitch;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            MdSwitch = class MdSwitch {
                constructor(element) {
                    this.element = element;
                    this.mdReadonly = false;
                    this.mdLabelOff = "Off";
                    this.mdLabelOn = "On";
                    this.handleChange = this.handleChange.bind(this);
                }
                mdCheckedChanged(newValue) {
                    if (this.checkbox) {
                        this.checkbox.checked = !!newValue;
                    }
                }
                mdDisabledChanged(newValue) {
                    if (this.checkbox) {
                        this.checkbox.disabled = !!newValue;
                    }
                }
                attached() {
                    this.checkbox.checked = attributes_1.getBooleanFromAttributeValue(this.mdChecked);
                    if (attributes_1.getBooleanFromAttributeValue(this.mdDisabled)) {
                        this.checkbox.disabled = true;
                    }
                    this.checkbox.addEventListener("change", this.handleChange);
                    this.mdReadonly = attributes_1.getBooleanFromAttributeValue(this.mdReadonly);
                }
                detached() {
                    this.checkbox.removeEventListener("change", this.handleChange);
                }
                handleChange() {
                    this.mdChecked = this.checkbox.checked;
                    events_1.fireEvent(this.element, "blur");
                }
                blur() {
                    events_1.fireEvent(this.element, "blur");
                }
            };
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                __metadata("design:type", Object)
            ], MdSwitch.prototype, "mdChecked", void 0);
            __decorate([
                aurelia_framework_1.bindable,
                __metadata("design:type", Object)
            ], MdSwitch.prototype, "mdDisabled", void 0);
            __decorate([
                aurelia_framework_1.bindable,
                __metadata("design:type", Object)
            ], MdSwitch.prototype, "mdReadonly", void 0);
            __decorate([
                aurelia_framework_1.bindable,
                __metadata("design:type", String)
            ], MdSwitch.prototype, "mdLabelOff", void 0);
            __decorate([
                aurelia_framework_1.bindable,
                __metadata("design:type", String)
            ], MdSwitch.prototype, "mdLabelOn", void 0);
            MdSwitch = __decorate([
                aurelia_framework_1.customElement("md-switch"),
                aurelia_framework_1.autoinject,
                __metadata("design:paramtypes", [Element])
            ], MdSwitch);
            exports_1("MdSwitch", MdSwitch);
        }
    };
});
