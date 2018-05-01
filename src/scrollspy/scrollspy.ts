import * as au from "../aurelia";

@au.customAttribute("md-scrollspy")
@au.autoinject
export class MdScrollSpy {
	constructor(private element: Element) { }

	instance: M.ScrollSpy;

	@au.ato.bindable.numberMd({defaultBindingMode: au.bindingMode.oneTime})
	throttle: number;

	@au.ato.bindable.numberMd({defaultBindingMode: au.bindingMode.oneTime})
	scrollOffset: number;

	@au.ato.bindable.stringMd({defaultBindingMode: au.bindingMode.oneTime})
	activeClass: string;

	@au.bindable
	getActiveElement: (id: string) => string;

	attached() {
		let options: Partial<M.ScrollSpyOptions> = {
			throttle: this.throttle,
			scrollOffset: this.scrollOffset,
			activeClass: this.activeClass,
			getActiveElement: this.getActiveElement
		};
		au.cleanOptions(options);
		this.instance = new M.ScrollSpy(this.element, options);
	}

	detached() {
		this.instance.destroy();
	}
}
