System.register(["aurelia-framework", "aurelia-task-queue", "../common/attributes"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_task_queue_1, attributes_1, MdCarousel;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_task_queue_1_1) {
                aurelia_task_queue_1 = aurelia_task_queue_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            }
        ],
        execute: function () {
            MdCarousel = class MdCarousel {
                constructor(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.mdIndicators = true;
                    this.mdSlider = false;
                    this.items = [];
                }
                attached() {
                    if (attributes_1.getBooleanFromAttributeValue(this.mdSlider)) {
                        this.element.classList.add("carousel-slider");
                    }
                    this.refresh();
                }
                detached() {
                    $(this.element).carousel("destroy");
                }
                itemsChanged(newValue) {
                    this.refresh();
                }
                refresh() {
                    if (this.items.length > 0) {
                        const options = {
                            full_width: attributes_1.getBooleanFromAttributeValue(this.mdSlider),
                            fullWidth: attributes_1.getBooleanFromAttributeValue(this.mdSlider),
                            indicators: this.mdIndicators
                        };
                        this.taskQueue.queueTask(() => {
                            $(this.element).carousel(options);
                        });
                    }
                }
            };
            __decorate([
                aurelia_framework_1.bindable,
                __metadata("design:type", Object)
            ], MdCarousel.prototype, "mdIndicators", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                __metadata("design:type", Object)
            ], MdCarousel.prototype, "mdSlider", void 0);
            __decorate([
                aurelia_framework_1.children("md-carousel-item"),
                __metadata("design:type", Array)
            ], MdCarousel.prototype, "items", void 0);
            MdCarousel = __decorate([
                aurelia_framework_1.customElement("md-carousel"),
                aurelia_framework_1.autoinject,
                __metadata("design:paramtypes", [Element, aurelia_task_queue_1.TaskQueue])
            ], MdCarousel);
            exports_1("MdCarousel", MdCarousel);
        }
    };
});
