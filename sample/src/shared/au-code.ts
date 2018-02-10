import { autoinject, bindable, noView, customElement, processContent, TargetInstruction } from "aurelia-framework";
import * as prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markdown";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import { Loader } from "aurelia-loader";

prism.plugins.NormalizeWhitespace.setDefaults({ "tabs-to-spaces": 2 });

@processContent((compiler, resources, element, instruction) => {
	parseCode(element, resources, instruction);
	return true;
})
@customElement("au-code")
@noView
@autoinject
export class AuCode {
	constructor(private element: Element, private targetInstruction: TargetInstruction, private loader: Loader) {
		this.html = (targetInstruction.behaviorInstructions[0] as any).html;
	}

	html: string;

	@bindable
	language: string;

	@bindable
	url: string;

	@bindable
	text: string;

	urlChanged() {
		if (this.url) {
			this.loader.loadText(this.url)
				.then(text => {
					this.html = text;
					this.render();
				});
		} else {
			this.html = "";
			this.render();
		}
	}

	textChanged() {
		if (this.text) {
			this.html = this.text;
			this.render();
		}
	}

	attached() {
		this.render();
	}

	render() {
		jQuery("pre", this.element).remove();
		let pre = document.createElement("pre");
		this.element.appendChild(pre);
		this.html = prism.plugins.NormalizeWhitespace.normalize(this.html);
		pre.innerHTML = prism.highlight(this.html, prism.languages[this.language]);
	}
}

function parseCode(element, resources, instruction) {
	instruction.html = dedent(decodeHtml(element.innerHTML));
}

function decodeHtml(html: string) {
	let txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
}

function dedent(str: string) {
	let match = str.match(/^[ \t]*(?=\S)/gm);
	if (!match) {
		return str;
	}

	let indent = Math.min.apply(Math, match.map(function(el) {
		return el.length;
	}));

	let re = new RegExp("^[ \\t]{" + indent + "}", "gm");
	return indent > 0 ? str.replace(re, "") : str;
}
