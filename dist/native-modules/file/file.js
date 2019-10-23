import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
var MdFileInput = /** @class */ (function () {
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
    __decorate([
        au.ato.bindable.stringMd,
        __metadata("design:type", Object)
    ], MdFileInput.prototype, "caption", void 0);
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdFileInput.prototype, "multiple", void 0);
    __decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.twoWay }),
        __metadata("design:type", String)
    ], MdFileInput.prototype, "labelValue", void 0);
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], MdFileInput.prototype, "disabled", void 0);
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], MdFileInput.prototype, "readonly", void 0);
    MdFileInput = __decorate([
        au.customElement("md-file"),
        au.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdFileInput);
    return MdFileInput;
}());
export { MdFileInput };
//# sourceMappingURL=file.js.map