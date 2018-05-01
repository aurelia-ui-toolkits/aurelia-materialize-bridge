import * as tslib_1 from "tslib";
import * as au from "../aurelia";
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
    }
    MdPagination.prototype.mdPagesChanged = function () {
        this.setActivePage(1);
    };
    MdPagination.prototype.mdVisiblePageLinksChanged = function () {
        this.mdPageLinks = this.generatePageLinks();
    };
    MdPagination.prototype.bind = function () {
        this.mdPageLinks = this.generatePageLinks();
    };
    MdPagination.prototype.setActivePage = function (page) {
        this.mdActivePage = page;
        this.mdPageLinks = this.generatePageLinks();
        au.fireMaterializeEvent(this.element, "page-changed", this.mdActivePage);
    };
    MdPagination.prototype.setFirstPage = function () {
        if (this.mdActivePage > 1) {
            this.setActivePage(1);
        }
    };
    MdPagination.prototype.setLastPage = function () {
        if (this.mdActivePage < this.mdPages) {
            this.setActivePage(this.mdPages);
        }
    };
    MdPagination.prototype.setPreviousPage = function () {
        if (this.mdActivePage > 1) {
            this.setActivePage(this.mdActivePage - 1);
        }
    };
    MdPagination.prototype.setNextPage = function () {
        if (this.mdActivePage < this.mdPages) {
            this.setActivePage(this.mdActivePage + 1);
        }
    };
    MdPagination.prototype.generatePageLinks = function () {
        var numberOfLinks = Math.min(this.mdVisiblePageLinks, this.mdPages);
        var midPoint = Math.ceil(numberOfLinks / 2);
        var start = Math.max(this.mdActivePage - midPoint, 0);
        // respect visible links
        if (start + midPoint * 2 > this.mdPages) {
            start = this.mdPages - midPoint * 2;
        }
        var end = Math.min(start + numberOfLinks, this.mdPages);
        var list = [];
        for (var i = start; i < end; i++) {
            list.push(i);
        }
        return list;
    };
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Number)
    ], MdPagination.prototype, "mdActivePage", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneWay }),
        tslib_1.__metadata("design:type", Number)
    ], MdPagination.prototype, "mdPages", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneWay }),
        tslib_1.__metadata("design:type", Number)
    ], MdPagination.prototype, "mdVisiblePageLinks", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneWay }),
        tslib_1.__metadata("design:type", Array)
    ], MdPagination.prototype, "mdPageLinks", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdPagination.prototype, "mdShowFirstLast", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdPagination.prototype, "mdShowPrevNext", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdPagination.prototype, "mdShowPageLinks", void 0);
    MdPagination = tslib_1.__decorate([
        au.customElement("md-pagination"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdPagination);
    return MdPagination;
}());
export { MdPagination };
//# sourceMappingURL=pagination.js.map