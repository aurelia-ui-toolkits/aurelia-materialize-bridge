import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdChips = class MdChips {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.autocompleteData = {};
        this.data = [];
        this.log = au.getLogger("md-chips");
    }
    dataChanged(newValue, oldValue) {
        this.refresh();
        // I know this is a bit naive..
        if (newValue.length > oldValue.length) {
            const chip = newValue.find(i => !oldValue.includes(i));
            au.fireEvent(this.element, "change", { source: "dataChanged", operation: "add", target: chip, data: newValue });
        }
        if (newValue.length < oldValue.length) {
            const chip = oldValue.find(i => !newValue.includes(i));
            au.fireEvent(this.element, "change", { source: "dataChanged", operation: "delete", target: chip, data: newValue });
        }
    }
    bind() {
        // suppress initial change handler calls
    }
    attached() {
        this.refresh();
    }
    detached() {
        this.instance.destroy();
    }
    refresh() {
        const options = {
            data: this.data,
            placeholder: this.placeholder,
            limit: this.limit,
            secondaryPlaceholder: this.secondaryPlaceholder,
            onChipAdd: () => this.data = this.instance.chipsData,
            onChipDelete: () => this.data = this.instance.chipsData,
            onChipSelect: (e, chip) => au.fireEvent(this.element, "selected", { target: chip })
        };
        if (this.autocompleteData) {
            options.autocompleteOptions = { data: this.autocompleteData };
        }
        au.cleanOptions(options);
        this.instance = new M.Chips(this.element, options);
    }
};
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", Object)
], MdChips.prototype, "autocompleteData", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
    tslib_1.__metadata("design:type", Array)
], MdChips.prototype, "data", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd,
    tslib_1.__metadata("design:type", String)
], MdChips.prototype, "placeholder", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd,
    tslib_1.__metadata("design:type", String)
], MdChips.prototype, "secondaryPlaceholder", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdChips.prototype, "limit", void 0);
MdChips = tslib_1.__decorate([
    au.customAttribute("md-chips"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
], MdChips);
export { MdChips };
//# sourceMappingURL=chips.js.map