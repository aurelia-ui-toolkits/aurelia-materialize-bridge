"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var au = require("../aurelia");
var MdToastService = /** @class */ (function () {
    function MdToastService() {
    }
    MdToastService.prototype.removeAll = function () {
        M.Toast.dismissAll();
    };
    MdToastService.prototype.show = function (html, displayLength, className, activationPercent, inDuration, outDuration) {
        var options = { html: html, displayLength: displayLength, classes: className, activationPercent: activationPercent, inDuration: inDuration, outDuration: outDuration };
        au.cleanOptions(options);
        return new Promise(function (resolve) {
            options.completeCallback = function () { return resolve(instance); };
            var instance = new M.Toast(options);
        });
    };
    return MdToastService;
}());
exports.MdToastService = MdToastService;
//# sourceMappingURL=toastService.js.map