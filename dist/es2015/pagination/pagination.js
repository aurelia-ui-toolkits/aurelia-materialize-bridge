import * as tslib_1 from "tslib";
import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { fireMaterializeEvent } from "../common/events";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdPagination = /** @class */ (function () {
    function MdPagination(element) {
        this.element = element;
        this.mdActivePage = 1;
        this.mdPages = 5;
        this.mdVisiblePageLinks = 15;
        this.mdPageLinks = [];
        this.mdShowFirstLast = true;
        this.mdShowPrevNext = true;
        this.mdShowPageLinks = true;
        // local variables to stop Changed events when parsing to int
        this.numberOfLinks = 15;
        this.pages = 5;
    }
    MdPagination.prototype.bind = function () {
        // attached() throws unhandled exceptions
        this.pages = parseInt(this.mdPages.toString(), 10);
        // We don't want mdVisiblePageLinks to be greater than mdPages
        this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks.toString(), 10), this.pages);
        this.mdShowFirstLast = getBooleanFromAttributeValue(this.mdShowFirstLast);
        this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
        this.mdPageLinks = this.generatePageLinks();
    };
    MdPagination.prototype.setActivePage = function (page) {
        this.mdActivePage = parseInt(page, 10);
        this.mdPageLinks = this.generatePageLinks();
        fireMaterializeEvent(this.element, "page-changed", this.mdActivePage);
    };
    MdPagination.prototype.setFirstPage = function () {
        if (this.mdActivePage > 1) {
            this.setActivePage(1);
        }
    };
    MdPagination.prototype.setLastPage = function () {
        if (this.mdActivePage < this.pages) {
            this.setActivePage(this.pages);
        }
    };
    MdPagination.prototype.setPreviousPage = function () {
        if (this.mdActivePage > 1) {
            this.setActivePage(this.mdActivePage - 1);
        }
    };
    MdPagination.prototype.setNextPage = function () {
        if (this.mdActivePage < this.pages) {
            this.setActivePage(this.mdActivePage + 1);
        }
    };
    MdPagination.prototype.mdPagesChanged = function () {
        this.pages = parseInt(this.mdPages.toString(), 10);
        this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks.toString(), 10), this.pages);
        this.setActivePage(1);
    };
    MdPagination.prototype.mdVisiblePageLinksChanged = function () {
        this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks.toString(), 10), this.pages);
        this.mdPageLinks = this.generatePageLinks();
    };
    MdPagination.prototype.generatePageLinks = function () {
        var midPoint = this.numberOfLinks / 2;
        var start = Math.max(this.mdActivePage - midPoint, 0);
        // respect visible links
        if (start + midPoint * 2 > this.pages) {
            start = this.pages - midPoint * 2;
        }
        var end = Math.min(start + this.numberOfLinks, this.pages);
        var list = [];
        for (var i = start; i < end; i++) {
            list.push(i);
        }
        return list;
    };
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Number)
    ], MdPagination.prototype, "mdActivePage", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdPagination.prototype, "mdPages", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdPagination.prototype, "mdVisiblePageLinks", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneWay }),
        tslib_1.__metadata("design:type", Array)
    ], MdPagination.prototype, "mdPageLinks", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdPagination.prototype, "mdShowFirstLast", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdPagination.prototype, "mdShowPrevNext", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdPagination.prototype, "mdShowPageLinks", void 0);
    MdPagination = tslib_1.__decorate([
        customElement("md-pagination"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdPagination);
    return MdPagination;
}());
export { MdPagination };
