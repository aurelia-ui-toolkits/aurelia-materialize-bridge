import * as au from "../aurelia";

@au.customElement("md-slider")
@au.autoinject
export class MdSlider {
	constructor(private element: Element) {
		this.log = au.getLogger("md-slider");
	}

	log: au.Logger;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	fillContainer: boolean = false;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	height: number;

	@au.ato.bindable.booleanMd
	indicators: boolean;
	indicatorsChanged() {
		this.refresh();
	}

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	interval: number;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	duration: number;

	instance: M.Slider;

	attached() {
		if (this.fillContainer) {
			this.element.classList.add("fullscreen");
		}
		this.refresh();
	}

	detached() {
		this.instance.destroy();
	}

	pause() {
		this.instance.pause();
	}

	start() {
		this.instance.start();
	}

	next() {
		this.instance.next();
	}

	prev() {
		this.instance.prev();
	}

	refresh() {
		let options: M.SliderOptions = {
			indicators: this.indicators,
			height: this.height,
			duration: this.duration,
			interval: this.interval
		};
		this.log.debug("refreshing slider, params:", options);
		au.cleanOptions(options);
		this.instance = new M.Slider(this.element, options);
	}
}
