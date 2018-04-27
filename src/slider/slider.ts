import * as au from "../aurelia";

@au.customElement("md-slider")
@au.autoinject
export class MdSlider {
	constructor(private element: Element) {
		this.log = au.getLogger("md-slider");
	}

	log: au.Logger;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdFillContainer: boolean = false;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdHeight: number;

	@au.bindable.booleanMd
	mdIndicators: boolean;
	mdIndicatorsChanged() {
		this.refresh();
	}

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdInterval: number;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdDuration: number;

	instance: M.Slider;

	attached() {
		if (this.mdFillContainer) {
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
			indicators: this.mdIndicators,
			height: this.mdHeight,
			duration: this.mdDuration,
			interval: this.mdInterval
		};
		this.log.debug("refreshing slider, params:", options);
		au.cleanOptions(options);
		this.instance = new M.Slider(this.element, options);
	}
}
