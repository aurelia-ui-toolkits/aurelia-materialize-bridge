import { observable, TaskQueue } from "aurelia-framework";
import { MdSelect } from "aurelia-materialize-bridge";

export class BasicUse {
	constructor(private taskQueue: TaskQueue) { }

	select: MdSelect;

	@observable
	shouldFilter = false;
	shouldFilterChanged() {
		if (this.select) {
			this.select.refresh();
		}
	}

	food = [
		{ id: 0, name: "Pizza" },
		{ id: 1, name: "Cake" },
		{ id: 2, name: "Steak" },
		{ id: 3, name: "Pasta" },
		{ id: 4, name: "Fries" }
	];
	selectedMeal = [this.food[1]];
}
