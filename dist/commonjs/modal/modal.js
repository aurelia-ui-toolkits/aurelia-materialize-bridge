"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_logging_1 = require("aurelia-logging");
const aurelia_framework_1 = require("aurelia-framework");
const attributes_1 = require("../common/attributes");
const attributeManager_1 = require("../common/attributeManager");
const events_1 = require("../common/events");
let MdModal = class MdModal {
    constructor(element) {
        this.element = element;
        this.dismissible = true;
        this.opacity = 0.5; // Opacity of modal background
        this.inDuration = 300; // Transition in duration
        this.outDuration = 200; // Transition out duration
        this.startingTop = "4%"; // Starting top style attribute
        this.endingTop = "10%"; // Ending top style attribute
        this.log = aurelia_logging_1.getLogger("md-modal");
        this.attributeManager = new attributeManager_1.AttributeManager(this.element);
        this.onComplete = this.onComplete.bind(this);
        this.onReady = this.onReady.bind(this);
    }
    attached() {
        const options = {
            complete: this.onComplete,
            dismissible: attributes_1.getBooleanFromAttributeValue(this.dismissible),
            endingTop: this.endingTop,
            inDuration: parseInt(this.inDuration.toString(), 10),
            opacity: parseFloat(this.opacity.toString()),
            outDuration: parseInt(this.outDuration.toString(), 10),
            ready: this.onReady,
            startingTop: this.startingTop
        };
        this.log.debug("modal options: ", options);
        this.attributeManager.addClasses("modal");
        $(this.element).modal(options);
    }
    detached() {
        this.attributeManager.removeClasses("modal");
    }
    onComplete() {
        events_1.fireMaterializeEvent(this.element, "modal-complete");
    }
    onReady(modal, trigger) {
        events_1.fireMaterializeEvent(this.element, "modal-ready", { modal, trigger });
    }
    open() {
        $(this.element).modal("open");
    }
    close() {
        $(this.element).modal("close");
    }
};
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], MdModal.prototype, "dismissible", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdModal.prototype, "opacity", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdModal.prototype, "inDuration", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdModal.prototype, "outDuration", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], MdModal.prototype, "startingTop", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], MdModal.prototype, "endingTop", void 0);
MdModal = __decorate([
    aurelia_framework_1.customAttribute("md-modal"),
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [Element])
], MdModal);
exports.MdModal = MdModal;
