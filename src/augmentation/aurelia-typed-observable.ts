import { bindable, createTypedBindable, usePropertyTypeForBindable, usePropertyTypeForObservable, coerceFunctions } from "aurelia-typed-observable-plugin";
import { IBindableDecoratorFunction } from "aurelia-typed-observable-plugin/dist/types/bindable";

usePropertyTypeForBindable(true);
usePropertyTypeForObservable(true);
bindable.booleanMd = createTypedBindable("booleanMd");
coerceFunctions.booleanMd = val => (val || val === "") && val !== "false" ? true : false;

declare module "aurelia-typed-observable-plugin/dist/types/bindable" {
	interface IBindableDecorator {
		booleanMd: IBindableDecoratorFunction<boolean>;
	}
}
