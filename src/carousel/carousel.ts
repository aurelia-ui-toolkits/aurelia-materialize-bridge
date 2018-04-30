import * as au from "../aurelia";

@au.customElement("md-carousel")
@au.autoinject
export class MdCarousel {
	constructor(private element: Element, private taskQueue: au.TaskQueue) { }

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdIndicators: boolean = true;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdFullWidth: boolean = false;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdDuration: number;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdDist: number;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdShift: number;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdPadding: number;

	@au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdNumVisible: number;

	@au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	mdNoWrap: boolean;

	@au.children("md-carousel-item")
	items: Element[] = [];
	itemsChanged() {
		this.refresh();
	}

	instance: M.Carousel;

	attached() {
		if (this.mdFullWidth) {
			this.element.classList.add("carousel-slider");
		}
		this.refresh();
	}

	detached() {
		this.instance.destroy();
	}

	refresh() {
		if (!this.items.length) {
			return;
		}
		const options: Partial<M.CarouselOptions> = {
			fullWidth: this.mdFullWidth,
			indicators: this.mdIndicators,
			dist: this.mdDist,
			duration: this.mdDuration,
			noWrap: this.mdNoWrap,
			numVisible: this.mdNumVisible,
			padding: this.mdPadding,
			shift: this.mdShift,
			onCycleTo: (current, dragged) => au.fireMaterializeEvent(this.element, "cycle-to", { current, dragged })
		};
		au.cleanOptions(options);
		this.taskQueue.queueTask(() => {
			this.instance = new M.Carousel(this.element, options);
		});
	}

	next(n?: number) {
		this.instance.next(n);
	}

	prev(n?: number) {
		this.instance.prev(n);
	}

	set(n?: number) {
		this.instance.set(n);
	}
}
