import * as tslib_1 from "tslib";
var MdLookup_1;
import * as au from "../aurelia";
import { LookupState } from "./lookup-state";
import { DiscardablePromise, discard } from "../common/discardable-promise";
let MdLookup = MdLookup_1 = class MdLookup {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.placeholder = "Start Typing To Search";
        this.debounce = 850;
        this.LookupState = LookupState; // for usage from the html template
        this.mdUnrenderValidateResults = (results, renderer) => {
            for (let result of results) {
                if (!result.valid) {
                    renderer.removeMessage(this.validationContainer, result);
                }
            }
            renderer.removeValidationClasses(this.input);
        };
        this.mdRenderValidateResults = (results, renderer) => {
            for (let result of results) {
                if (!result.valid) {
                    renderer.addMessage(this.validationContainer, result);
                }
            }
            renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
        };
        this.logger = au.getLogger("MdLookup");
        this.controlId = `md-lookup-${MdLookup_1.id++}`;
    }
    filterChanged() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug("filterChanged");
            if (!this.optionsFunction) {
                return;
            }
            if (this.suppressFilterChanged) {
                this.logger.debug("unsuppressed filter changed");
                this.suppressFilterChanged = false;
                return;
            }
            this.setValue(undefined);
            discard(this.searchPromise);
            this.options = [MdLookup_1.searching];
            try {
                this.searchPromise = new DiscardablePromise(this.getOptions({ filter: this.filter }));
                this.options = yield this.searchPromise;
                this.fixDropdownSizeIfTooBig();
            }
            catch (e) {
                if (e !== DiscardablePromise.discarded) {
                    this.options = [MdLookup_1.error, e.message];
                }
            }
        });
    }
    setFilter(filter) {
        if (this.filter === filter) {
            return;
        }
        this.logger.debug("suppressed filter changed");
        this.suppressFilterChanged = true;
        this.filter = filter;
        this.taskQueue.queueTask(() => this.updateLabel());
    }
    valueChanged(newValue, oldValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug("valueChanged", newValue);
            if (this.suppressValueChanged) {
                this.logger.debug("unsuppressed value changed");
                this.suppressValueChanged = false;
                return;
            }
            yield this.updateFilterBasedOnValue();
        });
    }
    setValue(value) {
        if (this.value === value) {
            return;
        }
        this.logger.debug("suppressed value changed");
        this.suppressValueChanged = true;
        this.value = value;
    }
    optionsChanged() {
        this.logger.debug("optionsChanged", this.options);
        if (!this.options || !(this.options instanceof Array) || !this.options.length) {
            this.state = LookupState.noMatches;
        }
        else if (this.options[0] === MdLookup_1.searching) {
            this.state = LookupState.searching;
        }
        else if (this.options[0] === MdLookup_1.error) {
            this.state = LookupState.error;
            this.errorMessage = this.options.length > 1 ? this.options[1] : "Error occurred";
        }
        else {
            this.state = LookupState.optionsVisible;
        }
    }
    updateFilterBasedOnValue() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug("updateFilterBasedOnValue", this.value);
            if (this.value) {
                this.options = yield this.getOptions({ value: this.value });
            }
            else {
                this.options = [];
            }
            if (this.options && this.options.length) {
                this.setFilter(this.getDisplayValue(this.options[0]));
            }
            else {
                this.setFilter(undefined);
            }
        });
    }
    fixDropdownSizeIfTooBig() {
        this.taskQueue.queueTask(() => {
            if (!this.isOpen) {
                return;
            }
            // adjust dropdown top so it sits right below the input
            // doing it with CSS will not work if input margin is redefined
            let inputRect = this.input.getBoundingClientRect();
            this.dropdown.style.top = `${inputRect.height + 3}px`;
            const rect = this.dropdown.getBoundingClientRect();
            let availableSpace = window.innerHeight - rect.top + document.body.scrollTop - 5;
            if (this.dropdownUl.offsetHeight > availableSpace) {
                this.dropdown.style.height = `${availableSpace}px`;
            }
            else {
                this.dropdown.style.height = "auto";
            }
        });
    }
    open() {
        if (!this.readonly) {
            this.logger.debug("open");
            this.isOpen = true;
            this.fixDropdownSizeIfTooBig();
        }
    }
    close() {
        this.logger.debug("close");
        this.isOpen = false;
    }
    blur() {
        this.close();
        au.fireEvent(this.element, "blur");
    }
    focus() {
        this.input.focus();
        au.fireEvent(this.element, "focus");
    }
    updateLabel() {
        au.updateLabel(this.input, this.labelElement);
    }
    bind(bindingContext, overrideContext) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.bindingContext = bindingContext;
            if (this.optionsFunction) {
                this.getOptions = this.optionsFunction.bind(this.bindingContext);
            }
            yield this.updateFilterBasedOnValue();
            // restore initial value because it is set by updateFilterBasedOnValue
            this.suppressFilterChanged = false;
        });
    }
    attached() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug("attached");
            if (this.placeholder) {
                this.input.setAttribute("placeholder", this.placeholder);
            }
            // we need to use queueTask because open sometimes happens before browser bubbles the click further thus closing just opened dropdown
            this.input.onselect = () => this.taskQueue.queueTask(() => this.open());
            this.input.onclick = () => this.taskQueue.queueTask(() => this.open());
            this.element.mdRenderValidateResults = this.mdRenderValidateResults;
            this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
            if (this.preloadOptions) {
                this.options = yield this.getOptions({ value: this.value, filter: this.filter });
            }
            this.updateLabel();
        });
    }
    detached() {
        if (this.input) {
            this.input.onselect = null;
            this.input.onfocus = null;
            this.input.onblur = null;
        }
        au.MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input);
        this.element.mdRenderValidateResults = null;
        this.element.mdUnrenderValidateResults = null;
    }
    select(option) {
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
    }
    getDisplayValue(option) {
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
    }
};
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
export { MdLookup };
//# sourceMappingURL=lookup.js.map