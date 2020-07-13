import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdAutoComplete = class MdAutoComplete {
    constructor(element) {
        this.element = element;
        this.input = null;
        this.values = {};
    }
    valuesChanged() {
        if (this.instance) {
            this.instance.updateData(this.values);
        }
    }
    bind() {
        // suppress initial change handler calls
    }
    attached() {
        if (this.element.tagName.toLowerCase() === "input") {
            this.input = this.element;
        }
        else if (this.element.tagName.toLowerCase() === "md-input") {
            this.input = this.element.au["md-input"].viewModel.input;
        }
        else {
            throw new Error("md-autocomplete must be attached to either an input or md-input element");
        }
        let options = {
            data: this.values,
            limit: this.limit,
            minLength: this.minLength,
            onAutocomplete: text => {
                au.fireMaterializeEvent(this.element, "autocomplete", { text });
            }
        };
        au.cleanOptions(options);
        this.instance = new M.Autocomplete(this.input, options);
    }
    detached() {
        this.instance.destroy();
    }
};
__decorate([
    au.ato.bindable.numberMd,
    __metadata("design:type", Number)
], MdAutoComplete.prototype, "limit", void 0);
__decorate([
    au.ato.bindable.numberMd,
    __metadata("design:type", Number)
], MdAutoComplete.prototype, "minLength", void 0);
__decorate([
    au.bindable,
    __metadata("design:type", Object)
], MdAutoComplete.prototype, "values", void 0);
MdAutoComplete = __decorate([
    au.customAttribute("md-autocomplete"),
    au.autoinject,
    __metadata("design:paramtypes", [Element])
], MdAutoComplete);
export { MdAutoComplete };
//# sourceMappingURL=autocomplete.js.map