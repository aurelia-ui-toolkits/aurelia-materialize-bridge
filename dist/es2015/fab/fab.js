import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdFab = class MdFab {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
    }
    attached() {
        this.element.classList.add("fixed-action-btn");
        if (this.toolbarEnabled) {
            this.element.classList.add("toolbar");
        }
        let options = {
            direction: this.direction,
            hoverEnabled: this.hoverEnabled,
            toolbarEnabled: this.toolbarEnabled
        };
        au.cleanOptions(options);
        this.taskQueue.queueTask(() => this.instance = new M.FloatingActionButton(this.element, options));
    }
    detached() {
        this.instance.destroy();
        this.element.classList.remove("fixed-action-btn");
        this.element.classList.remove("toolbar");
    }
    open() {
        this.instance.open();
    }
    close() {
        this.instance.close();
    }
};
__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", String)
], MdFab.prototype, "direction", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdFab.prototype, "hoverEnabled", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdFab.prototype, "toolbarEnabled", void 0);
MdFab = __decorate([
    au.customElement("md-fab"),
    __metadata("design:paramtypes", [Element, au.TaskQueue])
], MdFab);
export { MdFab };
//# sourceMappingURL=fab.js.map