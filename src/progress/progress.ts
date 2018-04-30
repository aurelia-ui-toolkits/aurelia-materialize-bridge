import * as au from "../aurelia";

@au.customElement("md-progress")
@au.autoinject
export class MdProgress {
	constructor(private element: Element) { }

	wrapper: HTMLDivElement;

	@au.bindable.stringMd
	mdColor: string = null;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	mdPixelSize?: number = null;
	mdPixelSizeChanged(newValue: number) {
		if (this.wrapper) {
			this.wrapper.style.height = `${newValue}px`;
			this.wrapper.style.width = `${newValue}px`;
		}
	}

	@au.bindable
	mdSize: "big" | "default" | "small" = "big";
	mdSizeChanged(newValue) {
		this.mdPixelSize = null;
	}

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	mdType: "linear" | "circular" = "linear";

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	mdValue: number = null;

	bind() {
		// DO NOT REMOVE!!!
		// This disables property changed callbacks for any bindable properties during initialization
		// Prevents mdPixelSize getting cleared by the mdSizeChanged event during binding
	}

	attached() {
		this.mdPixelSizeChanged(this.mdPixelSize);
	}
}
