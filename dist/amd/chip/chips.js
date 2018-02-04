var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "../common/events"], function (require, exports, aurelia_framework_1, aurelia_logging_1, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdChips = class MdChips {
        constructor(element) {
            this.element = element;
            this.autocompleteOptions = {};
            this.data = [];
            this.placeholder = "";
            this.secondaryPlaceholder = "";
            this.log = aurelia_logging_1.getLogger("md-chips");
            this.onChipAdd = this.onChipAdd.bind(this);
            this.onChipDelete = this.onChipDelete.bind(this);
            this.onChipSelect = this.onChipSelect.bind(this);
        }
        dataChanged(newValue, oldValue) {
            this.refresh();
            // I know this is a bit naive..
            if (newValue.length > oldValue.length) {
                const chip = newValue.find(i => !oldValue.includes(i));
                events_1.fireEvent(this.element, "change", { source: "dataChanged", operation: "add", target: chip, data: newValue });
            }
            if (newValue.length < oldValue.length) {
                const chip = oldValue.find(i => !newValue.includes(i));
                events_1.fireEvent(this.element, "change", { source: "dataChanged", operation: "delete", target: chip, data: newValue });
            }
        }
        attached() {
            this.refresh();
            $(this.element).on("chip.add", this.onChipAdd);
            $(this.element).on("chip.delete", this.onChipDelete);
            $(this.element).on("chip.select", this.onChipSelect);
        }
        detached() {
            $(this.element).off("chip.add", this.onChipAdd);
            $(this.element).off("chip.delete", this.onChipDelete);
            $(this.element).off("chip.select", this.onChipSelect);
        }
        refresh() {
            const options = {
                autocompleteOptions: this.autocompleteOptions,
                data: this.data,
                placeholder: this.placeholder,
                secondaryPlaceholder: this.secondaryPlaceholder
            };
            $(this.element).material_chip(options);
        }
        onChipAdd(e, chip) {
            this.data = $(this.element).material_chip("data");
        }
        onChipDelete(e, chip) {
            this.data = $(this.element).material_chip("data");
        }
        onChipSelect(e, chip) {
            events_1.fireEvent(this.element, "selected", { target: chip });
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdChips.prototype, "autocompleteOptions", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Array)
    ], MdChips.prototype, "data", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], MdChips.prototype, "placeholder", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], MdChips.prototype, "secondaryPlaceholder", void 0);
    MdChips = __decorate([
        aurelia_framework_1.customAttribute("md-chips"),
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdChips);
    exports.MdChips = MdChips;
});
