import * as tslib_1 from "tslib";
import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
import { fireEvent, fireMaterializeEvent } from "../common/events";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdFileInput = /** @class */ (function () {
    function MdFileInput(element) {
        this.element = element;
        this.mdCaption = "File";
        this.mdMultiple = false;
        this.disabled = false;
        this.mdReadonly = false;
        this.suspendUpdate = false;
        this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
    }
    MdFileInput.prototype.attached = function () {
        this.mdMultiple = getBooleanFromAttributeValue(this.mdMultiple);
        $(this.filePath).on("change", this.handleChangeFromNativeInput);
    };
    MdFileInput.prototype.detached = function () {
        $(this.element).off("change", this.handleChangeFromNativeInput);
    };
    MdFileInput.prototype.handleChangeFromNativeInput = function () {
        if (!this.suspendUpdate) {
            this.suspendUpdate = true;
            fireEvent(this.filePath, "change", { files: this.files });
            fireMaterializeEvent(this.filePath, "change", { files: this.files });
            this.suspendUpdate = false;
        }
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdFileInput.prototype, "mdCaption", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdFileInput.prototype, "mdMultiple", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdFileInput.prototype, "mdLabelValue", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdFileInput.prototype, "disabled", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdFileInput.prototype, "mdReadonly", void 0);
    MdFileInput = tslib_1.__decorate([
        customElement("md-file"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdFileInput);
    return MdFileInput;
}());
export { MdFileInput };
