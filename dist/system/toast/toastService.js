System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MdToastService;
    return {
        setters: [],
        execute: function () {
            MdToastService = class MdToastService {
                removeAll() {
                    Materialize.Toast.removeAll();
                }
                show(message, displayLength, className) {
                    return new Promise((resolve, reject) => {
                        const toastInstance = Materialize.toast(message, displayLength, className, () => {
                            resolve(toastInstance);
                        });
                    });
                }
            };
            exports_1("MdToastService", MdToastService);
        }
    };
});
