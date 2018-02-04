"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const attributes_1 = require("../common/attributes");
const attributeManager_1 = require("../common/attributeManager");
const events_1 = require("../common/events");
let MdModalTrigger = class MdModalTrigger {
    constructor(element) {
        this.element = element;
        this.dismissible = true;
        this.attributeManager = new attributeManager_1.AttributeManager(this.element);
        this.onComplete = this.onComplete.bind(this);
    }
    attached() {
        this.attributeManager.addClasses("modal-trigger");
        $(this.element).leanModal({
            complete: this.onComplete,
            dismissible: attributes_1.getBooleanFromAttributeValue(this.dismissible)
        });
    }
    detached() {
        this.attributeManager.removeClasses("modal-trigger");
    }
    onComplete() {
        events_1.fireMaterializeEvent(this.element, "modal-complete");
    }
};
__decorate([
    aurelia_framework_1.bindable()
], MdModalTrigger.prototype, "dismissible", void 0);
MdModalTrigger = __decorate([
    aurelia_framework_1.customAttribute("md-modal-trigger"),
    aurelia_framework_1.autoinject
], MdModalTrigger);
exports.MdModalTrigger = MdModalTrigger;
