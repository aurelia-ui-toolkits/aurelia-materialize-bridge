import { bindable, createTypedBindable, usePropertyTypeForBindable, usePropertyTypeForObservable, coerceFunctions } from "aurelia-typed-observable-plugin";
usePropertyTypeForBindable(true);
usePropertyTypeForObservable(true);
bindable.booleanMd = createTypedBindable("booleanMd");
coerceFunctions.booleanMd = function (val) {
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
coerceFunctions.numberMd = function (val) {
    if (val === undefined || val === "") {
        return undefined;
    }
    else if (val === null) {
        return null;
    }
    else {
        return Number(val);
    }
};
bindable.stringMd = createTypedBindable("stringMd");
coerceFunctions.stringMd = function (val) {
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
//# sourceMappingURL=aurelia-typed-observable.js.map