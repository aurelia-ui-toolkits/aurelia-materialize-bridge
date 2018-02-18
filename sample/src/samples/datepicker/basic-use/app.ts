export class App {
	selectedDate = null;

	setDate() {
		let date = new Date();
		this.selectedDate = date;
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
