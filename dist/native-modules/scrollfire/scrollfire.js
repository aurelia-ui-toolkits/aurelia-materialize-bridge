var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customAttribute, autoinject } from "aurelia-framework";
import { getLogger } from "aurelia-logging";
let MdScrollfire = class MdScrollfire {
    constructor(element) {
        this.element = element;
        this.targetId = 0;
        this.log = getLogger("md-scrollfire");
    }
    attached() {
        let targets = $("[md-scrollfire-target]", this.element);
        if (targets.length > 0) {
            this.log.debug("targets", targets);
            let self = this;
            let options = [];
            targets.each((i, el) => {
                let target = $(el);
                if (!target.attr("id")) {
                    target.attr("id", `md-scrollfire-target-${self.targetId++}`);
                }
                options.push({
                    selector: "#" + target.attr("id"),
                    callback: target.get(0).au["md-scrollfire-target"].viewModel.callback,
                    offset: parseInt(target.get(0).au["md-scrollfire-target"].viewModel.offset, 10)
                });
            });
            if (options.length > 0) {
                this.log.debug("configuring scrollFire with these options:", options);
                Materialize.scrollFire(options);
            }
        }
    }
};
MdScrollfire = __decorate([
    customAttribute("md-scrollfire"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdScrollfire);
export { MdScrollfire };
