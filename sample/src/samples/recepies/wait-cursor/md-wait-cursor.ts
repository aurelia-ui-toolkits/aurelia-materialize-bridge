import { customAttribute, autoinject, TemplatingEngine } from "aurelia-framework";

@customAttribute("md-wait-cursor")
@autoinject
export class MdWaitCursorCustomAttribute {
	constructor(private element: Element, private templatingEngine: TemplatingEngine) { }

	value = false;
	valueChanged(newVal: boolean) {
		if (newVal && this.trResizeDelegate) {
			this.trResizeDelegate();
		}
	}
	trResizeDelegate: () => any;

	attached() {
		switch (this.element.tagName) {
			case "MD-INPUT": this.attachedMdInput(); break;
			case "BUTTON": this.attachedButton(); break;
			case "TR": this.attachedTr(); break;
		}
	}

	attachedMdInput() {
		let inputField = this.element.getElementsByClassName("input-field");
		if (!inputField) {
			return;
		}

		let progress: Element = document.createElement("div");
		progress.innerHTML = "<md-progress md-type='circular' md-size='small' show.bind='value' style='position: absolute; left: 100%; transform: translateX(-100%);'></md-progress>";
		progress = progress.children[0];

		inputField[0].insertAdjacentElement("afterbegin", progress);
		let view = this.templatingEngine.enhance(progress);
		view.bind(this);
		view.attached();
	}

	attachedButton() {
		let progress = document.createElement("div");
		progress.innerHTML = "<div show.bind='value' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.7; background: white; z-index: 998;'></div><md-progress md-type='circular' md-size='small' show.bind='value' style='position: absolute; left: 50%; transform: translateX(-50%); z-index: 999;'></md-progress>";
		progress.style.position = "relative";
		progress.style.display = "inline-block";
		progress.classList.add("button-wait-cursor-wrapper");
		this.element.insertAdjacentElement("beforebegin", progress);
		let view = this.templatingEngine.enhance(progress);
		view.bind(this);
		view.attached();
		progress.appendChild(this.element);
	}

	attachedTr() {
		let tr = this.element;
		let firstTd = this.element.firstElementChild;
		let progress = $(
			"<div show.bind='value'>" +
			"<div style='opacity: 0.7; background: white; width: 100%; height: 100%;'></div>" +
			"<md-progress md-type='circular' md-size='small' style='position: absolute; left: 50%; top: 50%; height: 36px; transform: translateX(-50%) translateY(-50%);'></md-progress>" +
			"</div>");
		this.trResizeDelegate = () => {
			if (!this.value) {
				return;
			}
			let pos = $(tr).position();
			$(progress).css({
				position: "absolute",
				top: pos.top,
				left: pos.left,
				width: $(tr).css("width"),
				height: $(tr).css("height")
			});
		};
		this.trResizeDelegate();
		let view = this.templatingEngine.enhance(progress[0]);
		view.bind(this);
		view.attached();
		$(window).resize(this.trResizeDelegate);
		progress[0].onclick = (ev) => { ev.cancelBubble = true; };
		firstTd.appendChild(progress[0]);

	}

	detached() {
		if (this.trResizeDelegate) {
			$(window).off("resize", this.trResizeDelegate);
			this.trResizeDelegate = null;
		}
	}
}
