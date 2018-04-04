"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var attributeManager_1 = require("../common/attributeManager");
var attributes_1 = require("../common/attributes");
var MdBadge = /** @class */ (function () {
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
exports.MdBadge = MdBadge;
