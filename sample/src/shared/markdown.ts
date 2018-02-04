import { bindable, noView, autoinject, customElement } from "aurelia-framework";
import * as showdown from "showdown";
import "code-prettify/run_prettify";
import "showdown-prettify";
import { Loader } from "aurelia-loader";

declare var PR: any;

@customElement("au-markdown")
@noView
@autoinject
export class AuMarkdown {
	constructor(private element: Element, private loader: Loader) {
		this.converter = new showdown.Converter({ extensions: ["prettify"] });
	}

	converter: showdown.Converter;

	@bindable
	url: string;
	urlChanged() {
		if (this.url) {
			this.loader.loadText(this.url)
				.then(text => {
					this.element.innerHTML = this.converter.makeHtml(text);
					PR.prettyPrint();
				}).then(() => {
					let event = new CustomEvent("loaded", {
						bubbles: true
					});
					this.element.dispatchEvent(event);
				});
		} else {
			this.element.innerHTML = "";
		}
	}

	@bindable
	text: string;
	textChanged(newValue: string) {
		if (newValue) {
			this.element.innerHTML = this.converter.makeHtml(newValue);
			PR.prettyPrint();
		} else {
			this.element.innerHTML = "";
		}
	}
}
