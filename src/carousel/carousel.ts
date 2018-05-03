import * as au from "../aurelia";

@au.customElement("md-carousel")
@au.autoinject
export class MdCarousel {
	constructor(private element: Element, private taskQueue: au.TaskQueue) { }

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	indicators: boolean = true;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	fullWidth: boolean = false;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	duration: number;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	dist: number;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	shift: number;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	padding: number;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	numVisible: number;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	noWrap: boolean;

	@au.children("md-carousel-item")
	items: Element[] = [];
	itemsChanged() {
		this.refresh();
	}

	instance: M.Carousel;

	attached() {
		if (this.fullWidth) {
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
			fullWidth: this.fullWidth,
			indicators: this.indicators,
			dist: this.dist,
			duration: this.duration,
			noWrap: this.noWrap,
			numVisible: this.numVisible,
			padding: this.padding,
			shift: this.shift,
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
