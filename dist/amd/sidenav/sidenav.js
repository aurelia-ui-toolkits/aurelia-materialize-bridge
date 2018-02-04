var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "../common/attributes", "../common/attributeManager", "aurelia-logging"], function (require, exports, aurelia_framework_1, attributes_1, attributeManager_1, aurelia_logging_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdSidenav = MdSidenav_1 = class MdSidenav {
        constructor(element) {
            this.element = element;
            this.mdCloseOnClick = false;
            this.mdEdge = "left";
            this.mdFixed = false;
            this.mdWidth = 300;
            this.whenAttached = new Promise((resolve, reject) => this.attachedResolver = resolve);
            this.controlId = `md-sidenav-${MdSidenav_1.id++}`;
            this.log = aurelia_logging_1.getLogger("md-sidenav");
            this.whenAttached = new Promise((resolve, reject) => {
                this.attachedResolver = resolve;
            });
        }
        attached() {
            this.attributeManager = new attributeManager_1.AttributeManager(this.sidenav);
            if (attributes_1.getBooleanFromAttributeValue(this.mdFixed)) {
                this.attributeManager.addClasses("fixed");
                if (this.mdEdge === "right") {
                    // see: https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/53
                    this.attributeManager.addClasses("right-aligned");
                }
            }
            this.attachedResolver();
        }
        detached() {
            this.attributeManager.removeClasses(["fixed", "right-aligned"]);
        }
        mdFixedChanged(newValue) {
            if (this.attributeManager) {
                if (attributes_1.getBooleanFromAttributeValue(newValue)) {
                    this.attributeManager.addClasses("fixed");
                }
                else {
                    this.attributeManager.removeClasses("fixed");
                }
            }
        }
    };
    MdSidenav.id = 0;
    __decorate([
        aurelia_framework_1.bindable
    ], MdSidenav.prototype, "mdCloseOnClick", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdSidenav.prototype, "mdEdge", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdSidenav.prototype, "mdFixed", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdSidenav.prototype, "mdWidth", void 0);
    MdSidenav = MdSidenav_1 = __decorate([
        aurelia_framework_1.customElement("md-sidenav"),
        aurelia_framework_1.autoinject
    ], MdSidenav);
    exports.MdSidenav = MdSidenav;
    var MdSidenav_1;
});
