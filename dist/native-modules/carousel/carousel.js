var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable, bindingMode, children, customElement } from "aurelia-framework";
import { TaskQueue } from "aurelia-task-queue";
import { getBooleanFromAttributeValue } from "../common/attributes";
let MdCarousel = class MdCarousel {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.mdIndicators = true;
        this.mdSlider = false;
        this.items = [];
    }
    attached() {
        if (getBooleanFromAttributeValue(this.mdSlider)) {
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
                full_width: getBooleanFromAttributeValue(this.mdSlider),
                fullWidth: getBooleanFromAttributeValue(this.mdSlider),
                indicators: this.mdIndicators
            };
            this.taskQueue.queueTask(() => {
                $(this.element).carousel(options);
            });
        }
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], MdCarousel.prototype, "mdIndicators", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdCarousel.prototype, "mdSlider", void 0);
__decorate([
    children("md-carousel-item"),
    __metadata("design:type", Array)
], MdCarousel.prototype, "items", void 0);
MdCarousel = __decorate([
    customElement("md-carousel"),
    autoinject,
    __metadata("design:paramtypes", [Element, TaskQueue])
], MdCarousel);
export { MdCarousel };
