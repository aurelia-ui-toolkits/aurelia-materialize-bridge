System.register(["tslib", "aurelia-framework", "aurelia-logging", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, aurelia_logging_1, events_1, MdChips;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
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
            MdChips = /** @class */ (function () {
                function MdChips(element) {
                    this.element = element;
                    this.autocompleteData = {};
                    this.data = [];
                    this.placeholder = "";
                    this.secondaryPlaceholder = "";
                    this.log = aurelia_logging_1.getLogger("md-chips");
                    this.onChipAdd = this.onChipAdd.bind(this);
                    this.onChipDelete = this.onChipDelete.bind(this);
                    this.onChipSelect = this.onChipSelect.bind(this);
                }
                MdChips.prototype.dataChanged = function (newValue, oldValue) {
                    this.refresh();
                    // I know this is a bit naive..
                    if (newValue.length > oldValue.length) {
                        var chip = newValue.find(function (i) { return !oldValue.includes(i); });
                        events_1.fireEvent(this.element, "change", { source: "dataChanged", operation: "add", target: chip, data: newValue });
                    }
                    if (newValue.length < oldValue.length) {
                        var chip = oldValue.find(function (i) { return !newValue.includes(i); });
                        events_1.fireEvent(this.element, "change", { source: "dataChanged", operation: "delete", target: chip, data: newValue });
                    }
                };
                MdChips.prototype.attached = function () {
                    this.refresh();
                    $(this.element).on("chip.add", this.onChipAdd);
                    $(this.element).on("chip.delete", this.onChipDelete);
                    $(this.element).on("chip.select", this.onChipSelect);
                };
                MdChips.prototype.detached = function () {
                    $(this.element).off("chip.add", this.onChipAdd);
                    $(this.element).off("chip.delete", this.onChipDelete);
                    $(this.element).off("chip.select", this.onChipSelect);
                };
                MdChips.prototype.refresh = function () {
                    var options = {
                        autocompleteOptions: {
                            data: this.autocompleteData
                        },
                        data: this.data,
                        placeholder: this.placeholder,
                        secondaryPlaceholder: this.secondaryPlaceholder
                    };
                    $(this.element).material_chip(options);
                };
                MdChips.prototype.onChipAdd = function (e, chip) {
                    this.data = $(this.element).material_chip("data");
                };
                MdChips.prototype.onChipDelete = function (e, chip) {
                    this.data = $(this.element).material_chip("data");
                };
                MdChips.prototype.onChipSelect = function (e, chip) {
                    events_1.fireEvent(this.element, "selected", { target: chip });
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdChips.prototype, "autocompleteData", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Array)
                ], MdChips.prototype, "data", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdChips.prototype, "placeholder", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdChips.prototype, "secondaryPlaceholder", void 0);
                MdChips = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-chips"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdChips);
                return MdChips;
            }());
            exports_1("MdChips", MdChips);
        }
    };
});
