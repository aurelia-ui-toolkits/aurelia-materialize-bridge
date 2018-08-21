System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdCollapsible;
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
            MdCollapsible = /** @class */ (function () {
                function MdCollapsible(element) {
                    this.element = element;
                    this.attributeManager = new au.AttributeManager(this.element);
                }
                MdCollapsible.prototype.accordionChanged = function () {
                    this.attached();
                };
                MdCollapsible.prototype.bind = function () {
                    //
                };
                MdCollapsible.prototype.attached = function () {
                    var _this = this;
                    this.attributeManager.addClasses("collapsible");
                    if (this.popout) {
                        this.attributeManager.addClasses("popout");
                    }
                    var options = {
                        accordion: this.accordion,
                        inDuration: this.inDuration,
                        outDuration: this.outDuration,
                        onOpenStart: function (el) { return au.fireMaterializeEvent(_this.element, "open-start", { el: el }); },
                        onOpenEnd: function (el) { return au.fireMaterializeEvent(_this.element, "open-end", { el: el }); },
                        onCloseStart: function (el) { return au.fireMaterializeEvent(_this.element, "close-start", { el: el }); },
                        onCloseEnd: function (el) { return au.fireMaterializeEvent(_this.element, "close-end", { el: el }); }
                    };
                    au.cleanOptions(options);
                    this.instance = new M.Collapsible(this.element, options);
                };
                MdCollapsible.prototype.detached = function () {
                    this.attributeManager.removeClasses(["collapsible", "popout"]);
                    this.instance.destroy();
                };
                MdCollapsible.prototype.open = function (index) {
                    if (index === void 0) { index = 0; }
                    this.instance.open(index);
                };
                MdCollapsible.prototype.close = function (index) {
                    if (index === void 0) { index = 0; }
                    this.instance.close(index);
                };
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdCollapsible.prototype, "accordion", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdCollapsible.prototype, "popout", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Number)
                ], MdCollapsible.prototype, "inDuration", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Number)
                ], MdCollapsible.prototype, "outDuration", void 0);
                MdCollapsible = tslib_1.__decorate([
                    au.customAttribute("md-collapsible"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdCollapsible);
                return MdCollapsible;
            }());
            exports_1("MdCollapsible", MdCollapsible);
        }
    };
});
//# sourceMappingURL=collapsible.js.map