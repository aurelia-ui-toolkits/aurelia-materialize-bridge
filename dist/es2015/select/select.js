import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdSelect = class MdSelect {
    constructor(element, bindingEngine, taskQueue) {
        this.bindingEngine = bindingEngine;
        this.taskQueue = taskQueue;
        this.disabled = false;
        this.readonly = false;
        this.triggerBlur = () => {
            this.instance.input.blur();
        };
        this.enableOptionObserver = true;
        this.label = "";
        this.showErrortext = true;
        this.inputField = null;
        this.optionsMutationObserver = null;
        this.onSelectValueChanged = () => {
            this.taskQueue.queueTask(() => this.createMaterialSelect(false));
        };
        this.handleFocus = () => {
            this.labelElement.classList.add("md-focused");
        };
        this.handleBlur = () => {
            this.labelElement.classList.remove("md-focused");
        };
        this.mdUnrenderValidateResults = (results, renderer) => {
            if (!this.instance || !this.instance.input) {
                return;
            }
            for (let result of results) {
                if (!result.valid) {
                    renderer.removeMessage(this.inputField, result);
                }
            }
            renderer.removeValidationClasses(this.instance.input);
            renderer.removeValidationClasses(this.instance.wrapper);
        };
        this.mdRenderValidateResults = (results, renderer) => {
            if (!this.instance || !this.instance.input) {
                return;
            }
            for (let result of results) {
                if (!result.valid) {
                    result.target = this.instance.input;
                    if (this.showErrortext) {
                        renderer.addMessage(this.inputField, result);
                    }
                }
            }
            renderer.addValidationClasses(this.instance.input, !results.find(x => !x.valid));
            renderer.addValidationClasses(this.instance.wrapper, !results.find(x => !x.valid));
        };
        this.element = element;
        this.log = au.getLogger("md-select");
    }
    disabledChanged() {
        if (!this.instance) {
            return;
        }
        if (this.disabled) {
            this.instance.wrapper.querySelector(".caret").classList.add("disabled");
            this.instance.input.setAttribute("disabled", "disabled");
            this.instance.wrapper.setAttribute("disabled", "disabled");
        }
        else {
            this.instance.wrapper.querySelector(".caret").classList.remove("disabled");
            this.instance.input.removeAttribute("disabled");
            this.instance.wrapper.removeAttribute("disabled");
        }
    }
    readonlyChanged() {
        if (!this.readonlyDiv) {
            return;
        }
        this.readonlyDiv.hidden = !this.readonly;
        if (this.readonly) {
            this.instance.input.addEventListener("focus", this.triggerBlur);
        }
        else {
            this.instance.input.removeEventListener("focus", this.triggerBlur);
        }
    }
    labelChanged() {
        if (this.labelElement) {
            this.labelElement.textContent = this.label;
        }
    }
    attached() {
        if (this.element.classList.contains("browser-default")) {
            return;
        }
        this.inputField = document.createElement("div");
        this.inputField.classList.add("input-field");
        this.inputField.classList.add("md-select");
        let va = this.element.getAttributeNode("validate");
        if (va) {
            this.inputField.setAttribute(va.name, va.value);
        }
        au.wrap(this.inputField, this.element);
        this.labelElement = document.createElement("label");
        this.labelElement.classList.add("md-select-label");
        au.insertAfter(this.element, this.labelElement);
        this.labelChanged();
        this.taskQueue.queueTask(() => this.createMaterialSelect(false));
        // observe native select value to update the widget
        this.subscription = this.bindingEngine.propertyObserver(this.element, "value").subscribe(this.onSelectValueChanged);
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
    }
    detached() {
        if (!this.instance) {
            return;
        }
        this.subscription.dispose();
        this.observeOptions(false);
        this.instance.destroy();
        this.instance = undefined;
        // this will remove input-field wrapper and all its' content like validation messsages or a label
        au.unwrap(this.element);
        this.inputField = null;
        this.labelElement = null;
        this.readonlyDiv = null;
        this.element.mdUnrenderValidateResults = undefined;
        this.element.mdRenderValidateResults = undefined;
    }
    refresh() {
        if (!this.instance) {
            return;
        }
        this.taskQueue.queueTask(() => this.createMaterialSelect(true));
    }
    createMaterialSelect(destroy) {
        this.observeOptions(false);
        let isValid = false;
        let isInvalid = false;
        if (this.instance) {
            isValid = this.instance.input.classList.contains("valid");
            isInvalid = this.instance.input.classList.contains("invalid");
            if (destroy) {
                this.instance.destroy();
            }
        }
        this.instance = new M.FormSelect(this.element, {});
        if (isValid) {
            this.instance.input.classList.add("valid");
            this.instance.wrapper.classList.add("valid");
        }
        if (isInvalid) {
            this.instance.input.classList.add("invalid");
            this.instance.wrapper.classList.add("invalid");
        }
        this.readonlyDiv = document.createElement("div");
        this.readonlyDiv.style.position = "absolute";
        this.readonlyDiv.style.top = "0";
        this.readonlyDiv.style.width = "100%";
        this.readonlyDiv.style.height = "100%";
        this.readonlyDiv.style.zIndex = "2";
        this.readonlyDiv.style.background = "transparent";
        this.instance.input.parentElement.insertBefore(this.readonlyDiv, this.instance.input);
        this.instance.input.addEventListener("focus", this.handleFocus);
        this.instance.input.addEventListener("blur", this.handleBlur);
        this.observeOptions(true);
        this.readonlyChanged();
        this.disabledChanged();
    }
    observeOptions(attach) {
        if (!this.enableOptionObserver) {
            return;
        }
        if (attach) {
            if (!this.optionsMutationObserver) {
                this.optionsMutationObserver = au.DOM.createMutationObserver(mutations => {
                    this.log.debug("observeOptions", mutations);
                    this.refresh();
                });
            }
            this.optionsMutationObserver.observe(this.element, {
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            if (this.optionsMutationObserver) {
                this.optionsMutationObserver.disconnect();
                this.optionsMutationObserver.takeRecords();
            }
        }
    }
    open() {
        if (!this.instance) {
            return;
        }
        this.instance.dropdown.open();
    }
};
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdSelect.prototype, "disabled", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdSelect.prototype, "readonly", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdSelect.prototype, "enableOptionObserver", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd,
    tslib_1.__metadata("design:type", String)
], MdSelect.prototype, "label", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdSelect.prototype, "showErrortext", void 0);
MdSelect = tslib_1.__decorate([
    au.autoinject,
    au.customAttribute("md-select"),
    tslib_1.__metadata("design:paramtypes", [Element, au.BindingEngine, au.TaskQueue])
], MdSelect);
export { MdSelect };
//# sourceMappingURL=select.js.map