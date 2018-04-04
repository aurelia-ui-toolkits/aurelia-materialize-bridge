System.register(["tslib", "aurelia-framework", "aurelia-binding", "aurelia-task-queue", "aurelia-logging", "../common/events", "../common/attributes", "aurelia-pal"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, aurelia_binding_1, aurelia_task_queue_1, aurelia_logging_1, events_1, attributes_1, aurelia_pal_1, MdSelect;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            },
            function (aurelia_task_queue_1_1) {
                aurelia_task_queue_1 = aurelia_task_queue_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            }
        ],
        execute: function () {
            MdSelect = /** @class */ (function () {
                function MdSelect(element, bindingEngine, taskQueue) {
                    var _this = this;
                    this.bindingEngine = bindingEngine;
                    this.taskQueue = taskQueue;
                    this.disabled = false;
                    this.readonly = false;
                    this.enableOptionObserver = false;
                    this.label = "";
                    this.showErrortext = true;
                    this.suspendUpdate = false;
                    this.subscriptions = [];
                    this.inputField = null;
                    this.input = null;
                    this.dropdownMutationObserver = null;
                    this.optionsMutationObserver = null;
                    //
                    // Firefox sometimes fire blur several times in a row
                    // observable at http://localhost:3000/#/samples/select/
                    // when enable 'Disable Functionality', open that list and
                    // then open 'Basic use' list.
                    // Chrome - ok
                    // IE 11 - ok
                    // Edge ?
                    //
                    this.taskqueueRunning = false;
                    this.mdUnrenderValidateResults = function (results, renderer) {
                        if (!_this.input) {
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
                        renderer.removeValidationClasses(_this.input);
                        var e_1, _a;
                    };
                    this.mdRenderValidateResults = function (results, renderer) {
                        if (!_this.input) {
                            return;
                        }
                        try {
                            for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                                var result = results_2_1.value;
                                if (!result.valid) {
                                    result.target = _this.input;
                                    if (!(_this.input.hasAttribute("data-show-errortext") && _this.input.getAttribute("data-show-errortext") === "false")) {
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
                        renderer.addValidationClasses(_this.input, !results.find(function (x) { return !x.valid; }));
                        var e_2, _a;
                    };
                    this.element = element;
                    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
                    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
                    this.handleBlur = this.handleBlur.bind(this);
                    this.log = aurelia_logging_1.getLogger("md-select");
                    this.handleFocus = this.handleFocus.bind(this);
                }
                MdSelect.prototype.readonlyChanged = function () {
                    if (this.readonly) {
                        this.makeReadonly($(this.element).siblings("input")[0]);
                    }
                    else {
                        this.refresh();
                    }
                };
                MdSelect.prototype.attached = function () {
                    var _this = this;
                    if (this.element.classList.contains("browser-default")) {
                        return;
                    }
                    var div = $("<div class='input-field'></div>");
                    var va = this.element.attributes.getNamedItem("validate");
                    if (va) {
                        div.attr(va.name, va.value);
                    }
                    $(this.element).wrap(div);
                    if (this.label) {
                        $("<label class=\"md-select-label\">" + this.label + "</label>").insertAfter(this.element);
                    }
                    this.taskQueue.queueTask(function () {
                        _this.createMaterialSelect(false);
                    });
                    this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, "value").subscribe(this.handleChangeFromViewModel));
                    this.inputField = this.element.closest(".input-field");
                    $(this.element).on("change", this.handleChangeFromNativeSelect);
                    this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
                    this.element.mdRenderValidateResults = this.mdRenderValidateResults;
                };
                MdSelect.prototype.detached = function () {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    var $element = $(this.element);
                    $element.off("change", this.handleChangeFromNativeSelect);
                    this.observeVisibleDropdownContent(false);
                    this.observeOptions(false);
                    this.dropdownMutationObserver = null;
                    $element.siblings("ul#select-options-" + $element.data("select-id")).remove();
                    $element.material_select("destroy");
                    $element.siblings("label").remove();
                    $element.siblings(".md-input-validation").remove();
                    $element.unwrap();
                    this.subscriptions.forEach(function (sub) { return sub.dispose(); });
                    this.element.mdUnrenderValidateResults = undefined;
                    this.element.mdRenderValidateResults = undefined;
                };
                MdSelect.prototype.refresh = function () {
                    var _this = this;
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    this.taskQueue.queueTask(function () {
                        _this.createMaterialSelect(true);
                    });
                };
                MdSelect.prototype.labelChanged = function (newValue) {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    this.updateLabel();
                };
                MdSelect.prototype.updateLabel = function () {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    if (this.label) {
                        var $label = $(this.element).parent(".select-wrapper").siblings(".md-select-label");
                        $label.text(this.label);
                    }
                };
                MdSelect.prototype.disabledChanged = function (newValue) {
                    this.toggleControl(newValue);
                };
                MdSelect.prototype.showErrortextChanged = function () {
                    this.setErrorTextAttribute();
                };
                MdSelect.prototype.setErrorTextAttribute = function () {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    var input = this.element.parentElement.querySelector("input.select-dropdown");
                    if (!input) {
                        return;
                    }
                    this.log.debug("showErrortextChanged: " + this.showErrortext);
                    input.setAttribute("data-show-errortext", attributes_1.getBooleanFromAttributeValue(this.showErrortext).toString());
                };
                MdSelect.prototype.notifyBindingEngine = function () {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    this.log.debug("selectedOptions changed", arguments);
                };
                MdSelect.prototype.handleChangeFromNativeSelect = function () {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    if (!this.suspendUpdate) {
                        this.log.debug("handleChangeFromNativeSelect", this.element.value, $(this.element).val());
                        this.suspendUpdate = true;
                        events_1.fireEvent(this.element, "change");
                        this.suspendUpdate = false;
                    }
                };
                MdSelect.prototype.handleChangeFromViewModel = function (newValue) {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    this.log.debug("handleChangeFromViewModel", newValue, $(this.element).val());
                    if (!this.suspendUpdate) {
                        this.createMaterialSelect(false);
                    }
                };
                MdSelect.prototype.toggleControl = function (disable) {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    var $wrapper = $(this.element).parent(".select-wrapper");
                    if ($wrapper.length > 0) {
                        if (disable) {
                            $(".caret", $wrapper).addClass("disabled");
                            $("input.select-dropdown", $wrapper).attr("disabled", "disabled");
                            $wrapper.attr("disabled", "disabled");
                        }
                        else {
                            $(".caret", $wrapper).removeClass("disabled");
                            $("input.select-dropdown", $wrapper).attr("disabled", null);
                            $wrapper.attr("disabled", null);
                        }
                    }
                };
                MdSelect.prototype.createMaterialSelect = function (destroy) {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    this.observeVisibleDropdownContent(false);
                    this.observeOptions(false);
                    var input = $(this.element).siblings("input");
                    var isValid = input.hasClass("valid");
                    var isInvalid = input.hasClass("invalid");
                    if (destroy) {
                        $(this.element).material_select("destroy");
                    }
                    $(this.element).material_select();
                    input = $(this.element).siblings("input");
                    if (isValid) {
                        input.addClass("valid");
                    }
                    if (isInvalid) {
                        input.addClass("invalid");
                    }
                    this.input = input[0];
                    this.toggleControl(this.disabled);
                    this.observeVisibleDropdownContent(true);
                    this.observeOptions(true);
                    this.setErrorTextAttribute();
                    if (this.readonly) {
                        this.makeReadonly(input[0]);
                    }
                };
                MdSelect.prototype.makeReadonly = function (input) {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    $(input).off("click");
                    $(input).off("focus");
                    $(input).off("keydown");
                    $(input).off("open");
                };
                MdSelect.prototype.observeVisibleDropdownContent = function (attach) {
                    var _this = this;
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    if (attach) {
                        if (!this.dropdownMutationObserver) {
                            this.dropdownMutationObserver = aurelia_pal_1.DOM.createMutationObserver(function (mutations) {
                                var isHidden = false;
                                try {
                                    for (var mutations_1 = tslib_1.__values(mutations), mutations_1_1 = mutations_1.next(); !mutations_1_1.done; mutations_1_1 = mutations_1.next()) {
                                        var mutation = mutations_1_1.value;
                                        if (window.getComputedStyle(mutation.target).getPropertyValue("display") === "none") {
                                            isHidden = true;
                                        }
                                    }
                                }
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (mutations_1_1 && !mutations_1_1.done && (_a = mutations_1.return)) _a.call(mutations_1);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                                if (isHidden) {
                                    _this.dropdownMutationObserver.takeRecords();
                                    _this.handleBlur();
                                }
                                else {
                                    _this.handleFocus();
                                }
                                var e_3, _a;
                            });
                        }
                        this.dropdownMutationObserver.observe(this.element.parentElement.querySelector(".dropdown-content"), {
                            attributes: true,
                            attributeFilter: ["style"]
                        });
                    }
                    else {
                        if (this.dropdownMutationObserver) {
                            this.dropdownMutationObserver.disconnect();
                            this.dropdownMutationObserver.takeRecords();
                        }
                    }
                };
                MdSelect.prototype.observeOptions = function (attach) {
                    var _this = this;
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.enableOptionObserver)) {
                        if (attach) {
                            if (!this.optionsMutationObserver) {
                                this.optionsMutationObserver = aurelia_pal_1.DOM.createMutationObserver(function (mutations) {
                                    // this.log.debug('observeOptions', mutations);
                                    _this.refresh();
                                });
                            }
                            this.optionsMutationObserver.observe(this.element, {
                                // childList: true,
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
                };
                MdSelect.prototype.open = function () {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    $(this.element).siblings("input.select-dropdown").trigger("focus");
                };
                MdSelect.prototype.handleBlur = function () {
                    var _this = this;
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    if (this.taskqueueRunning) {
                        return;
                    }
                    this.taskqueueRunning = true;
                    this.taskQueue.queueTask(function () {
                        _this.log.debug("fire blur event");
                        events_1.fireEvent(_this.element, "blur");
                        _this.taskqueueRunning = false;
                        if (_this.label) {
                            var $label = $(_this.element).parent(".select-wrapper").siblings(".md-select-label");
                            $label.removeClass("md-focused");
                        }
                    });
                };
                MdSelect.prototype.handleFocus = function () {
                    if ((this.element).classList.contains("browser-default")) {
                        return;
                    }
                    if (this.label) {
                        var $label = $(this.element).parent(".select-wrapper").siblings(".md-select-label");
                        $label.addClass("md-focused");
                    }
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdSelect.prototype, "disabled", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdSelect.prototype, "readonly", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdSelect.prototype, "enableOptionObserver", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdSelect.prototype, "label", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdSelect.prototype, "showErrortext", void 0);
                MdSelect = tslib_1.__decorate([
                    aurelia_framework_1.autoinject,
                    aurelia_framework_1.customAttribute("md-select"),
                    tslib_1.__metadata("design:paramtypes", [Element, aurelia_binding_1.BindingEngine, aurelia_task_queue_1.TaskQueue])
                ], MdSelect);
                return MdSelect;
            }());
            exports_1("MdSelect", MdSelect);
        }
    };
});
