define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdFab = /** @class */ (function () {
        function MdFab(element, taskQueue) {
            this.element = element;
            this.taskQueue = taskQueue;
        }
        MdFab.prototype.attached = function () {
            var _this = this;
            this.element.classList.add("fixed-action-btn");
            var options = {
                direction: this.mdDirection,
                hoverEnabled: this.mdHoverEnabled,
                toolbarEnabled: this.toolbarEnabled
            };
            au.cleanOptions(options);
            this.taskQueue.queueTask(function () { return _this.instance = new M.FloatingActionButton(_this.element, options); });
        };
        MdFab.prototype.detached = function () {
            this.instance.destroy();
            this.element.classList.remove("fixed-action-btn");
        };
        MdFab.prototype.open = function () {
            this.instance.open();
        };
        MdFab.prototype.close = function () {
            this.instance.close();
        };
        tslib_1.__decorate([
            au.bindable.stringMd,
            tslib_1.__metadata("design:type", String)
        ], MdFab.prototype, "mdDirection", void 0);
        tslib_1.__decorate([
            au.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], MdFab.prototype, "mdHoverEnabled", void 0);
        tslib_1.__decorate([
            au.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], MdFab.prototype, "toolbarEnabled", void 0);
        MdFab = tslib_1.__decorate([
            au.customElement("md-fab"),
            tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
        ], MdFab);
        return MdFab;
    }());
    exports.MdFab = MdFab;
});
//# sourceMappingURL=fab.js.map