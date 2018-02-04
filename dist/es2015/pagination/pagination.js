var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { fireMaterializeEvent } from "../common/events";
import { getBooleanFromAttributeValue } from "../common/attributes";
let MdPagination = class MdPagination {
    constructor(element) {
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
    bind() {
        // attached() throws unhandled exceptions
        this.pages = parseInt(this.mdPages.toString(), 10);
        // We don't want mdVisiblePageLinks to be greater than mdPages
        this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks.toString(), 10), this.pages);
        this.mdShowFirstLast = getBooleanFromAttributeValue(this.mdShowFirstLast);
        this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
        this.mdPageLinks = this.generatePageLinks();
    }
    setActivePage(page) {
        this.mdActivePage = parseInt(page, 10);
        this.mdPageLinks = this.generatePageLinks();
        fireMaterializeEvent(this.element, "page-changed", this.mdActivePage);
    }
    setFirstPage() {
        if (this.mdActivePage > 1) {
            this.setActivePage(1);
        }
    }
    setLastPage() {
        if (this.mdActivePage < this.pages) {
            this.setActivePage(this.pages);
        }
    }
    setPreviousPage() {
        if (this.mdActivePage > 1) {
            this.setActivePage(this.mdActivePage - 1);
        }
    }
    setNextPage() {
        if (this.mdActivePage < this.pages) {
            this.setActivePage(this.mdActivePage + 1);
        }
    }
    mdPagesChanged() {
        this.pages = parseInt(this.mdPages.toString(), 10);
        this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks.toString(), 10), this.pages);
        this.setActivePage(1);
    }
    mdVisiblePageLinksChanged() {
        this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks.toString(), 10), this.pages);
        this.mdPageLinks = this.generatePageLinks();
    }
    generatePageLinks() {
        let midPoint = this.numberOfLinks / 2;
        let start = Math.max(this.mdActivePage - midPoint, 0);
        // respect visible links
        if (start + midPoint * 2 > this.pages) {
            start = this.pages - midPoint * 2;
        }
        let end = Math.min(start + this.numberOfLinks, this.pages);
        let list = [];
        for (let i = start; i < end; i++) {
            list.push(i);
        }
        return list;
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], MdPagination.prototype, "mdActivePage", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay })
], MdPagination.prototype, "mdPages", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay })
], MdPagination.prototype, "mdVisiblePageLinks", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay })
], MdPagination.prototype, "mdPageLinks", void 0);
__decorate([
    bindable
], MdPagination.prototype, "mdShowFirstLast", void 0);
__decorate([
    bindable
], MdPagination.prototype, "mdShowPrevNext", void 0);
__decorate([
    bindable
], MdPagination.prototype, "mdShowPageLinks", void 0);
MdPagination = __decorate([
    customElement("md-pagination"),
    autoinject
], MdPagination);
export { MdPagination };
