import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let ValidationContainer = class ValidationContainer {
    constructor(element, coloursService) {
        this.element = element;
        this.coloursService = coloursService;
        this.validateResults = [];
        this.mdUnrenderValidateResults = (results, renderer) => {
            this.validateResults = this.validateResults.filter(x => !results.find(y => y.id === x.id));
            this.validationClass = undefined;
        };
        this.mdRenderValidateResults = (results, renderer) => {
            this.validateResults.push(...results.filter(x => !x.valid));
            let invalid = results.find(x => !x.valid);
            if (invalid || this.showSuccess) {
                this.validationClass = invalid ? "invalid" : "valid";
            }
        };
    }
    attached() {
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
    }
};
__decorate([
    au.ato.bindable.booleanMd,
    __metadata("design:type", Boolean)
], ValidationContainer.prototype, "showSuccess", void 0);
ValidationContainer = __decorate([
    au.customElement("validation-container"),
    __metadata("design:paramtypes", [Element, au.MdColorsService])
], ValidationContainer);
export { ValidationContainer };
//# sourceMappingURL=validation-container.js.map