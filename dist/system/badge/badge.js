System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdBadge;
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
            MdBadge = /** @class */ (function () {
                function MdBadge(element) {
                    this.element = element;
                    this.isNew = false;
                    this.caption = null;
                    this.attributeManager = new au.AttributeManager(this.element);
                }
                MdBadge.prototype.isNewChanged = function () {
                    if (this.isNew) {
                        this.attributeManager.addClasses("new");
                    }
                    else {
                        this.attributeManager.removeClasses("new");
                    }
                };
                MdBadge.prototype.captionChanged = function () {
                    if (this.caption !== null) {
                        this.attributeManager.addAttributes({ "data-badge-caption": this.caption });
                    }
                    else {
                        this.attributeManager.removeAttributes(["data-badge-caption"]);
                    }
                };
                MdBadge.prototype.attached = function () {
                    this.element.classList.add("badge");
                };
                MdBadge.prototype.detached = function () {
                    this.attributeManager.removeClasses(["badge", "new"]);
                    this.attributeManager.removeAttributes(["data-badge-caption"]);
                };
                tslib_1.__decorate([
                    au.ato.bindable,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdBadge.prototype, "isNew", void 0);
                tslib_1.__decorate([
                    au.ato.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdBadge.prototype, "caption", void 0);
                MdBadge = tslib_1.__decorate([
                    au.customAttribute("md-badge"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdBadge);
                return MdBadge;
            }());
            exports_1("MdBadge", MdBadge);
        }
    };
});
//# sourceMappingURL=badge.js.map