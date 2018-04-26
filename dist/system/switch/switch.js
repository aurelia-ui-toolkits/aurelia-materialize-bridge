System.register(["tslib", "aurelia-framework", "../common/attributes", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributes_1, events_1, MdSwitch;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
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
            MdSwitch = /** @class */ (function () {
                function MdSwitch(element) {
                    this.element = element;
                    this.mdReadonly = false;
                    this.mdLabelOff = "Off";
                    this.mdLabelOn = "On";
                    this.handleChange = this.handleChange.bind(this);
                }
                MdSwitch.prototype.mdCheckedChanged = function (newValue) {
                    if (this.checkbox) {
                        this.checkbox.checked = !!newValue;
                    }
                };
                MdSwitch.prototype.mdDisabledChanged = function (newValue) {
                    if (this.checkbox) {
                        this.checkbox.disabled = !!newValue;
                    }
                };
                MdSwitch.prototype.attached = function () {
                    this.checkbox.checked = attributes_1.getBooleanFromAttributeValue(this.mdChecked);
                    if (attributes_1.getBooleanFromAttributeValue(this.mdDisabled)) {
                        this.checkbox.disabled = true;
                    }
                    this.checkbox.addEventListener("change", this.handleChange);
                    this.mdReadonly = attributes_1.getBooleanFromAttributeValue(this.mdReadonly);
                };
                MdSwitch.prototype.detached = function () {
                    if (this.checkbox) {
                        this.checkbox.removeEventListener("change", this.handleChange);
                    }
                };
                MdSwitch.prototype.handleChange = function () {
                    this.mdChecked = this.checkbox.checked;
                    events_1.fireEvent(this.element, "blur");
                };
                MdSwitch.prototype.blur = function () {
                    events_1.fireEvent(this.element, "blur");
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Object)
                ], MdSwitch.prototype, "mdChecked", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdSwitch.prototype, "mdDisabled", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdSwitch.prototype, "mdReadonly", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdSwitch.prototype, "mdLabelOff", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdSwitch.prototype, "mdLabelOn", void 0);
                MdSwitch = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-switch"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdSwitch);
                return MdSwitch;
            }());
            exports_1("MdSwitch", MdSwitch);
        }
    };
});
//# sourceMappingURL=switch.js.map