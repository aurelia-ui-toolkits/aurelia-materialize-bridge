export class App {
	colors = [
		{ name: "red", hex: "#ff0000" },
		{ name: "green", hex: "#00ff00" },
		{ name: "blue", hex: "#0000ff" }
	];
	selectedColor = this.colors[1];
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
