var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "../common/attributeManager", "../common/attributes"], function (require, exports, aurelia_framework_1, attributeManager_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdDropdown = MdDropdown_1 = class MdDropdown {
        constructor(element) {
            this.element = element;
            this.activates = "";
            this.ref = null;
            this.alignment = "left";
            this.belowOrigin = false;
            this.constrainWidth = true;
            this.gutter = 0;
            this.hover = false;
            this.inDuration = 300;
            this.outDuration = 225;
            this.stopPropagation = false;
            this.attributeManager = new attributeManager_1.AttributeManager(this.element);
        }
        attached() {
            this.handleActivateElement();
            this.contentAttributeManager = new attributeManager_1.AttributeManager(document.getElementById(this.activates));
            this.attributeManager.addClasses("dropdown-button");
            this.contentAttributeManager.addClasses("dropdown-content");
            // this.attributeManager.addAttributes({ 'data-activates': this.activates });
            $(this.element).dropdown({
                alignment: this.alignment,
                belowOrigin: attributes_1.getBooleanFromAttributeValue(this.belowOrigin),
                constrain_width: attributes_1.getBooleanFromAttributeValue(this.constrainWidth),
                constrainWidth: attributes_1.getBooleanFromAttributeValue(this.constrainWidth),
                gutter: parseInt(this.gutter.toString(), 10),
                hover: attributes_1.getBooleanFromAttributeValue(this.hover),
                inDuration: parseInt(this.inDuration.toString(), 10),
                outDuration: parseInt(this.outDuration.toString(), 10),
                stopPropagation: attributes_1.getBooleanFromAttributeValue(this.stopPropagation)
            });
        }
        detached() {
            this.attributeManager.removeAttributes("data-activates");
            this.attributeManager.removeClasses("dropdown-button");
            this.contentAttributeManager.removeClasses("dropdown-content");
        }
        open() {
            $(this.element).dropdown("open");
        }
        close() {
            $(this.element).dropdown("close");
        }
        handleActivateElement() {
            if (this.ref) {
                let id = this.ref.getAttribute("id");
                if (!id) {
                    id = `md-dropdown-${MdDropdown_1.elementId++}`;
                    this.ref.setAttribute("id", id);
                    this.activates = id;
                }
                this.id = id;
            }
            this.attributeManager.addAttributes({ "data-activates": this.activates });
        }
    };
    MdDropdown.elementId = 0;
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "activates", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "ref", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "alignment", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "belowOrigin", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "constrainWidth", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "gutter", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "hover", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "mdTitle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "inDuration", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "outDuration", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdDropdown.prototype, "stopPropagation", void 0);
    MdDropdown = MdDropdown_1 = __decorate([
        aurelia_framework_1.customAttribute("md-dropdown"),
        aurelia_framework_1.autoinject
    ], MdDropdown);
    exports.MdDropdown = MdDropdown;
    var MdDropdown_1;
});
