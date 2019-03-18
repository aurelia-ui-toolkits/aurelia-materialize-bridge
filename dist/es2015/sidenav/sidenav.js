import * as tslib_1 from "tslib";
var MdSidenav_1;
import * as au from "../aurelia";
let MdSidenav = MdSidenav_1 = class MdSidenav {
    constructor(element) {
        this.element = element;
        this.fixed = false;
        this.controlId = `md-sidenav-${MdSidenav_1.id++}`;
    }
    fixedChanged(newValue) {
        if (!this.attributeManager) {
            return;
        }
        if (newValue) {
            this.attributeManager.addClasses(MdSidenav_1.fixedClass);
        }
        else {
            this.attributeManager.removeClasses(MdSidenav_1.fixedClass);
        }
    }
    attached() {
        this.attributeManager = new au.AttributeManager(this.sidenav);
        if (this.fixed) {
            this.attributeManager.addClasses(MdSidenav_1.fixedClass);
        }
        let options = {
            draggable: this.draggable,
            edge: this.edge,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            onOpenStart: elem => au.fireMaterializeEvent(this.element, "open-start", { elem }),
            onOpenEnd: elem => au.fireMaterializeEvent(this.element, "open-end", { elem }),
            onCloseStart: elem => au.fireMaterializeEvent(this.element, "close-start", { elem }),
            onCloseEnd: elem => au.fireMaterializeEvent(this.element, "close-end", { elem })
        };
        au.cleanOptions(options);
        this.instance = new M.Sidenav(this.sidenav, options);
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
    detached() {
        this.attributeManager.removeClasses([MdSidenav_1.fixedClass]);
        if (this.instance) {
            this.instance.destroy();
        }
    }
};
MdSidenav.fixedClass = "sidenav-fixed";
MdSidenav.id = 0;
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdSidenav.prototype, "edge", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdSidenav.prototype, "draggable", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdSidenav.prototype, "inDuration", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdSidenav.prototype, "outDuration", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], MdSidenav.prototype, "fixed", void 0);
MdSidenav = MdSidenav_1 = tslib_1.__decorate([
    au.customElement("md-sidenav"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdSidenav);
export { MdSidenav };
//# sourceMappingURL=sidenav.js.map