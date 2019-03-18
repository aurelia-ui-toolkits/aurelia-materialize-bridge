import * as tslib_1 from "tslib";
var MdInput_1;
import * as au from "../aurelia";
let MdInput = MdInput_1 = class MdInput {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.blurOnEnter = false;
        this.disabled = false;
        this.readonly = false;
        this.placeholder = "";
        this.textArea = false;
        this.type = "text";
        this.step = "any";
        this.validate = false;
        this.showErrortext = true;
        this.updateTrigger = ["input", "change"];
        this.min = null;
        this.max = null;
        this.name = "";
        this.maxlength = 524288;
        this.autocomplete = "";
        this.suspendUpdate = false;
        this.blurOnEnterHandler = (e) => {
            if (e.keyCode && e.keyCode === 13) {
                this.input.blur();
            }
        };
        this.mdUnrenderValidateResults = (results, renderer) => {
            for (let result of results) {
                if (!result.valid) {
                    renderer.removeMessage(this.inputField, result);
                }
            }
            renderer.removeValidationClasses(this.input);
        };
        this.mdRenderValidateResults = (results, renderer) => {
            if (this.showErrortext && this.inputField) {
                for (let result of results) {
                    if (!result.valid) {
                        renderer.addMessage(this.inputField, result);
                    }
                }
            }
            renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
        };
        this.controlId = `md-input-${MdInput_1.id++}`;
    }
    valueChanged() {
        if (this.input === document.activeElement) {
            return;
        }
        this.taskQueue.queueTask(() => this.updateLabel());
    }
    bind() {
        // this suppresses initial changed handler calls
    }
    attached() {
        if (this.validate) {
            this.input.classList.add("validate");
        }
        if (this.placeholder) {
            this.input.setAttribute("placeholder", this.placeholder);
        }
        if (this.autocomplete) {
            this.input.setAttribute("autocomplete", this.autocomplete);
        }
        this.updateLabel();
        this.attachEventHandlers();
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
    }
    detached() {
        this.detachEventHandlers();
        au.MaterializeFormValidationRenderer.removeValidation(this.inputField, this.input);
        this.element.mdUnrenderValidateResults = undefined;
        this.element.mdRenderValidateResults = undefined;
    }
    updateLabel() {
        au.updateLabel(this.input, this.labelEl);
        if (this.textArea) {
            M.textareaAutoResize(this.input);
        }
    }
    blur() {
        au.fireEvent(this.element, "blur");
    }
    focus() {
        this.input.focus();
        au.fireEvent(this.element, "focus");
    }
    attachEventHandlers() {
        if (this.blurOnEnter) {
            this.element.addEventListener("keyup", this.blurOnEnterHandler);
        }
    }
    detachEventHandlers() {
        if (this.blurOnEnter) {
            this.element.removeEventListener("keyup", this.blurOnEnterHandler);
        }
    }
};
MdInput.id = 0;
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.twoWay }),
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "label", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdInput.prototype, "blurOnEnter", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdInput.prototype, "disabled", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdInput.prototype, "readonly", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "placeholder", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdInput.prototype, "textArea", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "type", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "step", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdInput.prototype, "validate", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdInput.prototype, "showErrortext", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdInput.prototype, "inline", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Array)
], MdInput.prototype, "updateTrigger", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd,
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "validateError", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd,
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "validateSuccess", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "value", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "min", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "max", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "name", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdInput.prototype, "maxlength", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdInput.prototype, "autocomplete", void 0);
MdInput = MdInput_1 = tslib_1.__decorate([
    au.customElement("md-input"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
], MdInput);
export { MdInput };
//# sourceMappingURL=input.js.map