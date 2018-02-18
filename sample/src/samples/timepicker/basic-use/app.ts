export class App {
	time = null;

	setTime() {
		this.time = "07:13";
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
