"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_logging_1 = require("aurelia-logging");
var attributes_1 = require("../common/attributes");
var events_1 = require("../common/events");
var sidenav_1 = require("./sidenav");
var MdSidenavCollapse = /** @class */ (function () {
    function MdSidenavCollapse(element) {
        this.element = element;
        this.element = element;
        this.log = aurelia_logging_1.getLogger("md-sidenav-collapse");
    }
    MdSidenavCollapse.prototype.attached = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var closeOnClick, sideNavConfig;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ref.whenAttached];
                    case 1:
                        _a.sent();
                        closeOnClick = this.ref.mdFixed && window.innerWidth > 992 ? false : attributes_1.getBooleanFromAttributeValue(this.ref.mdCloseOnClick);
                        this.onHide = this.onHide.bind(this);
                        this.onShow = this.onShow.bind(this);
                        this.element.setAttribute("data-activates", this.ref.controlId);
                        sideNavConfig = {
                            edge: this.ref.mdEdge || "left",
                            closeOnClick: closeOnClick,
                            menuWidth: parseInt(this.ref.mdWidth.toString(), 10),
                            onClose: this.onHide,
                            onOpen: this.onShow
                        };
                        $(this.element).sideNav(sideNavConfig);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdSidenavCollapse.prototype.detached = function () {
        // destroy handler not available
    };
    MdSidenavCollapse.prototype.show = function () {
        $(this.element).sideNav("show");
    };
    MdSidenavCollapse.prototype.hide = function () {
        $(this.element).sideNav("hide");
    };
    MdSidenavCollapse.prototype.onShow = function (el) {
        events_1.fireMaterializeEvent(this.ref.element, "sidenav-show");
    };
    MdSidenavCollapse.prototype.onHide = function (el) {
        events_1.fireMaterializeEvent(this.ref.element, "sidenav-hide");
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", sidenav_1.MdSidenav)
    ], MdSidenavCollapse.prototype, "ref", void 0);
    MdSidenavCollapse = tslib_1.__decorate([
        aurelia_framework_1.customAttribute("md-sidenav-collapse"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdSidenavCollapse);
    return MdSidenavCollapse;
}());
exports.MdSidenavCollapse = MdSidenavCollapse;
