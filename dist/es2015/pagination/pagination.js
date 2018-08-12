import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdPagination = /** @class */ (function () {
    function MdPagination(element) {
        this.element = element;
        this.activePage = 1;
        this.pages = 5;
        this.visiblePageLinks = 15;
        this.pageLinks = [];
        this.showFirstLast = true;
        this.showPrevNext = true;
        this.showPageLinks = true;
    }
    MdPagination.prototype.pagesChanged = function () {
        this.setActivePage(1);
    };
    MdPagination.prototype.visiblePageLinksChanged = function () {
        this.pageLinks = this.generatePageLinks();
    };
    MdPagination.prototype.bind = function () {
        this.pageLinks = this.generatePageLinks();
    };
    MdPagination.prototype.setActivePage = function (page) {
        this.activePage = page;
        this.pageLinks = this.generatePageLinks();
        au.fireMaterializeEvent(this.element, "page-changed", this.activePage);
    };
    MdPagination.prototype.setFirstPage = function () {
        if (this.activePage > 1) {
            this.setActivePage(1);
        }
    };
    MdPagination.prototype.setLastPage = function () {
        if (this.activePage < this.pages) {
            this.setActivePage(this.pages);
        }
    };
    MdPagination.prototype.setPreviousPage = function () {
        if (this.activePage > 1) {
            this.setActivePage(this.activePage - 1);
        }
    };
    MdPagination.prototype.setNextPage = function () {
        if (this.activePage < this.pages) {
            this.setActivePage(this.activePage + 1);
        }
    };
    MdPagination.prototype.generatePageLinks = function () {
        var numberOfLinks = Math.min(this.visiblePageLinks, this.pages);
        var midPoint = Math.ceil(numberOfLinks / 2);
        var start = Math.max(this.activePage - midPoint, 0);
        // respect visible links
        if (start + midPoint * 2 > this.pages) {
            start = Math.max(this.pages - midPoint * 2, 0);
        }
        var end = Math.min(start + numberOfLinks, this.pages);
        var list = [];
        for (var i = start; i < end; i++) {
            list.push(i);
        }
        return list;
    };
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Number)
    ], MdPagination.prototype, "activePage", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneWay }),
        tslib_1.__metadata("design:type", Number)
    ], MdPagination.prototype, "pages", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneWay }),
        tslib_1.__metadata("design:type", Number)
    ], MdPagination.prototype, "visiblePageLinks", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneWay }),
        tslib_1.__metadata("design:type", Array)
    ], MdPagination.prototype, "pageLinks", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdPagination.prototype, "showFirstLast", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdPagination.prototype, "showPrevNext", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdPagination.prototype, "showPageLinks", void 0);
    MdPagination = tslib_1.__decorate([
        au.customElement("md-pagination"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdPagination);
    return MdPagination;
}());
export { MdPagination };
//# sourceMappingURL=pagination.js.map