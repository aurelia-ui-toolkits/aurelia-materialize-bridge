"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var attributes_1 = require("../common/attributes");
var attributeManager_1 = require("../common/attributeManager");
var aurelia_logging_1 = require("aurelia-logging");
var MdSidenav = /** @class */ (function () {
    function MdSidenav(element) {
        var _this = this;
        this.element = element;
        this.mdCloseOnClick = false;
        this.mdEdge = "left";
        this.mdFixed = false;
        this.mdWidth = 300;
        this.whenAttached = new Promise(function (resolve, reject) { return _this.attachedResolver = resolve; });
        this.controlId = "md-sidenav-" + MdSidenav_1.id++;
        this.log = aurelia_logging_1.getLogger("md-sidenav");
        this.whenAttached = new Promise(function (resolve, reject) {
            _this.attachedResolver = resolve;
        });
    }
    MdSidenav_1 = MdSidenav;
    MdSidenav.prototype.attached = function () {
        this.attributeManager = new attributeManager_1.AttributeManager(this.sidenav);
        if (attributes_1.getBooleanFromAttributeValue(this.mdFixed)) {
            this.attributeManager.addClasses("fixed");
            if (this.mdEdge === "right") {
                // see: https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/53
                this.attributeManager.addClasses("right-aligned");
            }
        }
        this.attachedResolver();
    };
    MdSidenav.prototype.detached = function () {
        this.attributeManager.removeClasses(["fixed", "right-aligned"]);
    };
    MdSidenav.prototype.mdFixedChanged = function (newValue) {
        if (this.attributeManager) {
            if (attributes_1.getBooleanFromAttributeValue(newValue)) {
                this.attributeManager.addClasses("fixed");
            }
            else {
                this.attributeManager.removeClasses("fixed");
            }
        }
    };
    MdSidenav.id = 0;
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdSidenav.prototype, "mdCloseOnClick", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdSidenav.prototype, "mdEdge", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdSidenav.prototype, "mdFixed", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdSidenav.prototype, "mdWidth", void 0);
    MdSidenav = MdSidenav_1 = tslib_1.__decorate([
        aurelia_framework_1.customElement("md-sidenav"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdSidenav);
    return MdSidenav;
    var MdSidenav_1;
}());
exports.MdSidenav = MdSidenav;
