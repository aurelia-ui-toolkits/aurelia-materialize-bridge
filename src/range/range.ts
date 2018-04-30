import * as au from "../aurelia";

@au.customElement("md-range")
@au.autoinject
export class MdRange {
	constructor(private element: Element) { }

	input: HTMLInputElement;

	@au.bindable.booleanMd
	mdReadonly: boolean = false;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdMin: number = 0;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdMax: number = 100;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdStep: number = 1;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	mdValue: number = 0;

	instance: M.Range;

	attached() {
		this.instance = new M.Range(this.input);
	}

	detached(){
		this.instance.destroy();
	}
}
