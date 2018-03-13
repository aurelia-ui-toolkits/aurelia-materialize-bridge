"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MdToastService {
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
}
exports.MdToastService = MdToastService;
