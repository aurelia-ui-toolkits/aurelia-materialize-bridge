export class App {
	selectedProducts = [
		{ id: 1, name: "CPU" },
		{ id: 2, name: "Memory" }
	];

	productMatcher = (a, b) => a.id === b.id;
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
