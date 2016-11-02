import { inject } from 'aurelia-framework';
import { MdToastService } from 'aurelia-materialize-bridge';

@inject(MdToastService)
export class BasicUse {
  constructor(toast) {
    this.toast = toast;
  }

  agree(e) {
    this.toast.show('You agreed!', 4000);
  }

  disagree(e) {
    this.toast.show('You disagreed!', 4000);
  }

  openModal() {
    this.modal.open();
  }
}
