import { inject } from 'aurelia-framework';
import { MdToastService } from 'aurelia-materialize-bridge/toast/toastService';

@inject(MdToastService)
export class Options {
  constructor(toast) {
    this.toast = toast;
  }

  agree(e) {
    this.toast.show('You agreed!', 4000);
  }

  disagree(e) {
    this.toast.show('You disagreed!', 4000);
  }
}
