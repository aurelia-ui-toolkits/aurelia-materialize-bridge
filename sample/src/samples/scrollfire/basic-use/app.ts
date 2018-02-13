export class App {
	list: HTMLUListElement;
	image: HTMLImageElement;

	firstTarget() {
		Materialize.showStaggeredList($(this.list));
	}
	secondTarget() {
		Materialize.fadeInImage($(this.image));
	}
}
