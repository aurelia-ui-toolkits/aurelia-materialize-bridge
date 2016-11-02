export class ManualClose {
  closeDialog = false;

  constructor(toast) {
    this.toast = toast;
  }

  agree(e) {
    if (this.closeDialog) {
      this.myDialog.close();
    }
  }
}
