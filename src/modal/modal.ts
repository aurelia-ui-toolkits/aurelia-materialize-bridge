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

	@au.ato.bindable.numberMd
	opacity: number; // Opacity of modal background

	@au.ato.bindable.numberMd
	inDuration: number; // Transition in duration

	@au.ato.bindable.numberMd
	outDuration: number; // Transition out duration

	@au.ato.bindable.booleanMd
	preventScrolling: boolean;

	@au.ato.bindable.booleanMd
	dismissible: boolean;

	@au.ato.bindable.stringMd
	startingTop: string; // Starting top style attribute

	@au.ato.bindable.stringMd
	endingTop: string; // Ending top style attribute

	@au.ato.bindable.booleanMd
	fixedFooter: boolean;
	fixedFooterChanged() {
		if (this.element) {
			this.element.classList.toggle("modal-fixed-footer", this.fixedFooter);
		}
	}

	@au.ato.bindable.booleanMd
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
