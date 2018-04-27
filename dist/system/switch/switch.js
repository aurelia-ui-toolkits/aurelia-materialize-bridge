System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, au, MdSwitch;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdSwitch = /** @class */ (function () {
                function MdSwitch(element) {
                    var _this = this;
                    this.element = element;
                    this.mdReadonly = false;
                    this.mdLabelOff = "Off";
                    this.mdLabelOn = "On";
                    this.handleChange = function () {
                        _this.mdChecked = _this.checkbox.checked;
                        au.fireEvent(_this.element, "blur");
                    };
                }
                MdSwitch.prototype.mdCheckedChanged = function (newValue) {
                    if (this.checkbox) {
                        this.checkbox.checked = !!newValue;
                    }
                };
                MdSwitch.prototype.attached = function () {
                    this.checkbox.checked = this.mdChecked;
                    if (this.mdDisabled) {
                        this.checkbox.disabled = true;
                    }
                    this.checkbox.addEventListener("change", this.handleChange);
                };
                MdSwitch.prototype.detached = function () {
                    if (this.checkbox) {
                        this.checkbox.removeEventListener("change", this.handleChange);
                    }
                };
                MdSwitch.prototype.blur = function () {
                    au.fireEvent(this.element, "blur");
                };
                tslib_1.__decorate([
                    au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdSwitch.prototype, "mdChecked", void 0);
                tslib_1.__decorate([
                    au.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdSwitch.prototype, "mdDisabled", void 0);
                tslib_1.__decorate([
                    au.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdSwitch.prototype, "mdReadonly", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdSwitch.prototype, "mdLabelOff", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdSwitch.prototype, "mdLabelOn", void 0);
                MdSwitch = tslib_1.__decorate([
                    au.customElement("md-switch"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdSwitch);
                return MdSwitch;
            }());
            exports_1("MdSwitch", MdSwitch);
        }
    };
});
//# sourceMappingURL=switch.js.map