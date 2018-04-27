import { bindable, createTypedBindable, usePropertyTypeForBindable, usePropertyTypeForObservable, coerceFunctions } from "aurelia-typed-observable-plugin";
import { IBindableDecoratorFunction } from "aurelia-typed-observable-plugin/dist/types/bindable";

usePropertyTypeForBindable(true);
usePropertyTypeForObservable(true);

bindable.booleanMd = createTypedBindable("booleanMd");
coerceFunctions.booleanMd = val => (val || val === "") && val !== "false" ? true : false;

bindable.numberMd = createTypedBindable("numberMd");
coerceFunctions.numberMd = val => (val === undefined || val === null || val === "") ? undefined : Number(val);

bindable.stringMd = createTypedBindable("stringMd");
coerceFunctions.stringMd = val => val === undefined ? undefined : "" + val;

declare module "aurelia-typed-observable-plugin/dist/types/bindable" {
	interface IBindableDecorator {
		booleanMd: IBindableDecoratorFunction<boolean>;
		numberMd: IBindableDecoratorFunction<number>;
		stringMd: IBindableDecoratorFunction<string>;
	}
}
