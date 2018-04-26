define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdToastService = /** @class */ (function () {
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
    exports.MdToastService = MdToastService;
});
//# sourceMappingURL=toastService.js.map