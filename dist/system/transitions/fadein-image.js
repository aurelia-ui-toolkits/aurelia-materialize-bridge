System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, au, MdFadeinImage;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdFadeinImage = /** @class */ (function () {
                function MdFadeinImage(element) {
                    this.element = element;
                    this.fadeInImage = this.fadeInImage.bind(this);
                    this.log = au.getLogger("md-fadein-image");
                }
                MdFadeinImage.prototype.attached = function () {
                    this.element.addEventListener("click", this.fadeInImage);
                    this.ensureOpacity();
                };
                MdFadeinImage.prototype.detached = function () {
                    this.element.removeEventListener("click", this.fadeInImage);
                };
                MdFadeinImage.prototype.fadeInImage = function () {
                    Materialize.fadeInImage($(this.ref));
                };
                MdFadeinImage.prototype.ensureOpacity = function () {
                    var opacity = window.getComputedStyle(this.ref).opacity;
                    if (opacity !== "0") {
                        this.ref.style.opacity = "0";
                    }
                };
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", HTMLElement)
                ], MdFadeinImage.prototype, "ref", void 0);
                MdFadeinImage = tslib_1.__decorate([
                    au.customAttribute("md-fadein-image"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdFadeinImage);
                return MdFadeinImage;
            }());
            exports_1("MdFadeinImage", MdFadeinImage);
        }
    };
});
//# sourceMappingURL=fadein-image.js.map