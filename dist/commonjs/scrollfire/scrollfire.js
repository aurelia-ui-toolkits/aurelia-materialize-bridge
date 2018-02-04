"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const aurelia_logging_1 = require("aurelia-logging");
let MdScrollfire = class MdScrollfire {
    constructor(element) {
        this.element = element;
        this.targetId = 0;
        this.log = aurelia_logging_1.getLogger("md-scrollfire");
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
    aurelia_framework_1.customAttribute("md-scrollfire"),
    aurelia_framework_1.autoinject
], MdScrollfire);
exports.MdScrollfire = MdScrollfire;
