import { bindable, createTypedBindable, usePropertyTypeForBindable, usePropertyTypeForObservable, coerceFunctions } from "aurelia-typed-observable-plugin";
usePropertyTypeForBindable(true);
usePropertyTypeForObservable(true);
bindable.booleanMd = createTypedBindable("booleanMd");
coerceFunctions.booleanMd = val => {
    if (val === undefined) {
        return undefined;
    }
    else if (val === null) {
        return null;
    }
    else {
        return (val || val === "") && val !== "false" ? true : false;
    }
};
bindable.numberMd = createTypedBindable("numberMd");
coerceFunctions.numberMd = val => {
    if (val === undefined || val === "" || val === "undefined" || val === "NaN") {
        return undefined;
    }
    else if (val === null || val === "null") {
        return null;
    }
    else {
        return Number(val);
    }
};
bindable.stringMd = createTypedBindable("stringMd");
coerceFunctions.stringMd = val => {
    if (val === undefined) {
        return undefined;
    }
    else if (val === null) {
        return null;
    }
    else {
        return "" + val;
    }
};
// dummy export is needed to enforce loading order for requirejs
export class Dummy {
}
//# sourceMappingURL=aurelia-typed-observable.js.map