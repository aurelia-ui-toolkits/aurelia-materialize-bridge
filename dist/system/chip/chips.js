System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdChips;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdChips = /** @class */ (function () {
                function MdChips(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.autocompleteData = {};
                    this.data = [];
                    this.log = au.getLogger("md-chips");
                }
                MdChips.prototype.dataChanged = function (newValue, oldValue) {
                    this.refresh();
                    // I know this is a bit naive..
                    if (newValue.length > oldValue.length) {
                        var chip = newValue.find(function (i) { return !oldValue.includes(i); });
                        au.fireEvent(this.element, "change", { source: "dataChanged", operation: "add", target: chip, data: newValue });
                    }
                    if (newValue.length < oldValue.length) {
                        var chip = oldValue.find(function (i) { return !newValue.includes(i); });
                        au.fireEvent(this.element, "change", { source: "dataChanged", operation: "delete", target: chip, data: newValue });
                    }
                };
                MdChips.prototype.bind = function () {
                    // suppress initial change handler calls
                };
                MdChips.prototype.attached = function () {
                    this.refresh();
                };
                MdChips.prototype.detached = function () {
                    this.instance.destroy();
                };
                MdChips.prototype.refresh = function () {
                    var _this = this;
                    var options = {
                        data: this.data,
                        placeholder: this.placeholder,
                        limit: this.limit,
                        secondaryPlaceholder: this.secondaryPlaceholder,
                        onChipAdd: function () { return _this.data = _this.instance.chipsData; },
                        onChipDelete: function () { return _this.data = _this.instance.chipsData; },
                        onChipSelect: function (e, chip) { return au.fireEvent(_this.element, "selected", { target: chip }); }
                    };
                    if (this.autocompleteData) {
                        options.autocompleteOptions = { data: this.autocompleteData };
                    }
                    au.cleanOptions(options);
                    this.instance = new M.Chips(this.element, options);
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
                return MdChips;
            }());
            exports_1("MdChips", MdChips);
        }
    };
});
//# sourceMappingURL=chips.js.map