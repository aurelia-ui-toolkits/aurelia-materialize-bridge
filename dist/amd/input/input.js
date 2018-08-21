define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdInput = /** @class */ (function () {
        function MdInput(element, taskQueue) {
            var _this = this;
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
            this.blurOnEnterHandler = function (e) {
                if (e.keyCode && e.keyCode === 13) {
                    _this.input.blur();
                }
            };
            this.mdUnrenderValidateResults = function (results, renderer) {
                var e_1, _a;
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
            };
            this.mdRenderValidateResults = function (results, renderer) {
                var e_2, _a;
                if (_this.showErrortext && _this.inputField) {
                    try {
                        for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                            var result = results_2_1.value;
                            if (!result.valid) {
                                renderer.addMessage(_this.inputField, result);
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
            };
            this.controlId = "md-input-" + MdInput_1.id++;
        }
        MdInput_1 = MdInput;
        MdInput.prototype.valueChanged = function () {
            var _this = this;
            if (this.input === document.activeElement) {
                return;
            }
            this.taskQueue.queueTask(function () { return _this.updateLabel(); });
        };
        MdInput.prototype.bind = function () {
            // this suppresses initial changed handler calls
        };
        MdInput.prototype.attached = function () {
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
        };
        MdInput.prototype.detached = function () {
            this.detachEventHandlers();
            au.MaterializeFormValidationRenderer.removeValidation(this.inputField, this.input);
            this.element.mdUnrenderValidateResults = undefined;
            this.element.mdRenderValidateResults = undefined;
        };
        MdInput.prototype.updateLabel = function () {
            au.updateLabel(this.input, this.labelEl);
            if (this.textArea) {
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
            if (this.blurOnEnter) {
                this.element.addEventListener("keyup", this.blurOnEnterHandler);
            }
        };
        MdInput.prototype.detachEventHandlers = function () {
            if (this.blurOnEnter) {
                this.element.removeEventListener("keyup", this.blurOnEnterHandler);
            }
        };
        var MdInput_1;
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
        return MdInput;
    }());
    exports.MdInput = MdInput;
});
//# sourceMappingURL=input.js.map