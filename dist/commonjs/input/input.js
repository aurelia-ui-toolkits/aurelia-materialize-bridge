"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
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
        this.validateResults = [];
        this.blurOnEnterHandler = function (e) {
            if (e.keyCode && e.keyCode === 13) {
                _this.input.blur();
            }
        };
        this.mdUnrenderValidateResults = function (results, renderer) {
            _this.validateResults = _this.validateResults.filter(function (x) { return !results.find(function (y) { return y.id === x.id; }); });
            _this.validationClass = undefined;
        };
        this.mdRenderValidateResults = function (results, renderer) {
            var _a;
            if (_this.showErrortext) {
                (_a = _this.validateResults).push.apply(_a, tslib_1.__spread(results.filter(function (x) { return !x.valid; })));
            }
            _this.validationClass = results.find(function (x) { return !x.valid; }) ? "invalid" : "valid";
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
        this.validateResults = [];
        this.validationClass = undefined;
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
//# sourceMappingURL=input.js.map