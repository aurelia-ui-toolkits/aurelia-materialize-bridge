import * as au from "../aurelia";

@au.customElement("md-pagination")
@au.autoinject
export class MdPagination {
	constructor(private element: Element) { }

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	activePage: number = 1;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneWay })
	pages: number = 5;
	pagesChanged() {
		this.setActivePage(1);
	}

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneWay })
	visiblePageLinks: number = 15;
	visiblePageLinksChanged() {
		this.pageLinks = this.generatePageLinks();
	}

	@au.bindable({ defaultBindingMode: au.bindingMode.oneWay })
	pageLinks: number[] = [];

	@au.ato.bindable.booleanMd
	showFirstLast: boolean = true;

	@au.ato.bindable.booleanMd
	showPrevNext: boolean = true;

	@au.ato.bindable.booleanMd
	showPageLinks: boolean = true;

	bind() {
		this.pageLinks = this.generatePageLinks();
	}

	setActivePage(page: number) {
		this.activePage = page;
		this.pageLinks = this.generatePageLinks();
		au.fireMaterializeEvent(this.element, "page-changed", this.activePage);
	}

	setFirstPage() {
		if (this.activePage > 1) {
			this.setActivePage(1);
		}
	}

	setLastPage() {
		if (this.activePage < this.pages) {
			this.setActivePage(this.pages);
		}
	}

	setPreviousPage() {
		if (this.activePage > 1) {
			this.setActivePage(this.activePage - 1);
		}
	}

	setNextPage() {
		if (this.activePage < this.pages) {
			this.setActivePage(this.activePage + 1);
		}
	}

	generatePageLinks(): number[] {
		let numberOfLinks = Math.min(this.visiblePageLinks, this.pages);
		let midPoint = Math.ceil(numberOfLinks / 2);
		let start = Math.max(this.activePage - midPoint, 0);
		// respect visible links
		if (start + midPoint * 2 > this.pages) {
			start = Math.max(this.pages - midPoint * 2, 0);
		}
		let end = Math.min(start + numberOfLinks, this.pages);

		let list: number[] = [];
		for (let i = start; i < end; i++) {
			list.push(i);
		}

		return list;
	}
}
