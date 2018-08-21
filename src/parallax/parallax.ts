import * as au from "../aurelia";

@au.customAttribute("md-parallax")
@au.autoinject
export class MdParallax {
	constructor(private element: Element) { }

	@au.ato.bindable.numberMd({defaultBindingMode: au.bindingMode.oneTime})
	responsiveThreshold: number;

	instance: M.Parallax;

	attached() {
		this.element.classList.add("parallax");
		let options: Partial<M.ParallaxOptions> = {
			responsiveThreshold: this.responsiveThreshold
		};
		au.cleanOptions(options);
		this.instance = new M.Parallax(this.element, options);
	}

	detached() {
		this.instance.destroy();
		this.element.classList.remove("parallax");
	}
}
