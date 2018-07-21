System.register(["../aurelia"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var au, MdToastService;
    return {
        setters: [
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdToastService = /** @class */ (function () {
                function MdToastService() {
                }
                MdToastService.prototype.removeAll = function () {
                    M.Toast.dismissAll();
                };
                MdToastService.prototype.show = function (message, displayLength, className, activationPercent, inDuration, outDuration) {
                    var options = { html: message, displayLength: displayLength, classes: className, activationPercent: activationPercent, inDuration: inDuration, outDuration: outDuration };
                    au.cleanOptions(options);
                    return new Promise(function (resolve) {
                        options.completeCallback = function () { return resolve(instance); };
                        var instance = new M.Toast(options);
                    });
                };
                return MdToastService;
            }());
            exports_1("MdToastService", MdToastService);
        }
    };
});
//# sourceMappingURL=toastService.js.map