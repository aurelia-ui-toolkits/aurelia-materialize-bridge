System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MdToastService;
    return {
        setters: [],
        execute: function () {
            MdToastService = /** @class */ (function () {
                function MdToastService() {
                }
                MdToastService.prototype.removeAll = function () {
                    Materialize.Toast.removeAll();
                };
                MdToastService.prototype.show = function (message, displayLength, className) {
                    return new Promise(function (resolve, reject) {
                        var toastInstance = Materialize.toast(message, displayLength, className, function () {
                            resolve(toastInstance);
                        });
                    });
                };
                return MdToastService;
            }());
            exports_1("MdToastService", MdToastService);
        }
    };
});
//# sourceMappingURL=toastService.js.map