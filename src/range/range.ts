import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";

@customElement("md-range")
@autoinject
export class MdRange {
	@bindable
	mdReadonly: boolean | string = false;

	@bindable({defaultBindingMode: bindingMode.oneTime})
	mdMin: number | string = 0;

	@bindable({defaultBindingMode: bindingMode.oneTime})
	mdMax: number | string = 100;

	@bindable({defaultBindingMode: bindingMode.oneTime})
	mdStep: number | string = 1;

	@bindable({defaultBindingMode: bindingMode.twoWay})
	mdValue: number | string = 0;
}
