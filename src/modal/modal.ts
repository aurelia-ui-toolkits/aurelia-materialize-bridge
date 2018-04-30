import * as au from "../aurelia";

@au.customAttribute("md-modal")
@au.autoinject
export class MdModal {
	constructor(private element: Element) {
		this.log = au.getLogger("md-modal");
		this.attributeManager = new au.AttributeManager(this.element);
	}

	log: au.Logger;
	attributeManager: au.AttributeManager;

	@au.bindable.numberMd
	opacity: number; // Opacity of modal background

	@au.bindable.numberMd
	inDuration: number; // Transition in duration

	@au.bindable.numberMd
	outDuration: number; // Transition out duration

	@au.bindable.booleanMd
	preventScrolling: boolean;

	@au.bindable.booleanMd
	dismissible: boolean;

	@au.bindable.stringMd
	startingTop: string; // Starting top style attribute

	@au.bindable.stringMd
	endingTop: string; // Ending top style attribute

	@au.bindable.booleanMd
	fixedFooter: boolean;

	@au.bindable.booleanMd
	bottomSheet: boolean;

	instance: M.Modal;

	attached() {
		const options: Partial<M.ModalOptions> = {
			opacity: this.opacity,
			inDuration: this.inDuration,
			outDuration: this.outDuration,
			preventScrolling: this.preventScrolling,
			dismissible: this.dismissible,
			startingTop: this.startingTop,
			endingTop: this.endingTop,
			onOpenStart: () => au.fireMaterializeEvent(this.element, "open-start"),
			onOpenEnd: () => au.fireMaterializeEvent(this.element, "open-end"),
			onCloseStart: () => au.fireMaterializeEvent(this.element, "close-start"),
			onCloseEnd: () => au.fireMaterializeEvent(this.element, "close-end")
		};
		this.log.debug("modal options: ", options);
		au.cleanOptions(options);
		this.attributeManager.addClasses("modal");
		this.instance = new M.Modal(this.element, options);
	}

	detached() {
		this.instance.destroy();
		this.attributeManager.removeClasses("modal");
	}

	open() {
		this.instance.open();
	}

	close() {
		this.instance.close();
	}
}
