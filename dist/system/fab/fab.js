System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, au, MdFab;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdFab = /** @class */ (function () {
                function MdFab(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                }
                MdFab.prototype.attached = function () {
                    var _this = this;
                    this.element.classList.add("fixed-action-btn");
                    if (this.mdToolbarEnabled) {
                        this.element.classList.add("toolbar");
                    }
                    var options = {
                        direction: this.mdDirection,
                        hoverEnabled: this.mdHoverEnabled,
                        toolbarEnabled: this.mdToolbarEnabled
                    };
                    au.cleanOptions(options);
                    this.taskQueue.queueTask(function () { return _this.instance = new M.FloatingActionButton(_this.element, options); });
                };
                MdFab.prototype.detached = function () {
                    this.instance.destroy();
                    this.element.classList.remove("fixed-action-btn");
                    this.element.classList.remove("toolbar");
                };
                MdFab.prototype.open = function () {
                    this.instance.open();
                };
                MdFab.prototype.close = function () {
                    this.instance.close();
                };
                tslib_1.__decorate([
                    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdFab.prototype, "mdDirection", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdFab.prototype, "mdHoverEnabled", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdFab.prototype, "mdToolbarEnabled", void 0);
                MdFab = tslib_1.__decorate([
                    au.customElement("md-fab"),
                    tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
                ], MdFab);
                return MdFab;
            }());
            exports_1("MdFab", MdFab);
        }
    };
});
//# sourceMappingURL=fab.js.map