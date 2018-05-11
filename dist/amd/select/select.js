define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdSelect = /** @class */ (function () {
        function MdSelect(element, bindingEngine, taskQueue) {
            var _this = this;
            this.bindingEngine = bindingEngine;
            this.taskQueue = taskQueue;
            this.disabled = false;
            this.readonly = false;
            this.triggerBlur = function () {
                _this.instance.input.blur();
            };
            this.enableOptionObserver = true;
            this.label = "";
            this.showErrortext = true;
            this.inputField = null;
            this.optionsMutationObserver = null;
            this.handleChangeFromNativeSelect = function () {
                if (_this.suspendUpdate) {
                    return;
                }
                _this.log.debug("handleChangeFromNativeSelect", _this.element.value);
                _this.suppressValueChanged = true;
                _this.value = _this.element.value;
                _this.suspendUpdate = true;
                au.fireEvent(_this.element, "blur");
                _this.suspendUpdate = false;
            };
            this.handleFocus = function () {
                _this.labelElement.classList.add("md-focused");
            };
            this.handleBlur = function () {
                _this.labelElement.classList.remove("md-focused");
            };
            this.mdUnrenderValidateResults = function (results, renderer) {
                if (!_this.instance.input) {
                    return;
                }
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
                renderer.removeValidationClasses(_this.instance.input);
                var e_1, _a;
            };
            this.mdRenderValidateResults = function (results, renderer) {
                if (!_this.instance.input) {
                    return;
                }
                try {
                    for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                        var result = results_2_1.value;
                        if (!result.valid) {
                            result.target = _this.instance.input;
                            if (_this.showErrortext) {
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
                renderer.addValidationClasses(_this.instance.input, !results.find(function (x) { return !x.valid; }));
                var e_2, _a;
            };
            this.element = element;
            this.log = au.getLogger("md-select");
        }
        MdSelect.prototype.valueChanged = function () {
            this.log.debug("valueChanged");
            if (!this.instance) {
                return;
            }
            if (this.suppressValueChanged) {
                this.log.debug("valueChanged suppressed");
                this.suppressValueChanged = false;
                return;
            }
            this.element.value = this.value;
            this.createMaterialSelect(false);
        };
        MdSelect.prototype.disabledChanged = function () {
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
        };
        MdSelect.prototype.readonlyChanged = function () {
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
        };
        MdSelect.prototype.labelChanged = function () {
            if (this.labelElement) {
                this.labelElement.textContent = this.label;
            }
        };
        MdSelect.prototype.attached = function () {
            var _this = this;
            if (this.element.classList.contains("browser-default")) {
                return;
            }
            this.inputField = document.createElement("div");
            this.inputField.classList.add("input-field");
            var va = this.element.getAttributeNode("validate");
            if (va) {
                this.inputField.setAttribute(va.name, va.value);
            }
            au.wrap(this.inputField, this.element);
            this.labelElement = document.createElement("label");
            this.labelElement.classList.add("md-select-label");
            au.insertAfter(this.element, this.labelElement);
            this.labelChanged();
            this.taskQueue.queueTask(function () { return _this.createMaterialSelect(false); });
            this.element.addEventListener("change", this.handleChangeFromNativeSelect);
            this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
            this.element.mdRenderValidateResults = this.mdRenderValidateResults;
        };
        MdSelect.prototype.detached = function () {
            if (!this.instance) {
                return;
            }
            this.element.removeEventListener("change", this.handleChangeFromNativeSelect);
            this.observeOptions(false);
            this.instance.destroy();
            // this will remove input-field wrapper and all its' content like validation messsages or a label
            au.unwrap(this.element);
            this.inputField = null;
            this.labelElement = null;
            this.readonlyDiv = null;
            this.element.mdUnrenderValidateResults = undefined;
            this.element.mdRenderValidateResults = undefined;
        };
        MdSelect.prototype.refresh = function () {
            var _this = this;
            if (!this.instance) {
                return;
            }
            this.taskQueue.queueTask(function () { return _this.createMaterialSelect(true); });
        };
        MdSelect.prototype.createMaterialSelect = function (destroy) {
            this.observeOptions(false);
            var isValid = false;
            var isInvalid = false;
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
            }
            if (isInvalid) {
                this.instance.input.classList.add("invalid");
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
        };
        MdSelect.prototype.observeOptions = function (attach) {
            var _this = this;
            if (!this.enableOptionObserver) {
                return;
            }
            if (attach) {
                if (!this.optionsMutationObserver) {
                    this.optionsMutationObserver = au.DOM.createMutationObserver(function (mutations) {
                        _this.log.debug("observeOptions", mutations);
                        _this.refresh();
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
        };
        MdSelect.prototype.open = function () {
            if (!this.instance) {
                return;
            }
            this.instance.input.focus();
        };
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
            tslib_1.__metadata("design:type", Object)
        ], MdSelect.prototype, "value", void 0);
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
        return MdSelect;
    }());
    exports.MdSelect = MdSelect;
});
//# sourceMappingURL=select.js.map