import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { fireMaterializeEvent } from "../common/events";
import { getBooleanFromAttributeValue } from "../common/attributes";

@customElement("md-pagination")
@autoinject
export class MdPagination {
	constructor(private element: Element) { }

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	mdActivePage: number = 1;

	@bindable({ defaultBindingMode: bindingMode.oneWay })
	mdPages: number | string = 5;

	@bindable({ defaultBindingMode: bindingMode.oneWay })
	mdVisiblePageLinks: number | string = 15;

	@bindable({ defaultBindingMode: bindingMode.oneWay })
	mdPageLinks: number[] = [];

	@bindable
	mdShowFirstLast: boolean | string = true;

	@bindable
	mdShowPrevNext: boolean | string = true;

	@bindable
	mdShowPageLinks: boolean | string = true;

	// local variables to stop Changed events when parsing to int
	numberOfLinks: number = 15;
	pages: number = 5;

	bind() {
		// attached() throws unhandled exceptions
		this.pages = parseInt(this.mdPages.toString(), 10);
		// We don't want mdVisiblePageLinks to be greater than mdPages
		this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks.toString(), 10), this.pages);
		this.mdShowFirstLast = getBooleanFromAttributeValue(this.mdShowFirstLast);
		this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
		this.mdPageLinks = this.generatePageLinks();
	}

	setActivePage(page) {
		this.mdActivePage = parseInt(page, 10);
		this.mdPageLinks = this.generatePageLinks();
		fireMaterializeEvent(this.element, "page-changed", this.mdActivePage);
	}

	setFirstPage() {
		if (this.mdActivePage > 1) {
			this.setActivePage(1);
		}
	}

	setLastPage() {
		if (this.mdActivePage < this.pages) {
			this.setActivePage(this.pages);
		}
	}

	setPreviousPage() {
		if (this.mdActivePage > 1) {
			this.setActivePage(this.mdActivePage - 1);
		}
	}

	setNextPage() {
		if (this.mdActivePage < this.pages) {
			this.setActivePage(this.mdActivePage + 1);
		}
	}

	mdPagesChanged() {
		this.pages = parseInt(this.mdPages.toString(), 10);
		this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks.toString(), 10), this.pages);
		this.setActivePage(1);
	}

	mdVisiblePageLinksChanged() {
		this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks.toString(), 10), this.pages);
		this.mdPageLinks = this.generatePageLinks();
	}

	generatePageLinks(): number[] {
		let midPoint = this.numberOfLinks / 2;
		let start = Math.max(this.mdActivePage - midPoint, 0);
		// respect visible links
		if (start + midPoint * 2 > this.pages) {
			start = this.pages - midPoint * 2;
		}
		let end = Math.min(start + this.numberOfLinks, this.pages);

		let list: number[] = [];
		for (let i = start; i < end; i++) {
			list.push(i);
		}

		return list;
	}
}
