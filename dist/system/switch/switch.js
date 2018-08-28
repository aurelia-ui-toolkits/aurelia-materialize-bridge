System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdSwitch;
    var __moduleName = context_1 && context_1.id;
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
                    this.readonly = false;
                    this.labelOff = "Off";
                    this.labelOn = "On";
                    this.handleChange = function () {
                        _this.checked = _this.checkbox.checked;
                        au.fireEvent(_this.element, "blur");
                    };
                }
                MdSwitch.prototype.checkedChanged = function (newValue) {
                    if (this.checkbox) {
                        this.checkbox.checked = !!newValue;
                    }
                };
                MdSwitch.prototype.disabledChanged = function () {
                    if (this.checkbox) {
                        this.checkbox.disabled = this.disabled;
                    }
                };
                MdSwitch.prototype.attached = function () {
                    this.checkbox.checked = this.checked;
                    this.disabledChanged();
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
                    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdSwitch.prototype, "checked", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdSwitch.prototype, "disabled", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdSwitch.prototype, "readonly", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdSwitch.prototype, "labelOff", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdSwitch.prototype, "labelOn", void 0);
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