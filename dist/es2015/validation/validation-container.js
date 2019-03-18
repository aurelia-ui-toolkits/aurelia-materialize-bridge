import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let ValidationContainer = class ValidationContainer {
    constructor(element, coloursService) {
        this.element = element;
        this.coloursService = coloursService;
        this.mdUnrenderValidateResults = (results, renderer) => {
            for (let result of results) {
                if (!result.valid) {
                    renderer.removeMessage(this.containerDiv, result);
                }
            }
            renderer.removeValidationClasses(this.containerDiv);
        };
        this.mdRenderValidateResults = (results, renderer) => {
            if (this.containerDiv) {
                for (let result of results) {
                    if (!result.valid) {
                        renderer.addMessage(this.containerDiv, result);
                    }
                }
            }
            let valid = !results.find(x => !x.valid);
            if (!valid || this.showSuccess) {
                renderer.addValidationClasses(this.containerDiv, valid);
            }
        };
    }
    attached() {
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
    }
};
tslib_1.__decorate([
    au.ato.bindable.booleanMd,
    tslib_1.__metadata("design:type", Boolean)
], ValidationContainer.prototype, "showSuccess", void 0);
ValidationContainer = tslib_1.__decorate([
    au.customElement("validation-container"),
    tslib_1.__metadata("design:paramtypes", [Element, au.MdColorsService])
], ValidationContainer);
export { ValidationContainer };
//# sourceMappingURL=validation-container.js.map