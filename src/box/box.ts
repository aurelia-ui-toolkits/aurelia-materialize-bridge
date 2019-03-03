import * as au from "../aurelia";

@au.customAttribute("md-box")
@au.autoinject
export class MdBox {
	constructor(private element: Element) {
		this.attributeManager = new au.AttributeManager(this.element);
	}

	attributeManager: au.AttributeManager;

	@au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime })
	caption: string;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	inDuration: number;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	outDuration: number;

	instance: M.Materialbox;

	attached() {
		this.attributeManager.addClasses("materialboxed");
		if (this.caption) {
			this.attributeManager.addAttributes({ "data-caption": this.caption });
		}
		let options: Partial<M.MaterialboxOptions> = {
			inDuration: this.inDuration,
			outDuration: this.outDuration,
			onOpenStart: () => au.fireMaterializeEvent(this.element, "open-start"),
			onOpenEnd: () => au.fireMaterializeEvent(this.element, "open-end"),
			onCloseStart: () => au.fireMaterializeEvent(this.element, "close-start"),
			onCloseEnd: () => au.fireMaterializeEvent(this.element, "close-end")
		};
		au.cleanOptions(options);
		this.instance = new M.Materialbox(this.element, options);
	}

	detached() {
		this.instance.destroy();
		this.attributeManager.removeAttributes("data-caption");
		this.attributeManager.removeClasses("materialboxed");
	}
}
