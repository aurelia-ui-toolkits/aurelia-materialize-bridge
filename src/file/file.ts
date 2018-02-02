import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
import { fireEvent, fireMaterializeEvent } from "../common/events";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customElement("md-file")
@autoinject
export class MdFileInput {
	constructor(private element: Element) {
		this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
	}

	@bindable
	mdCaption = "File";

	@bindable({defaultBindingMode: bindingMode.oneTime})
	mdMultiple = false;

	@bindable({defaultBindingMode: bindingMode.twoWay})
	mdLabelValue;

	@bindable
	disabled = false;

	@bindable
	mdReadonly = false;

	filePath: HTMLInputElement;

	files: FileList;

	suspendUpdate = false;

	attached() {
		this.mdMultiple = getBooleanFromAttributeValue(this.mdMultiple);
		$(this.filePath).on("change", this.handleChangeFromNativeInput);
	}

	detached() {
		$(this.element).off("change", this.handleChangeFromNativeInput);
	}

	handleChangeFromNativeInput() {
		if (!this.suspendUpdate) {
			this.suspendUpdate = true;
			fireEvent(this.filePath, "change", { files: this.files });
			fireMaterializeEvent(this.filePath, "change", { files: this.files });
			this.suspendUpdate = false;
		}
	}
}
