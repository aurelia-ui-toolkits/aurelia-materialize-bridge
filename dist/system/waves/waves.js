System.register(["tslib", "../aurelia", "../config-builder"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, config_builder_1, MdWaves;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (config_builder_1_1) {
                config_builder_1 = config_builder_1_1;
            }
        ],
        execute: function () {
            MdWaves = /** @class */ (function () {
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
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdWaves.prototype, "circle", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdWaves.prototype, "color", void 0);
                MdWaves = tslib_1.__decorate([
                    au.customAttribute("md-waves"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element, config_builder_1.ConfigBuilder])
                ], MdWaves);
                return MdWaves;
            }());
            exports_1("MdWaves", MdWaves);
        }
    };
});
//# sourceMappingURL=waves.js.map