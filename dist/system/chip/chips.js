System.register(["aurelia-framework", "aurelia-logging", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_logging_1, events_1, MdChips;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            MdChips = class MdChips {
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
                aurelia_framework_1.bindable
            ], MdChips.prototype, "autocompleteOptions", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
            ], MdChips.prototype, "data", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdChips.prototype, "placeholder", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdChips.prototype, "secondaryPlaceholder", void 0);
            MdChips = __decorate([
                aurelia_framework_1.autoinject
            ], MdChips);
            exports_1("MdChips", MdChips);
        }
    };
});
