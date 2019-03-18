import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdFileInput = class MdFileInput {
    constructor(element) {
        this.element = element;
        this.caption = "File";
        this.multiple = false;
        this.labelValue = "";
        this.disabled = false;
        this.readonly = false;
        this.suspendUpdate = false;
        this.handleChangeFromNativeInput = () => {
            if (!this.suspendUpdate) {
                this.suspendUpdate = true;
                au.fireEvent(this.filePath, "change", { files: this.files });
                au.fireMaterializeEvent(this.filePath, "change", { files: this.files });
                this.suspendUpdate = false;
            }
        };
    }
    attached() {
        this.filePath.addEventListener("change", this.handleChangeFromNativeInput);
    }
    detached() {
        this.filePath.removeEventListener("change", this.handleChangeFromNativeInput);
    }
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
export { MdFileInput };
//# sourceMappingURL=file.js.map