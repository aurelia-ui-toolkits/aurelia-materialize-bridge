"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var lookup_state_1 = require("./lookup-state");
var MdLookup = /** @class */ (function () {
    function MdLookup(element, taskQueue) {
        var _this = this;
        this.element = element;
        this.taskQueue = taskQueue;
        this.placeholder = "Start Typing To Search";
        this.LookupState = lookup_state_1.LookupState; // for usage from the html template
        this.mdUnrenderValidateResults = function (results, renderer) {
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
            var e_1, _a;
        };
        this.mdRenderValidateResults = function (results, renderer) {
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
            var e_2, _a;
        };
        this.logger = au.getLogger("MdLookup");
    }
    MdLookup_1 = MdLookup;
    MdLookup.prototype.filterChanged = function () {
        if (this.suppressFilterChanged) {
            this.logger.debug("unsuppressed filter changed");
            this.suppressFilterChanged = false;
            return;
        }
        this.setValue(undefined);
    };
    MdLookup.prototype.setFilter = function (filter) {
        if (this.filter === filter) {
            return;
        }
        this.logger.debug("suppressed filter changed", filter);
        this.suppressFilterChanged = true;
        this.filter = filter;
    };
    MdLookup.prototype.valueChanged = function (newValue, oldValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.suppressValueChanged) {
                            this.logger.debug("unsuppressed value changed");
                            this.suppressValueChanged = false;
                            return [2 /*return*/];
                        }
                        this.logger.debug("valueChanged", newValue);
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
        this.logger.debug("suppressed value changed", value);
        this.suppressValueChanged = true;
        this.value = value;
    };
    MdLookup.prototype.optionsChanged = function () {
        if (!this.options || !(this.options instanceof Array) || !this.options.length) {
            this.state = lookup_state_1.LookupState.noMatches;
        }
        else if (this.options[0] === MdLookup_1.searching) {
            this.state = lookup_state_1.LookupState.searching;
            this.searchingMessage = this.options.length > 1 ? this.options[1] : "Searching...";
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
        this.logger.debug("updateFilterBasedOnValue", this.value);
        this.options = [this.value];
        if (this.options && this.options.length) {
            this.setFilter(this.getDisplayValue(this.options[0]));
        }
        else {
            this.setFilter(undefined);
        }
    };
    MdLookup.prototype.fixDropdownSizeIfTooBig = function () {
        var _this = this;
        this.taskQueue.queueTask(function () {
            if (!_this.isOpen) {
                return;
            }
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
    MdLookup.prototype.bind = function (bindingContext, overrideContext) {
        if (this.value) {
            this.updateFilterBasedOnValue();
        }
    };
    MdLookup.prototype.attached = function () {
        var _this = this;
        this.logger.debug("attached");
        // we need to use queueTask because open sometimes happens before browser bubbles the click further thus closing just opened dropdown
        this.input.onselect = function () { return _this.taskQueue.queueTask(function () { return _this.open(); }); };
        this.input.onclick = function () { return _this.taskQueue.queueTask(function () { return _this.open(); }); };
        this.input.onblur = function () { return _this.close(); };
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.labelElement.classList.add(this.filter || this.placeholder ? "active" : "inactive");
    };
    MdLookup.prototype.detached = function () {
        this.input.onselect = null;
        this.input.onfocus = null;
        this.input.onblur = null;
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
        this.close();
        au.fireEvent(this.element, "selected", { value: this.value });
    };
    MdLookup.prototype.getDisplayValue = function (option) {
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
    MdLookup.searching = Symbol("searching");
    MdLookup.error = Symbol("error");
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
        au.bindable,
        tslib_1.__metadata("design:type", Array)
    ], MdLookup.prototype, "options", void 0);
    MdLookup = MdLookup_1 = tslib_1.__decorate([
        au.customElement("md-lookup"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
    ], MdLookup);
    return MdLookup;
    var MdLookup_1;
}());
exports.MdLookup = MdLookup;
//# sourceMappingURL=lookup.js.map