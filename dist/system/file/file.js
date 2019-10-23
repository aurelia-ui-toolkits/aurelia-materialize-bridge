System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdFileInput;
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
            MdFileInput = /** @class */ (function () {
                function MdFileInput(element) {
                    var _this = this;
                    this.element = element;
                    this.caption = "File";
                    this.multiple = false;
                    this.labelValue = "";
                    this.disabled = false;
                    this.readonly = false;
                    this.suspendUpdate = false;
                    this.handleChangeFromNativeInput = function () {
                        if (!_this.suspendUpdate) {
                            _this.suspendUpdate = true;
                            au.fireEvent(_this.filePath, "change", { files: _this.files });
                            au.fireMaterializeEvent(_this.filePath, "change", { files: _this.files });
                            _this.suspendUpdate = false;
                        }
                    };
                }
                MdFileInput.prototype.attached = function () {
                    this.filePath.addEventListener("change", this.handleChangeFromNativeInput);
                };
                MdFileInput.prototype.detached = function () {
                    this.filePath.removeEventListener("change", this.handleChangeFromNativeInput);
                };
                tslib_1.__decorate([
                    au.ato.bindable.stringMd,
                    tslib_1.__metadata("design:type", Object)
                ], MdFileInput.prototype, "caption", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdFileInput.prototype, "multiple", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", String)
                ], MdFileInput.prototype, "labelValue", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdFileInput.prototype, "disabled", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdFileInput.prototype, "readonly", void 0);
                MdFileInput = tslib_1.__decorate([
                    au.customElement("md-file"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdFileInput);
                return MdFileInput;
            }());
            exports_1("MdFileInput", MdFileInput);
        }
    };
});
//# sourceMappingURL=file.js.map