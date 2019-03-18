import * as tslib_1 from "tslib";
var MdDropdown_1;
import * as au from "../aurelia";
let MdDropdown = MdDropdown_1 = class MdDropdown {
    constructor(element) {
        this.element = element;
        this.activates = "";
        this.ref = null;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    attached() {
        this.handleActivateElement();
        this.contentAttributeManager = new au.AttributeManager(document.getElementById(this.activates));
        this.attributeManager.addClasses("dropdown-trigger");
        this.contentAttributeManager.addClasses("dropdown-content");
        let container = typeof this.container === "string" ? document.querySelector(this.container) : this.container;
        let options = {
            alignment: this.alignment,
            autoTrigger: this.autoTrigger,
            constrainWidth: this.constrainWidth,
            container,
            coverTrigger: this.coverTrigger,
            closeOnClick: this.closeOnClick,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            onOpenStart: () => au.fireMaterializeEvent(this.element, "open-start"),
            onOpenEnd: () => au.fireMaterializeEvent(this.element, "open-end"),
            onCloseStart: () => au.fireMaterializeEvent(this.element, "close-start"),
            onCloseEnd: () => au.fireMaterializeEvent(this.element, "close-end")
        };
        au.cleanOptions(options);
        this.instance = new M.Dropdown(this.element, options);
    }
    detached() {
        if (this.instance) {
            this.instance.destroy();
            this.instance.dropdownEl.remove();
        }
        this.attributeManager.removeAttributes("data-target");
        this.attributeManager.removeClasses("dropdown-trigger");
        this.contentAttributeManager.removeClasses("dropdown-content");
    }
    open() {
        if (this.instance) {
            this.instance.open();
        }
    }
    close() {
        if (this.instance) {
            this.instance.close();
        }
    }
    recalculateDimensions() {
        if (this.instance) {
            this.instance.recalculateDimensions();
        }
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
        this.attributeManager.addAttributes({ "data-target": this.activates });
    }
};
MdDropdown.elementId = 0;
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Object)
], MdDropdown.prototype, "activates", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Element)
], MdDropdown.prototype, "ref", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdDropdown.prototype, "alignment", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdDropdown.prototype, "autoTrigger", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdDropdown.prototype, "constrainWidth", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Object)
], MdDropdown.prototype, "container", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdDropdown.prototype, "coverTrigger", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdDropdown.prototype, "closeOnClick", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdDropdown.prototype, "hover", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdDropdown.prototype, "mdTitle", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdDropdown.prototype, "inDuration", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdDropdown.prototype, "outDuration", void 0);
MdDropdown = MdDropdown_1 = tslib_1.__decorate([
    au.customAttribute("md-dropdown"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdDropdown);
export { MdDropdown };
//# sourceMappingURL=dropdown.js.map