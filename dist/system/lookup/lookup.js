System.register(["tslib", "../aurelia", "./lookup-state", "../common/discardable-promise"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, lookup_state_1, discardable_promise_1, MdLookup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (lookup_state_1_1) {
                lookup_state_1 = lookup_state_1_1;
            },
            function (discardable_promise_1_1) {
                discardable_promise_1 = discardable_promise_1_1;
            }
        ],
        execute: function () {
            MdLookup = /** @class */ (function () {
                function MdLookup(element, taskQueue) {
                    var _this = this;
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.placeholder = "Start Typing To Search";
                    this.debounce = 850;
                    this.LookupState = lookup_state_1.LookupState; // for usage from the html template
                    this.mdUnrenderValidateResults = function (results, renderer) {
                        var e_1, _a;
                        try {
                            for (var results_1 = tslib_1.__values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                                var result = results_1_1.value;
                                if (!result.valid) {
                                    renderer.removeMessage(_this.validationContainer, result);
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
                        try {
                            for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                                var result = results_2_1.value;
                                if (!result.valid) {
                                    renderer.addMessage(_this.validationContainer, result);
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
                    };
                    this.logger = au.getLogger("MdLookup");
                    this.controlId = "md-lookup-" + MdLookup_1.id++;
                }
                MdLookup_1 = MdLookup;
                MdLookup.prototype.filterChanged = function () {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var _a, e_3;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.logger.debug("filterChanged");
                                    if (!this.optionsFunction) {
                                        return [2 /*return*/];
                                    }
                                    if (this.suppressFilterChanged) {
                                        this.logger.debug("unsuppressed filter changed");
                                        this.suppressFilterChanged = false;
                                        return [2 /*return*/];
                                    }
                                    this.setValue(undefined);
                                    discardable_promise_1.discard(this.searchPromise);
                                    this.options = [MdLookup_1.searching];
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 3, , 4]);
                                    this.searchPromise = new discardable_promise_1.DiscardablePromise(this.getOptions({ filter: this.filter }));
                                    _a = this;
                                    return [4 /*yield*/, this.searchPromise];
                                case 2:
                                    _a.options = _b.sent();
                                    this.fixDropdownSizeIfTooBig();
                                    return [3 /*break*/, 4];
                                case 3:
                                    e_3 = _b.sent();
                                    if (e_3 !== discardable_promise_1.DiscardablePromise.discarded) {
                                        this.options = [MdLookup_1.error, e_3.message];
                                    }
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                };
                MdLookup.prototype.setFilter = function (filter) {
                    var _this = this;
                    if (this.filter === filter) {
                        return;
                    }
                    this.logger.debug("suppressed filter changed");
                    this.suppressFilterChanged = true;
                    this.filter = filter;
                    this.taskQueue.queueTask(function () { return _this.updateLabel(); });
                };
                MdLookup.prototype.valueChanged = function (newValue, oldValue) {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.logger.debug("valueChanged", newValue);
                                    if (this.suppressValueChanged) {
                                        this.logger.debug("unsuppressed value changed");
                                        this.suppressValueChanged = false;
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, this.updateFilterBasedOnValue()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                MdLookup.prototype.setValue = function (value) {
                    if (this.value === value) {
                        return;
                    }
                    this.logger.debug("suppressed value changed");
                    this.suppressValueChanged = true;
                    this.value = value;
                };
                MdLookup.prototype.optionsChanged = function () {
                    this.logger.debug("optionsChanged", this.options);
                    if (!this.options || !(this.options instanceof Array) || !this.options.length) {
                        this.state = lookup_state_1.LookupState.noMatches;
                    }
                    else if (this.options[0] === MdLookup_1.searching) {
                        this.state = lookup_state_1.LookupState.searching;
                    }
                    else if (this.options[0] === MdLookup_1.error) {
                        this.state = lookup_state_1.LookupState.error;
                        this.errorMessage = this.options.length > 1 ? this.options[1] : "Error occurred";
                    }
                    else {
                        this.state = lookup_state_1.LookupState.optionsVisible;
                    }
                };
                MdLookup.prototype.updateFilterBasedOnValue = function () {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var _a;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.logger.debug("updateFilterBasedOnValue", this.value);
                                    if (!this.value) return [3 /*break*/, 2];
                                    _a = this;
                                    return [4 /*yield*/, this.getOptions({ value: this.value })];
                                case 1:
                                    _a.options = _b.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    this.options = [];
                                    _b.label = 3;
                                case 3:
                                    if (this.options && this.options.length) {
                                        this.setFilter(this.getDisplayValue(this.options[0]));
                                    }
                                    else {
                                        this.setFilter(undefined);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                MdLookup.prototype.fixDropdownSizeIfTooBig = function () {
                    var _this = this;
                    this.taskQueue.queueTask(function () {
                        if (!_this.isOpen) {
                            return;
                        }
                        // adjust dropdown top so it sits right below the input
                        // doing it with CSS will not work if input margin is redefined
                        var inputRect = _this.input.getBoundingClientRect();
                        _this.dropdown.style.top = inputRect.height + 3 + "px";
                        var rect = _this.dropdown.getBoundingClientRect();
                        var availableSpace = window.innerHeight - rect.top + document.body.scrollTop - 5;
                        if (_this.dropdownUl.offsetHeight > availableSpace) {
                            _this.dropdown.style.height = availableSpace + "px";
                        }
                        else {
                            _this.dropdown.style.height = "auto";
                        }
                    });
                };
                MdLookup.prototype.open = function () {
                    if (!this.readonly) {
                        this.logger.debug("open");
                        this.isOpen = true;
                        this.fixDropdownSizeIfTooBig();
                    }
                };
                MdLookup.prototype.close = function () {
                    this.logger.debug("close");
                    this.isOpen = false;
                };
                MdLookup.prototype.blur = function () {
                    this.close();
                    au.fireEvent(this.element, "blur");
                };
                MdLookup.prototype.focus = function () {
                    this.input.focus();
                    au.fireEvent(this.element, "focus");
                };
                MdLookup.prototype.updateLabel = function () {
                    au.updateLabel(this.input, this.labelElement);
                };
                MdLookup.prototype.bind = function (bindingContext, overrideContext) {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.bindingContext = bindingContext;
                                    if (this.optionsFunction) {
                                        this.getOptions = this.optionsFunction.bind(this.bindingContext);
                                    }
                                    return [4 /*yield*/, this.updateFilterBasedOnValue()];
                                case 1:
                                    _a.sent();
                                    // restore initial value because it is set by updateFilterBasedOnValue
                                    this.suppressFilterChanged = false;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                MdLookup.prototype.attached = function () {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var _a;
                        var _this = this;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.logger.debug("attached");
                                    if (this.placeholder) {
                                        this.input.setAttribute("placeholder", this.placeholder);
                                    }
                                    // we need to use queueTask because open sometimes happens before browser bubbles the click further thus closing just opened dropdown
                                    this.input.onselect = function () { return _this.taskQueue.queueTask(function () { return _this.open(); }); };
                                    this.input.onclick = function () { return _this.taskQueue.queueTask(function () { return _this.open(); }); };
                                    this.element.mdRenderValidateResults = this.mdRenderValidateResults;
                                    this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
                                    if (!this.preloadOptions) return [3 /*break*/, 2];
                                    _a = this;
                                    return [4 /*yield*/, this.getOptions({ value: this.value, filter: this.filter })];
                                case 1:
                                    _a.options = _b.sent();
                                    _b.label = 2;
                                case 2:
                                    this.updateLabel();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                MdLookup.prototype.detached = function () {
                    if (this.input) {
                        this.input.onselect = null;
                        this.input.onfocus = null;
                        this.input.onblur = null;
                    }
                    au.MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input);
                    this.element.mdRenderValidateResults = null;
                    this.element.mdUnrenderValidateResults = null;
                };
                MdLookup.prototype.select = function (option) {
                    if (this.valueFieldName) {
                        if (this.valueFieldName instanceof Function) {
                            this.value = this.valueFieldName(option);
                        }
                        else {
                            this.value = option[this.valueFieldName];
                        }
                    }
                    else {
                        this.value = option;
                    }
                    // this.setFilter(this.getDisplayValue(option));
                    // this.options = [option];
                    this.close();
                    au.fireEvent(this.element, "selected", { value: this.value });
                };
                MdLookup.prototype.getDisplayValue = function (option) {
                    if (option === null || option === undefined) {
                        return null;
                    }
                    if (!this.displayFieldName) {
                        return option;
                    }
                    else if (this.displayFieldName instanceof Function) {
                        return this.displayFieldName(option);
                    }
                    else {
                        return option[this.displayFieldName];
                    }
                };
                var MdLookup_1;
                MdLookup.searching = Symbol("searching");
                MdLookup.error = Symbol("error");
                MdLookup.id = 0;
                tslib_1.__decorate([
                    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", String)
                ], MdLookup.prototype, "filter", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdLookup.prototype, "label", void 0);
                tslib_1.__decorate([
                    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Object)
                ], MdLookup.prototype, "value", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Function)
                ], MdLookup.prototype, "optionsFunction", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdLookup.prototype, "displayFieldName", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdLookup.prototype, "valueFieldName", void 0);
                tslib_1.__decorate([
                    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdLookup.prototype, "readonly", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdLookup.prototype, "placeholder", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd,
                    tslib_1.__metadata("design:type", Number)
                ], MdLookup.prototype, "debounce", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdLookup.prototype, "preloadOptions", void 0);
                tslib_1.__decorate([
                    au.observable,
                    tslib_1.__metadata("design:type", Array)
                ], MdLookup.prototype, "options", void 0);
                MdLookup = MdLookup_1 = tslib_1.__decorate([
                    au.customElement("md-lookup"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
                ], MdLookup);
                return MdLookup;
            }());
            exports_1("MdLookup", MdLookup);
        }
    };
});
//# sourceMappingURL=lookup.js.map