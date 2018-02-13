import { MdModal } from "aurelia-materialize-bridge";

export class ManualClose {
	closeDialog = false;
	myDialog: MdModal;

	agree(e) {
		if (this.closeDialog) {
			this.myDialog.close();
		}
	}
}
