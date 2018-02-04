System.register(["aurelia-framework", "aurelia-logging"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_logging_1, MdStaggeredList;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            }
        ],
        execute: function () {
            MdStaggeredList = class MdStaggeredList {
                constructor(element) {
                    this.element = element;
                    this.staggerList = this.staggerList.bind(this);
                    this.log = aurelia_logging_1.getLogger("md-staggered-list");
                }
                attached() {
                    this.element.addEventListener("click", this.staggerList);
                    this.ensureOpacity();
                }
                detached() {
                    this.element.removeEventListener("click", this.staggerList);
                }
                staggerList() {
                    Materialize.showStaggeredList($(this.ref));
                }
                ensureOpacity() {
                    let items = this.ref.querySelectorAll("li");
                    [].forEach.call(items, item => {
                        let opacity = window.getComputedStyle(item).opacity;
                        if (opacity !== "0") {
                            item.style.opacity = 0;
                        }
                    });
                }
            };
            __decorate([
                aurelia_framework_1.bindable
            ], MdStaggeredList.prototype, "ref", void 0);
            MdStaggeredList = __decorate([
                aurelia_framework_1.customAttribute("md-staggered-list"),
                aurelia_framework_1.autoinject
            ], MdStaggeredList);
            exports_1("MdStaggeredList", MdStaggeredList);
        }
    };
});
