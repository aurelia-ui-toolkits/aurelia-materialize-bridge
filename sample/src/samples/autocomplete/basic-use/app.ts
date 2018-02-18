export class App {
	textValue = "";
	values: any = {
		Apple: null,
		Microsoft: null,
		Google: "http://placehold.it/250x250",
	};

	setOtherValues() {
		this.values = {
			Aurelia: "http://placehold.it/250x250",
			Angular: null,
			Ember: null
		};
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
