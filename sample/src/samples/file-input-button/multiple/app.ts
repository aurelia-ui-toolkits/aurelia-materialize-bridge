import { computedFrom } from "aurelia-framework";
import { MdFileInput } from "aurelia-materialize-bridge";

export class App {
	labelValue;
	fileInput: MdFileInput;

	@computedFrom("fileInput.files")
	get selectedFiles() {
		if (this.fileInput.files) {
			return [].slice.call(this.fileInput.files);
		}
	}
}
