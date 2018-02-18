export class FilterPizzaValueConverter {
	toView(array, toFilterOrNotToFilter) {
		if (array) {
			return array.filter(r => {
				return !toFilterOrNotToFilter || r.name === "Pizza";
			});
		}
	}
}
