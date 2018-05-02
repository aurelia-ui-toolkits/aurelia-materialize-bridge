"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdCharCounter = /** @class */ (function () {
    function MdCharCounter(element) {
        this.element = element;
        this.length = 120;
        this.instances = [];
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdCharCounter.prototype.attached = function () {
        var _this = this;
        // attach to input and textarea elements explicitly, so this counter can be
        // used on containers (or custom elements like md-input)
        var tagName = this.element.tagName.toUpperCase();
        if (tagName === "INPUT" || tagName === "TEXTAREA") {
            this.attributeManager.addAttributes({ "data-length": this.length });
            this.instances.push(new M.CharacterCounter(this.element));
        }
        else {
            var elem = Array.from(this.element.querySelectorAll("input,textarea"));
            elem.forEach(function (el) {
                el.setAttribute("data-length", _this.length.toString());
                _this.instances.push(new M.CharacterCounter(el));
            });
        }
    };
    MdCharCounter.prototype.detached = function () {
        this.instances.forEach(function (x) { return x.destroy(); });
        this.attributeManager.removeAttributes(["data-length"]);
    };
    tslib_1.__decorate([
        au.ato.bindable.numberMd,
        tslib_1.__metadata("design:type", Number)
    ], MdCharCounter.prototype, "length", void 0);
    MdCharCounter = tslib_1.__decorate([
        au.customAttribute("md-char-counter"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCharCounter);
    return MdCharCounter;
}());
exports.MdCharCounter = MdCharCounter;
//# sourceMappingURL=char-counter.js.map