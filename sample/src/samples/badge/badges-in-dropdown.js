import { inject } from 'aurelia-framework';
import { MdToastService } from 'aurelia-materialize-bridge/toast/toastService';

@inject(MdToastService)
export class Sropdown {
  constructor(toast) {
    this.toast = toast;
  }

  showToast(e) {
    this.toast.show(`You clicked ${e.target.innerText}`, 4000);
  }
}
