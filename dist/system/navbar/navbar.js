System.register(["aurelia-framework", "../common/attributes", "../common/attributeManager"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributes_1, attributeManager_1, MdNavbar;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (attributeManager_1_1) {
                attributeManager_1 = attributeManager_1_1;
            }
        ],
        execute: function () {
            MdNavbar = class MdNavbar {
                constructor(element) {
                    this.element = element;
                }
                attached() {
                    this.fixedAttributeManager = new attributeManager_1.AttributeManager(this.fixedAnchor);
                    this.navAttributeManager = new attributeManager_1.AttributeManager(this.nav);
                    if (attributes_1.getBooleanFromAttributeValue(this.mdFixed)) {
                        this.fixedAttributeManager.addClasses("navbar-fixed");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.mdAutoHeight)) {
                        this.navAttributeManager.addClasses("md-auto-height");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.mdExtended)) {
                        this.navAttributeManager.addClasses("nav-extended");
                    }
                }
                detached() {
                    if (attributes_1.getBooleanFromAttributeValue(this.mdFixed)) {
                        this.fixedAttributeManager.removeClasses("navbar-fixed");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.mdAutoHeight)) {
                        this.navAttributeManager.removeClasses("md-auto-height");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.mdExtended)) {
                        this.navAttributeManager.removeClasses("nav-extended");
                    }
                }
            };
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdNavbar.prototype, "mdExtended", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdNavbar.prototype, "mdFixed", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdNavbar.prototype, "mdAutoHeight", void 0);
            MdNavbar = __decorate([
                aurelia_framework_1.customElement("md-navbar"),
                aurelia_framework_1.autoinject
            ], MdNavbar);
            exports_1("MdNavbar", MdNavbar);
        }
    };
});
