define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdDropdown = /** @class */ (function () {
        function MdDropdown(element) {
            this.element = element;
            this.activates = "";
            this.ref = null;
            this.attributeManager = new au.AttributeManager(this.element);
        }
        MdDropdown_1 = MdDropdown;
        MdDropdown.prototype.attached = function () {
            var _this = this;
            this.handleActivateElement();
            this.contentAttributeManager = new au.AttributeManager(document.getElementById(this.activates));
            this.attributeManager.addClasses("dropdown-trigger");
            this.contentAttributeManager.addClasses("dropdown-content");
            var container = typeof this.container === "string" ? document.querySelector(this.container) : this.container;
            var options = {
                alignment: this.alignment,
                autoTrigger: this.autoTrigger,
                constrainWidth: this.constrainWidth,
                container: container,
                coverTrigger: this.coverTrigger,
                closeOnClick: this.closeOnClick,
                hover: this.hover,
                inDuration: this.inDuration,
                outDuration: this.outDuration,
                onOpenStart: function () { return au.fireMaterializeEvent(_this.element, "open-start"); },
                onOpenEnd: function () { return au.fireMaterializeEvent(_this.element, "open-end"); },
                onCloseStart: function () { return au.fireMaterializeEvent(_this.element, "close-start"); },
                onCloseEnd: function () { return au.fireMaterializeEvent(_this.element, "close-end"); }
            };
            au.cleanOptions(options);
            this.instance = new M.Dropdown(this.element, options);
        };
        MdDropdown.prototype.detached = function () {
            if (this.instance) {
                this.instance.destroy();
                this.instance.dropdownEl.remove();
            }
            this.attributeManager.removeAttributes("data-target");
            this.attributeManager.removeClasses("dropdown-trigger");
            this.contentAttributeManager.removeClasses("dropdown-content");
        };
        MdDropdown.prototype.open = function () {
            if (this.instance) {
                this.instance.open();
            }
        };
        MdDropdown.prototype.close = function () {
            if (this.instance) {
                this.instance.close();
            }
        };
        MdDropdown.prototype.recalculateDimensions = function () {
            if (this.instance) {
                this.instance.recalculateDimensions();
            }
        };
        MdDropdown.prototype.handleActivateElement = function () {
            if (this.ref) {
                var id = this.ref.getAttribute("id");
                if (!id) {
                    id = "md-dropdown-" + MdDropdown_1.elementId++;
                    this.ref.setAttribute("id", id);
                    this.activates = id;
                }
                this.id = id;
            }
            this.attributeManager.addAttributes({ "data-target": this.activates });
        };
        var MdDropdown_1;
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
        return MdDropdown;
    }());
    exports.MdDropdown = MdDropdown;
});
//# sourceMappingURL=dropdown.js.map