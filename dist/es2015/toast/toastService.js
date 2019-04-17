import * as au from "../aurelia";
export class MdToastService {
    removeAll() {
        M.Toast.dismissAll();
    }
    show(html, displayLength, className, activationPercent, inDuration, outDuration) {
        let options = { html, displayLength, classes: className, activationPercent, inDuration, outDuration };
        au.cleanOptions(options);
        return new Promise(resolve => {
            options.completeCallback = () => resolve(instance);
            let instance = new M.Toast(options);
        });
    }
}
//# sourceMappingURL=toastService.js.map