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
const aurelia_framework_1 = require("aurelia-framework");
const events_1 = require("../common/events");
let MdAutoComplete = class MdAutoComplete {
    constructor(element) {
        this.element = element;
        this.input = null;
        this.limit = 20;
        this.minLength = 1;
        this.values = {};
    }
    attached() {
        if (this.element.tagName.toLowerCase() === "input") {
            this.input = this.element;
        }
        else if (this.element.tagName.toLowerCase() === "md-input") {
            this.input = this.element.au.controller.viewModel.input;
        }
        else {
            throw new Error("md-autocomplete must be attached to either an input or md-input element");
        }
        this.refresh();
    }
    detached() {
        // remove .autocomplete-content children
        $(this.input).siblings(".autocomplete-content").off("click");
        $(this.input).siblings(".autocomplete-content").remove();
    }
    refresh() {
        this.detached();
        $(this.input).autocomplete({
            data: this.values,
            minLength: this.minLength,
            limit: this.limit
        });
        $(this.input).siblings(".autocomplete-content").on("click", () => {
            events_1.fireEvent(this.input, "change");
        });
    }
    valuesChanged(newValue) {
        this.refresh();
    }
};
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Number)
], MdAutoComplete.prototype, "limit", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Number)
], MdAutoComplete.prototype, "minLength", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdAutoComplete.prototype, "values", void 0);
MdAutoComplete = __decorate([
    aurelia_framework_1.customAttribute("md-autocomplete"),
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [Element])
], MdAutoComplete);
exports.MdAutoComplete = MdAutoComplete;
