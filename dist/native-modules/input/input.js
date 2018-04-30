import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdInput = /** @class */ (function () {
    function MdInput(element, taskQueue) {
        var _this = this;
        this.element = element;
        this.taskQueue = taskQueue;
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
        this.mdMin = null;
        this.mdMax = null;
        this.mdName = "";
        this.mdMaxlength = 524288;
        this.suspendUpdate = false;
        this.mdUnrenderValidateResults = function (results, renderer) {
            try {
                for (var results_1 = tslib_1.__values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                    var result = results_1_1.value;
                    if (!result.valid) {
                        renderer.removeMessage(_this.inputField, result);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            renderer.removeValidationClasses(_this.input);
            var e_1, _a;
        };
        this.mdRenderValidateResults = function (results, renderer) {
            if (_this.label && results.find(function (x) { return !x.valid; })) {
                _this.label.removeAttribute("data-error");
            }
            if (_this.input) {
                try {
                    for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                        var result = results_2_1.value;
                        if (!result.valid) {
                            result.target = _this.input;
                            if (_this.input.hasAttribute("data-show-errortext")) {
                                renderer.addMessage(_this.inputField, result);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (results_2_1 && !results_2_1.done && (_a = results_2.return)) _a.call(results_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            renderer.addValidationClasses(_this.input, !results.find(function (x) { return !x.valid; }));
            var e_2, _a;
        };
        this.controlId = "md-input-" + MdInput_1.id++;
        this.blurOnEnter = this.blurOnEnter.bind(this);
    }
    MdInput_1 = MdInput;
    MdInput.prototype.mdValueChanged = function () {
        if (this.input === document.activeElement) {
            return;
        }
        this.updateLabel();
    };
    MdInput.prototype.bind = function () {
        // this suppresses initial changed handler calls
    };
    MdInput.prototype.attached = function () {
        if (this.mdValidate) {
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
        this.updateLabel();
        this.attachEventHandlers();
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
    };
    MdInput.prototype.detached = function () {
        this.detachEventHandlers();
        this.element.mdUnrenderValidateResults = undefined;
        this.element.mdRenderValidateResults = undefined;
    };
    MdInput.prototype.updateLabel = function () {
        // the following is copied from the updateTextFields method
        // it is more efficient than updating all the inputs
        if (this.mdValue && this.mdValue.length > 0 || this.input.autofocus || this.input.hasAttribute("placeholder")) {
            this.label.classList.add("active");
        }
        else if (this.input.validity) {
            this.label.classList.toggle("active", this.input.validity.badInput === true);
        }
        else {
            this.label.classList.remove("active");
        }
        if (this.mdTextArea) {
            M.textareaAutoResize(this.input);
        }
    };
    MdInput.prototype.blur = function () {
        au.fireEvent(this.element, "blur");
    };
    MdInput.prototype.focus = function () {
        this.input.focus();
        au.fireEvent(this.element, "focus");
    };
    MdInput.prototype.attachEventHandlers = function () {
        if (this.mdBlurOnEnter) {
            this.element.addEventListener("keyup", this.blurOnEnter);
        }
    };
    MdInput.prototype.detachEventHandlers = function () {
        if (this.mdBlurOnEnter) {
            this.element.removeEventListener("keyup", this.blurOnEnter);
        }
    };
    MdInput.prototype.blurOnEnter = function (e) {
        if (e.keyCode && e.keyCode === 13) {
            this.input.blur();
        }
    };
    MdInput.id = 0;
    tslib_1.__decorate([
        au.bindable.stringMd({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", String)
    ], MdInput.prototype, "mdLabel", void 0);
    tslib_1.__decorate([
        au.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdInput.prototype, "mdBlurOnEnter", void 0);
    tslib_1.__decorate([
        au.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdInput.prototype, "mdDisabled", void 0);
    tslib_1.__decorate([
        au.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdInput.prototype, "mdReadonly", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdInput.prototype, "mdPlaceholder", void 0);
    tslib_1.__decorate([
        au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdInput.prototype, "mdTextArea", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdInput.prototype, "mdType", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdInput.prototype, "mdStep", void 0);
    tslib_1.__decorate([
        au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdInput.prototype, "mdValidate", void 0);
    tslib_1.__decorate([
        au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdInput.prototype, "mdShowErrortext", void 0);
    tslib_1.__decorate([
        au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdInput.prototype, "mdInline", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Array)
    ], MdInput.prototype, "mdUpdateTrigger", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdInput.prototype, "mdValidateError", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdInput.prototype, "mdValidateSuccess", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", String)
    ], MdInput.prototype, "mdValue", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdInput.prototype, "mdMin", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdInput.prototype, "mdMax", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdInput.prototype, "mdName", void 0);
    tslib_1.__decorate([
        au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdInput.prototype, "mdMaxlength", void 0);
    MdInput = MdInput_1 = tslib_1.__decorate([
        au.customElement("md-input"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
    ], MdInput);
    return MdInput;
    var MdInput_1;
}());
export { MdInput };
//# sourceMappingURL=input.js.map