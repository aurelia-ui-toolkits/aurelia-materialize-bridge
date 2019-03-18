import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdPagination = class MdPagination {
    constructor(element) {
        this.element = element;
        this.activePage = 1;
        this.pages = 5;
        this.visiblePageLinks = 15;
        this.pageLinks = [];
        this.showFirstLast = true;
        this.showPrevNext = true;
        this.showPageLinks = true;
    }
    pagesChanged() {
        this.setActivePage(1);
    }
    visiblePageLinksChanged() {
        this.pageLinks = this.generatePageLinks();
    }
    bind() {
        this.pageLinks = this.generatePageLinks();
    }
    setActivePage(page) {
        this.activePage = page;
        this.pageLinks = this.generatePageLinks();
        au.fireMaterializeEvent(this.element, "page-changed", this.activePage);
    }
    setFirstPage() {
        if (this.activePage > 1) {
            this.setActivePage(1);
        }
    }
    setLastPage() {
        if (this.activePage < this.pages) {
            this.setActivePage(this.pages);
        }
    }
    setPreviousPage() {
        if (this.activePage > 1) {
            this.setActivePage(this.activePage - 1);
        }
    }
    setNextPage() {
        if (this.activePage < this.pages) {
            this.setActivePage(this.activePage + 1);
        }
    }
    generatePageLinks() {
        let numberOfLinks = Math.min(this.visiblePageLinks, this.pages);
        let midPoint = Math.ceil(numberOfLinks / 2);
        let start = Math.max(this.activePage - midPoint, 0);
        // respect visible links
        if (start + midPoint * 2 > this.pages) {
            start = Math.max(this.pages - midPoint * 2, 0);
        }
        let end = Math.min(start + numberOfLinks, this.pages);
        let list = [];
        for (let i = start; i < end; i++) {
            list.push(i);
        }
        return list;
    }
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
export { MdPagination };
//# sourceMappingURL=pagination.js.map