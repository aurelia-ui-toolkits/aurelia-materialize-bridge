import * as tslib_1 from "tslib";
import { customAttribute, autoinject } from "aurelia-framework";
import { getLogger } from "aurelia-logging";
var MdScrollfire = /** @class */ (function () {
    function MdScrollfire(element) {
        this.element = element;
        this.targetId = 0;
        this.log = getLogger("md-scrollfire");
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
        customAttribute("md-scrollfire"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdScrollfire);
    return MdScrollfire;
}());
export { MdScrollfire };
//# sourceMappingURL=scrollfire.js.map