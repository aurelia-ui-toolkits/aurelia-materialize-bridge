System.register(["aurelia-framework", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, events_1, MdAutoComplete;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            MdAutoComplete = class MdAutoComplete {
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
                aurelia_framework_1.bindable
            ], MdAutoComplete.prototype, "limit", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdAutoComplete.prototype, "minLength", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdAutoComplete.prototype, "values", void 0);
            MdAutoComplete = __decorate([
                aurelia_framework_1.customAttribute("md-autocomplete"),
                aurelia_framework_1.autoinject
            ], MdAutoComplete);
            exports_1("MdAutoComplete", MdAutoComplete);
        }
    };
});
