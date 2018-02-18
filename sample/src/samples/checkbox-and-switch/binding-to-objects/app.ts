export class App {
	products = [
		{ id: 0, name: "Motherboard" },
		{ id: 1, name: "CPU" },
		{ id: 2, name: "Memory" }
	];

	selectedProducts = [];
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
