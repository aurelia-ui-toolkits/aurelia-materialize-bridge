import * as au from "../aurelia";

@au.customAttribute("md-wait-cursor")
@au.autoinject
export class MdWaitCursorCustomAttribute {
	constructor(private element: Element, private templatingEngine: au.TemplatingEngine) { }

	value: boolean;
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
			case "LI": this.attachedLi(); break;
			case "TR": this.attachedTr(); break;
		}
	}

	attachedMdInput() {
		const inputField = this.element.querySelector("input-field");
		if (!inputField) {
			return;
		}

		let progress: Element = document.createElement("div");
		progress.innerHTML = "<md-progress type='circular' size='small' show.bind='value' style='position: absolute; left: 100%; transform: translateX(-100%);'></md-progress>";
		progress = progress.firstElementChild;

		inputField.insertAdjacentElement("afterbegin", progress);
		const view = this.templatingEngine.enhance(progress);
		view.bind(this);
		view.attached();
	}

	attachedButton() {
		const progress = document.createElement("div");
		progress.innerHTML =
			"<div show.bind='value' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.7; background: white; z-index: 98;'></div>" +
			"<md-progress type='circular' size='small' show.bind='value' style='position: absolute; left: 50%; top: 50%; height: 36px; transform: translateX(-50%) translateY(-50%); z-index: 99;'></md-progress>";
		progress.style.position = "relative";
		progress.style.display = "inline-block";
		progress.classList.add("button-wait-cursor-wrapper");
		this.element.insertAdjacentElement("beforebegin", progress);
		const view = this.templatingEngine.enhance(progress);
		view.bind(this);
		view.attached();
		progress.appendChild(this.element);
	}

	attachedLi() {
		let progress: Element = document.createElement("div");
		progress.innerHTML =
			"<div show.bind='value' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.7; background: white; z-index: 98; overflow: hidden;'>" +
			"<md-progress type='circular' size='small' show.bind='value' style='position: absolute; left: 50%; top: 50%; height: 36px; transform: translateX(-50%) translateY(-50%); z-index: 99;'></md-progress>" +
			"</div>";
		progress = progress.firstElementChild;
		let view = this.templatingEngine.enhance(progress);
		view.bind(this);
		view.attached();
		this.element.appendChild(progress);
	}

	attachedTr() {
		let tr = this.element as HTMLTableRowElement;
		let firstTd = this.element.firstElementChild;
		let progress = document.createElement("div");
		progress.innerHTML =
			"<div show.bind='value'>" +
			"<div style='opacity: 0.7; background: white; width: 100%; height: 100%;'></div>" +
			"<md-progress md-type='circular' md-size='small' style='position: absolute; left: 50%; top: 50%; height: 36px; transform: translateX(-50%) translateY(-50%);'></md-progress>" +
			"</div>";
		progress = progress.firstChild as HTMLDivElement;
		this.trResizeDelegate = () => {
			if (!this.value) {
				return;
			}
			progress.style.position = "absolute";
			progress.style.top = `${tr.offsetTop}px`;
			progress.style.left = `${tr.offsetLeft + tr.parentElement.scrollLeft}px`;
			progress.style.width = `${tr.offsetWidth}px`;
			progress.style.height = `${tr.offsetHeight}px`;
		};
		let view = this.templatingEngine.enhance(progress);
		view.bind(this);
		view.attached();
		this.trResizeDelegate();
		window.addEventListener("resize", this.trResizeDelegate);
		progress.onclick = (ev) => { ev.cancelBubble = true; };
		firstTd.appendChild(progress);
	}

	detached() {
		if (this.trResizeDelegate) {
			window.removeEventListener("resize", this.trResizeDelegate);
			this.trResizeDelegate = null;
		}
	}
}
