import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
import { ConfigBuilder } from "../config-builder";
var MdWaves = /** @class */ (function () {
    function MdWaves(element, configBuilder) {
        this.element = element;
        this.configBuilder = configBuilder;
        this.circle = false;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdWaves.prototype.attached = function () {
        var classes = ["waves-effect"];
        if (this.circle) {
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
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdWaves.prototype, "circle", void 0);
    __decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], MdWaves.prototype, "color", void 0);
    MdWaves = __decorate([
        au.customAttribute("md-waves"),
        au.autoinject,
        __metadata("design:paramtypes", [Element, ConfigBuilder])
    ], MdWaves);
    return MdWaves;
}());
export { MdWaves };
//# sourceMappingURL=waves.js.map