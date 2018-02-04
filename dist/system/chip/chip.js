System.register(["aurelia-framework", "../common/attributes", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributes_1, events_1, MdChip;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            MdChip = class MdChip {
                constructor(element) {
                    this.element = element;
                    this.mdClose = false;
                }
                attached() {
                    this.mdClose = attributes_1.getBooleanFromAttributeValue(this.mdClose);
                }
                close() {
                    this.element.parentElement.removeChild(this.element);
                    events_1.fireEvent(this.element, "close");
                }
            };
            __decorate([
                aurelia_framework_1.bindable
            ], MdChip.prototype, "mdClose", void 0);
            MdChip = __decorate([
                aurelia_framework_1.autoinject
            ], MdChip);
            exports_1("MdChip", MdChip);
        }
    };
});
