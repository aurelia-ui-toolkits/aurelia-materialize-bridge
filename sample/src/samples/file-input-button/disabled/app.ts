import { computedFrom } from "aurelia-framework";
import { MdFileInput } from "aurelia-materialize-bridge";

export class App {
	labelValue;
	fileInput: MdFileInput;

	@computedFrom("fileInput.files")
	get selectedFile() {
		if (this.fileInput.files) {
			return this.fileInput.files.length > 0 ? this.fileInput.files[0] : "";
		}
	}
}
