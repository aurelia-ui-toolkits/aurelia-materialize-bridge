import * as au from "../aurelia";

@au.customElement("md-pagination")
@au.autoinject
export class MdPagination {
	constructor(private element: Element) { }

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	mdActivePage: number = 1;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneWay })
	mdPages: number = 5;
	mdPagesChanged() {
		this.setActivePage(1);
	}

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneWay })
	mdVisiblePageLinks: number = 15;
	mdVisiblePageLinksChanged() {
		this.mdPageLinks = this.generatePageLinks();
	}

	@au.bindable({ defaultBindingMode: au.bindingMode.oneWay })
	mdPageLinks: number[] = [];

	@au.ato.bindable.booleanMd
	mdShowFirstLast: boolean = true;

	@au.ato.bindable.booleanMd
	mdShowPrevNext: boolean = true;

	@au.ato.bindable.booleanMd
	mdShowPageLinks: boolean = true;

	bind() {
		this.mdPageLinks = this.generatePageLinks();
	}

	setActivePage(page: number) {
		this.mdActivePage = page;
		this.mdPageLinks = this.generatePageLinks();
		au.fireMaterializeEvent(this.element, "page-changed", this.mdActivePage);
	}

	setFirstPage() {
		if (this.mdActivePage > 1) {
			this.setActivePage(1);
		}
	}

	setLastPage() {
		if (this.mdActivePage < this.mdPages) {
			this.setActivePage(this.mdPages);
		}
	}

	setPreviousPage() {
		if (this.mdActivePage > 1) {
			this.setActivePage(this.mdActivePage - 1);
		}
	}

	setNextPage() {
		if (this.mdActivePage < this.mdPages) {
			this.setActivePage(this.mdActivePage + 1);
		}
	}

	generatePageLinks(): number[] {
		let numberOfLinks = Math.min(this.mdVisiblePageLinks, this.mdPages);
		let midPoint = Math.ceil(numberOfLinks / 2);
		let start = Math.max(this.mdActivePage - midPoint, 0);
		// respect visible links
		if (start + midPoint * 2 > this.mdPages) {
			start = this.mdPages - midPoint * 2;
		}
		let end = Math.min(start + numberOfLinks, this.mdPages);

		let list: number[] = [];
		for (let i = start; i < end; i++) {
			list.push(i);
		}

		return list;
	}
}
