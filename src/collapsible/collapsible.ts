import * as au from "../aurelia";

@au.customAttribute("md-collapsible")
@au.autoinject
export class MdCollapsible {
	constructor(private element: Element) {
		this.attributeManager = new au.AttributeManager(this.element);
	}

	attributeManager: au.AttributeManager;

	@au.ato.bindable.booleanMd
	accordion: boolean;
	accordionChanged() {
		this.attached();
	}

	@au.ato.bindable.booleanMd({defaultBindingMode: au.bindingMode.oneTime})
	popout: boolean;

	@au.ato.bindable.numberMd({defaultBindingMode: au.bindingMode.oneTime})
	inDuration: number; // Transition in duration

	@au.ato.bindable.numberMd({defaultBindingMode: au.bindingMode.oneTime})
	outDuration: number; // Transition out duration

	instance: M.Collapsible;

	bind() {
		//
	}

	attached() {
		this.attributeManager.addClasses("collapsible");
		if (this.popout) {
			this.attributeManager.addClasses("popout");
		}
		let options: Partial<M.CollapsibleOptions> = {
			accordion: this.accordion,
			inDuration: this.inDuration,
			outDuration: this.outDuration,
			onOpenStart: el => au.fireMaterializeEvent(this.element, "open-start", { el }),
			onOpenEnd: el => au.fireMaterializeEvent(this.element, "open-end", { el }),
			onCloseStart: el => au.fireMaterializeEvent(this.element, "close-start", { el }),
			onCloseEnd: el => au.fireMaterializeEvent(this.element, "close-end", { el })
		};
		au.cleanOptions(options);
		this.instance = new M.Collapsible(this.element, options);
	}

	detached() {
		this.attributeManager.removeClasses(["collapsible", "popout"]);
		this.instance.destroy();
	}

	open(index = 0) {
		this.instance.open(index);
	}

	close(index = 0) {
		this.instance.close(index);
	}
}
