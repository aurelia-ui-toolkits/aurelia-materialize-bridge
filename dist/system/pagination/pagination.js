System.register(["aurelia-framework", "../common/events", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, events_1, attributes_1, MdPagination;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            }
        ],
        execute: function () {
            MdPagination = class MdPagination {
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
                    this.mdShowFirstLast = attributes_1.getBooleanFromAttributeValue(this.mdShowFirstLast);
                    this.mdShowPrevNext = attributes_1.getBooleanFromAttributeValue(this.mdShowPrevNext);
                    this.mdPageLinks = this.generatePageLinks();
                }
                setActivePage(page) {
                    this.mdActivePage = parseInt(page, 10);
                    this.mdPageLinks = this.generatePageLinks();
                    events_1.fireMaterializeEvent(this.element, "page-changed", this.mdActivePage);
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
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
            ], MdPagination.prototype, "mdActivePage", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay })
            ], MdPagination.prototype, "mdPages", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay })
            ], MdPagination.prototype, "mdVisiblePageLinks", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay })
            ], MdPagination.prototype, "mdPageLinks", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdPagination.prototype, "mdShowFirstLast", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdPagination.prototype, "mdShowPrevNext", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdPagination.prototype, "mdShowPageLinks", void 0);
            MdPagination = __decorate([
                aurelia_framework_1.customElement("md-pagination"),
                aurelia_framework_1.autoinject
            ], MdPagination);
            exports_1("MdPagination", MdPagination);
        }
    };
});
