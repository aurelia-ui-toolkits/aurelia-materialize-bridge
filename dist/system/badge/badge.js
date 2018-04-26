System.register(["tslib", "aurelia-framework", "../common/attributeManager", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributeManager_1, attributes_1, MdBadge;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributeManager_1_1) {
                attributeManager_1 = attributeManager_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            }
        ],
        execute: function () {
            MdBadge = /** @class */ (function () {
                function MdBadge(element) {
                    this.element = element;
                    this.isNew = false;
                    this.caption = null;
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                }
                MdBadge.prototype.isNewChanged = function (newValue) {
                    if (attributes_1.getBooleanFromAttributeValue(newValue)) {
                        this.attributeManager.addClasses("new");
                    }
                    else {
                        this.attributeManager.removeClasses("new");
                    }
                };
                MdBadge.prototype.captionChanged = function (newValue) {
                    if (newValue !== null) {
                        this.attributeManager.addAttributes({ "data-badge-caption": newValue });
                    }
                    else {
                        this.attributeManager.removeAttributes(["data-badge-caption"]);
                    }
                };
                MdBadge.prototype.attached = function () {
                    var classes = ["badge"];
                    if (attributes_1.getBooleanFromAttributeValue(this.isNew)) {
                        classes.push("new");
                    }
                    if (this.caption !== null) {
                        this.attributeManager.addAttributes({ "data-badge-caption": this.caption });
                    }
                    this.attributeManager.addClasses(classes);
                };
                MdBadge.prototype.detached = function () {
                    this.attributeManager.removeClasses(["badge", "new"]);
                    this.attributeManager.removeAttributes(["data-badge-caption"]);
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdBadge.prototype, "isNew", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdBadge.prototype, "caption", void 0);
                MdBadge = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-badge"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdBadge);
                return MdBadge;
            }());
            exports_1("MdBadge", MdBadge);
        }
    };
});
//# sourceMappingURL=badge.js.map