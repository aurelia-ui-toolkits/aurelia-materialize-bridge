System.register(["aurelia-framework", "aurelia-logging", "../common/attributes", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_logging_1, attributes_1, events_1, MdSidenavCollapse;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            MdSidenavCollapse = class MdSidenavCollapse {
                constructor(element) {
                    this.element = element;
                    this.element = element;
                    this.log = aurelia_logging_1.getLogger("md-sidenav-collapse");
                }
                attached() {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield this.ref.whenAttached;
                        const closeOnClick = this.ref.mdFixed && window.innerWidth > 992 ? false : attributes_1.getBooleanFromAttributeValue(this.ref.mdCloseOnClick);
                        this.onHide = this.onHide.bind(this);
                        this.onShow = this.onShow.bind(this);
                        this.element.setAttribute("data-activates", this.ref.controlId);
                        let sideNavConfig = {
                            edge: this.ref.mdEdge || "left",
                            closeOnClick,
                            menuWidth: parseInt(this.ref.mdWidth.toString(), 10),
                            onClose: this.onHide,
                            onOpen: this.onShow
                        };
                        $(this.element).sideNav(sideNavConfig);
                    });
                }
                detached() {
                    // destroy handler not available
                }
                show() {
                    $(this.element).sideNav("show");
                }
                hide() {
                    $(this.element).sideNav("hide");
                }
                onShow(el) {
                    events_1.fireMaterializeEvent(this.ref.element, "sidenav-show");
                }
                onHide(el) {
                    events_1.fireMaterializeEvent(this.ref.element, "sidenav-hide");
                }
            };
            __decorate([
                aurelia_framework_1.bindable
            ], MdSidenavCollapse.prototype, "ref", void 0);
            MdSidenavCollapse = __decorate([
                aurelia_framework_1.customAttribute("md-sidenav-collapse"),
                aurelia_framework_1.autoinject
            ], MdSidenavCollapse);
            exports_1("MdSidenavCollapse", MdSidenavCollapse);
        }
    };
});
