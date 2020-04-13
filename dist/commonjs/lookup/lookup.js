"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var lookup_state_1 = require("./lookup-state");
var discardable_promise_1 = require("../common/discardable-promise");
var config_builder_1 = require("../config-builder");
var MdLookup = /** @class */ (function () {
    function MdLookup(element, taskQueue, configBuilder) {
        var _this = this;
        this.element = element;
        this.taskQueue = taskQueue;
        this.configBuilder = configBuilder;
        this.validateResults = [];
        this.blurAction = "Nothing";
        this.placeholder = "Start Typing To Search";
        this.debounce = 850;
        this.LookupState = lookup_state_1.LookupState; // for usage from the html template
        this.mdUnrenderValidateResults = function (results, renderer) {
            _this.validateResults = _this.validateResults.filter(function (x) { return !results.find(function (y) { return y.id === x.id; }); });
            _this.validationClass = undefined;
        };
        this.mdRenderValidateResults = function (results, renderer) {
            var _a;
            (_a = _this.validateResults).push.apply(_a, tslib_1.__spread(results.filter(function (x) { return !x.valid; })));
            _this.validationClass = results.find(function (x) { return !x.valid; }) ? "invalid" : "valid";
        };
        this.logger = au.getLogger("MdLookup");
        this.controlId = "md-lookup-" + MdLookup_1.id++;
    }
    MdLookup_1 = MdLookup;
    MdLookup.prototype.filterChanged = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, e_1;
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
                        e_1 = _b.sent();
                        if (e_1 !== discardable_promise_1.DiscardablePromise.discarded) {
                            this.options = [MdLookup_1.error, e_1.message];
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
            _this.dropdown.style.top = inputRect.top + inputRect.height + 3 + "px";
            _this.dropdown.style.width = inputRect.width + "px";
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
        if ((["SetOnMatch", "Both"].includes(this.blurAction)) && this.options && this.options.length === 1) {
            this.setValue(this.options[0]);
            this.setFilter(this.getDisplayValue(this.options[0]));
        }
        else if (["ClearOnNoMatch", "Both"].includes(this.blurAction) && this.optionsContainsText(this.filter)) {
            this.setValue(undefined);
            this.setFilter(undefined);
        }
        this.close();
        au.fireEvent(this.element, "blur");
    };
    MdLookup.prototype.optionsContainsText = function (txt) {
        var _this = this;
        return !this.options || !this.options.some(function (opt) { return _this.getDisplayValue(opt) === txt; });
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
                        this.input.onfocus = function () { return _this.taskQueue.queueTask(function () { return _this.open(); }); };
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
            this.input.onfocus = null;
        }
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
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdLookup.prototype, "blurAction", void 0);
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
        tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue, config_builder_1.ConfigBuilder])
    ], MdLookup);
    return MdLookup;
}());
exports.MdLookup = MdLookup;
//# sourceMappingURL=lookup.js.map