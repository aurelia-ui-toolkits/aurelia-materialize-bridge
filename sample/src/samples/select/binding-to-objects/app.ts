export class App {
	food = [
		{ id: 0, name: "Pizza", count: 1 },
		{ id: 1, name: "Cake", count: 3 },
		{ id: 2, name: "Steak", count: 6 },
		{ id: 3, name: "Pasta", count: 2 },
		{ id: 4, name: "Fries", count: 7 }
	];
	selectedMeal = null;

	setSelectedMeal() {
		this.selectedMeal = this.food[2];
	}

	increasePizzaCount() {
		this.food[0].count++;
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
