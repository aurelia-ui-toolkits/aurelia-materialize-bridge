System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, au, MdRadio;
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
            MdRadio = /** @class */ (function () {
                function MdRadio(element) {
                    this.element = element;
                    this.mdDisabled = false;
                    this.mdReadonly = false;
                    this.mdGap = false;
                    this.mdName = "";
                    this.mdValue = "";
                    this.controlId = "md-radio-" + MdRadio_1.id++;
                }
                MdRadio_1 = MdRadio;
                MdRadio.prototype.mdDisabledChanged = function (newValue) {
                    if (this.radio) {
                        this.radio.disabled = newValue;
                    }
                };
                MdRadio.prototype.attached = function () {
                    this.attributeManager = new au.AttributeManager(this.radio);
                    if (this.mdGap) {
                        this.attributeManager.addClasses("with-gap");
                    }
                    if (this.mdDisabled) {
                        this.radio.disabled = true;
                    }
                };
                MdRadio.prototype.detached = function () {
                    this.attributeManager.removeClasses(["with-gap", "disabled"]);
                };
                MdRadio.id = 0;
                tslib_1.__decorate([
                    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Object)
                ], MdRadio.prototype, "mdChecked", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdRadio.prototype, "mdDisabled", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdRadio.prototype, "mdReadonly", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdRadio.prototype, "mdGap", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdRadio.prototype, "mdModel", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.stringMd,
                    tslib_1.__metadata("design:type", String)
                ], MdRadio.prototype, "mdName", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.stringMd,
                    tslib_1.__metadata("design:type", String)
                ], MdRadio.prototype, "mdValue", void 0);
                MdRadio = MdRadio_1 = tslib_1.__decorate([
                    au.customElement("md-radio"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdRadio);
                return MdRadio;
                var MdRadio_1;
            }());
            exports_1("MdRadio", MdRadio);
        }
    };
});
//# sourceMappingURL=radio.js.map