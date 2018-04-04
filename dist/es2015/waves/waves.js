import * as tslib_1 from "tslib";
import { bindable, customAttribute, autoinject, bindingMode } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { ConfigBuilder } from "../config-builder";
var MdWaves = /** @class */ (function () {
    function MdWaves(element, configBuilder) {
        this.element = element;
        this.configBuilder = configBuilder;
        this.block = false;
        this.circle = false;
        this.attributeManager = new AttributeManager(this.element);
    }
    MdWaves.prototype.attached = function () {
        var classes = ["waves-effect"];
        if (getBooleanFromAttributeValue(this.block)) {
            classes.push("waves-block");
        }
        if (getBooleanFromAttributeValue(this.circle)) {
            classes.push("waves-circle");
        }
        if (this.color) {
            classes.push("waves-" + this.color);
        }
        this.attributeManager.addClasses(classes);
        if (!this.configBuilder.noWavesAttach) {
            Waves.attach(this.element);
        }
    };
    MdWaves.prototype.detached = function () {
        var classes = ["waves-effect", "waves-block"];
        if (this.color) {
            classes.push("waves-" + this.color);
        }
        this.attributeManager.removeClasses(classes);
    };
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdWaves.prototype, "block", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdWaves.prototype, "circle", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdWaves.prototype, "color", void 0);
    MdWaves = tslib_1.__decorate([
        customAttribute("md-waves"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, ConfigBuilder])
    ], MdWaves);
    return MdWaves;
}());
export { MdWaves };
