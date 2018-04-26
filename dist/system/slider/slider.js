System.register(["tslib", "aurelia-framework", "../common/attributes", "aurelia-logging"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributes_1, aurelia_logging_1, MdSlider;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            }
        ],
        execute: function () {
            MdSlider = /** @class */ (function () {
                function MdSlider(element) {
                    this.element = element;
                    this.mdFillContainer = false;
                    this.mdHeight = 400;
                    this.mdIndicators = true;
                    this.mdInterval = 6000;
                    this.mdTransition = 500;
                    this.log = aurelia_logging_1.getLogger("md-slider");
                }
                MdSlider.prototype.attached = function () {
                    if (attributes_1.getBooleanFromAttributeValue(this.mdFillContainer)) {
                        this.element.classList.add("fullscreen");
                    }
                    this.refresh();
                };
                MdSlider.prototype.pause = function () {
                    $(this.element).slider("pause");
                };
                MdSlider.prototype.start = function () {
                    $(this.element).slider("start");
                };
                MdSlider.prototype.next = function () {
                    $(this.element).slider("next");
                };
                MdSlider.prototype.prev = function () {
                    $(this.element).slider("prev");
                };
                MdSlider.prototype.refresh = function () {
                    var options = {
                        height: parseInt(this.mdHeight.toString(), 10),
                        indicators: attributes_1.getBooleanFromAttributeValue(this.mdIndicators),
                        interval: parseInt(this.mdInterval.toString(), 10),
                        transition: parseInt(this.mdTransition.toString(), 10)
                    };
                    this.log.debug("refreshing slider, params:", options);
                    $(this.element).slider(options);
                };
                MdSlider.prototype.mdIndicatorsChanged = function () {
                    this.refresh();
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdSlider.prototype, "mdFillContainer", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdSlider.prototype, "mdHeight", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdSlider.prototype, "mdIndicators", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdSlider.prototype, "mdInterval", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdSlider.prototype, "mdTransition", void 0);
                MdSlider = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-slider"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdSlider);
                return MdSlider;
            }());
            exports_1("MdSlider", MdSlider);
        }
    };
});
//# sourceMappingURL=slider.js.map