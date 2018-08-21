import * as au from "../aurelia";

@au.customElement("md-range")
@au.autoinject
export class MdRange {
	constructor(private element: Element) { }

	input: HTMLInputElement;

	@au.ato.bindable.booleanMd
	readonly: boolean = false;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	min: number = 0;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	max: number = 100;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	step: number = 1;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	value: number = 0;

	instance: M.Range;

	attached() {
		this.instance = new M.Range(this.input);
	}

	detached(){
		this.instance.destroy();
	}
}
