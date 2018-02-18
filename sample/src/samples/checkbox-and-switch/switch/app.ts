export class App {
	checked = true;
	disabled = true;

	toggleDisabled() {
		this.disabled = !this.disabled;
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
