define(["require", "exports", "tslib", "aurelia-framework", "aurelia-logging"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_logging_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdScrollfire = /** @class */ (function () {
        function MdScrollfire(element) {
            this.element = element;
            this.targetId = 0;
            this.log = aurelia_logging_1.getLogger("md-scrollfire");
        }
        MdScrollfire.prototype.attached = function () {
            var targets = $("[md-scrollfire-target]", this.element);
            if (targets.length > 0) {
                this.log.debug("targets", targets);
                var self_1 = this;
                var options_1 = [];
                targets.each(function (i, el) {
                    var target = $(el);
                    if (!target.attr("id")) {
                        target.attr("id", "md-scrollfire-target-" + self_1.targetId++);
                    }
                    options_1.push({
                        selector: "#" + target.attr("id"),
                        callback: target.get(0).au["md-scrollfire-target"].viewModel.callback,
                        offset: parseInt(target.get(0).au["md-scrollfire-target"].viewModel.offset, 10)
                    });
                });
                if (options_1.length > 0) {
                    this.log.debug("configuring scrollFire with these options:", options_1);
                    Materialize.scrollFire(options_1);
                }
            }
        };
        MdScrollfire = tslib_1.__decorate([
            aurelia_framework_1.customAttribute("md-scrollfire"),
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdScrollfire);
        return MdScrollfire;
    }());
    exports.MdScrollfire = MdScrollfire;
});
