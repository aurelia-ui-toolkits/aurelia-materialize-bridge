import { DiscardablePromise, discard } from "../common/discardable-promise";
import { MdLookup } from "./lookup";

export class FilterChangedHandler<T> {
	constructor(private optionsSetter: (options: Array<T | symbol>) => void, private searchFunction: (filter: string) => Promise<T[]>) { }

	searchPromise: DiscardablePromise<any[]>;
	async filterChanged(filter: string) {
		this.optionsSetter([MdLookup.searching]);
		discard(this.searchPromise);
		try {
			this.searchPromise = new DiscardablePromise(this.searchFunction(filter));
			this.optionsSetter(await this.searchPromise);
		}
		catch (e) {
			if (e !== DiscardablePromise.discarded) {
				this.optionsSetter([MdLookup.error, e]);
			}
		}
	}
}
