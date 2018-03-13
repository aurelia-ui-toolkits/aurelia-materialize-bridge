import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";

@customElement("md-progress")
@autoinject
export class MdProgress {
	constructor(private element: Element) { }

	wrapper: HTMLDivElement;

	@bindable
	mdColor: string = null;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	mdPixelSize?: number | string = null;
	mdPixelSizeChanged(newValue: number | string) {
		if (this.wrapper) {
			newValue = (newValue === null || newValue === "" || typeof newValue === "number" && isNaN(newValue)) ? "" : `${newValue}px`;
			this.wrapper.style.height = newValue;
			this.wrapper.style.width = newValue;
		}
	}

	@bindable
	mdSize: "big" | "default" | "small" = "big";

	@bindable({ defaultBindingMode: bindingMode.oneTime })
	mdType: "linear" | "circular" = "linear";

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	mdValue: number = null;

	bind() {
		// DO NOT REMOVE!!!
		// This disables property changed callbacks for any bindable properties during initialization
		// Prevents mdPixelSize getting cleared by the mdSizeChanged event during binding
	}

	attached() {
		this.mdPixelSizeChanged(this.mdPixelSize);
	}

	mdSizeChanged(newValue) {
		this.mdPixelSize = null;
	}
}
