export class StringifyValueConverter {
	toView(value) {
		if (value) {
			return JSON.stringify(value);
		}
	}
}
