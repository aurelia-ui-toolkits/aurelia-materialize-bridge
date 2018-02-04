var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireEvent } from "../common/events";
let MdInput = MdInput_1 = class MdInput {
    constructor(element, taskQueue, updateService) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.updateService = updateService;
        this.mdLabel = "";
        this.mdBlurOnEnter = false;
        this.mdDisabled = false;
        this.mdReadonly = false;
        this.mdPlaceholder = "";
        this.mdTextArea = false;
        this.mdType = "text";
        this.mdStep = "any";
        this.mdValidate = false;
        this.mdShowErrortext = true;
        this.mdUpdateTrigger = ["input", "change"];
        this.mdValue = "";
        this.mdMin = null;
        this.mdMax = null;
        this.mdName = "";
        this.mdMaxlength = 524288;
        this.suspendUpdate = false;
        this.mdUnrenderValidateResults = (results, renderer) => {
            for (let result of results) {
                if (!result.valid) {
                    renderer.removeMessage(this.element, result);
                }
            }
            renderer.removeValidationClasses(this.input);
        };
        this.mdRenderValidateResults = (results, renderer) => {
            if (this.label && results.find(x => !x.valid)) {
                this.label.removeAttribute("data-error");
            }
            if (this.input) {
                for (let result of results) {
                    if (!result.valid) {
                        result.target = this.input;
                        if (this.input.hasAttribute("data-show-errortext")) {
                            renderer.addMessage(this.element, result);
                        }
                    }
                }
            }
            renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
        };
        this.controlId = `md-input-${MdInput_1.id++}`;
        this.blurOnEnter = this.blurOnEnter.bind(this);
    }
    bind() {
        this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
        this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
        this.mdShowErrortext = getBooleanFromAttributeValue(this.mdShowErrortext);
        this.mdBlurOnEnter = getBooleanFromAttributeValue(this.mdBlurOnEnter);
    }
    attached() {
        if (getBooleanFromAttributeValue(this.mdValidate)) {
            this.input.classList.add("validate");
        }
        if (this.mdValidateError) {
            this.label.setAttribute("data-error", this.mdValidateError);
        }
        if (this.mdValidateSuccess) {
            this.label.setAttribute("data-success", this.mdValidateSuccess);
        }
        if (this.mdPlaceholder) {
            this.input.setAttribute("placeholder", this.mdPlaceholder);
        }
        if (this.mdShowErrortext) {
            this.input.setAttribute("data-show-errortext", this.mdShowErrortext.toString());
        }
        this.updateService.update();
        // special case: time inputs are not covered by Materialize
        if (this.mdType === "time") {
            $(this.input).siblings("label").addClass("active");
        }
        this.attachEventHandlers();
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
    }
    detached() {
        this.detachEventHandlers();
        this.element.mdUnrenderValidateResults = undefined;
        this.element.mdRenderValidateResults = undefined;
    }
    blur() {
        fireEvent(this.element, "blur");
    }
    focus() {
        this.input.focus();
        fireEvent(this.element, "focus");
    }
    mdValueChanged() {
        if (!$(this.input).is(":focus")) {
            this.updateService.update();
        }
        if (this.mdTextArea) {
            $(this.input).trigger("autoresize");
        }
    }
    attachEventHandlers() {
        if (this.mdBlurOnEnter) {
            this.element.addEventListener("keyup", this.blurOnEnter);
        }
    }
    detachEventHandlers() {
        if (this.mdBlurOnEnter) {
            this.element.removeEventListener("keyup", this.blurOnEnter);
        }
    }
    blurOnEnter(e) {
        if (e.keyCode && e.keyCode === 13) {
            this.input.blur();
        }
    }
};
MdInput.id = 0;
__decorate([
    bindable
], MdInput.prototype, "mdLabel", void 0);
__decorate([
    bindable
], MdInput.prototype, "mdBlurOnEnter", void 0);
__decorate([
    bindable
], MdInput.prototype, "mdDisabled", void 0);
__decorate([
    bindable
], MdInput.prototype, "mdReadonly", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdPlaceholder", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdTextArea", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdType", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdStep", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdValidate", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdShowErrortext", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdUpdateTrigger", void 0);
__decorate([
    bindable
], MdInput.prototype, "mdValidateError", void 0);
__decorate([
    bindable
], MdInput.prototype, "mdValidateSuccess", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], MdInput.prototype, "mdValue", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdMin", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdMax", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdName", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdInput.prototype, "mdMaxlength", void 0);
MdInput = MdInput_1 = __decorate([
    customElement("md-input"),
    autoinject
], MdInput);
export { MdInput };
var MdInput_1;
