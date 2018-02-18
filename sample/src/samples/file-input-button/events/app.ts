import { computedFrom } from "aurelia-framework";
import { MdFileInput } from "aurelia-materialize-bridge";
import { Logger } from "../../../shared/logger";

export class Multiple {
	labelValue;
	fileInput: MdFileInput;
	logger: Logger;

	@computedFrom("fileInput.files")
	get selectedFiles() {
		if (this.fileInput.files) {
			return [].slice.call(this.fileInput.files);
		}
	}

	filesChanged(e) {
		let files = [];
		[].forEach.call(e.detail.files, file => {
			files.push(`${file.name} (${file.size} bytes)`);
		});
		this.logger.log(`files changed ${files.join(", ")}`);
	}
}
