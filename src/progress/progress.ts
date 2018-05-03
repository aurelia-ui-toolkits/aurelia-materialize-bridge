import * as au from "../aurelia";

@au.customElement("md-progress")
@au.autoinject
export class MdProgress {
	constructor(private element: Element) { }

	wrapper: HTMLDivElement;

	@au.ato.bindable.stringMd
	color: string = null;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	pixelSize?: number = null;
	pixelSizeChanged(newValue: number) {
		if (this.wrapper) {
			this.wrapper.style.height = `${newValue}px`;
			this.wrapper.style.width = `${newValue}px`;
		}
	}

	@au.bindable
	size: "big" | "default" | "small" = "big";
	sizeChanged(newValue) {
		this.pixelSize = null;
	}

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	type: "linear" | "circular" = "linear";

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	value: number = null;

	bind() {
		// DO NOT REMOVE!!!
		// This disables property changed callbacks for any bindable properties during initialization
		// Prevents mdPixelSize getting cleared by the mdSizeChanged event during binding
	}

	attached() {
		this.pixelSizeChanged(this.pixelSize);
	}
}
