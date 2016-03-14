import { inject } from 'aurelia-framework';
import { MdToastService } from 'aurelia-materialize-bridge';

@inject(MdToastService)
export class Toasts {
  constructor(toast) {
    this.toast = toast;
  }

  showDefaultToast() {
    this.toast.show('I am a toast!', 4000);
  }

  showToastWithPromise() {
    this.toast.show('When finished, I trigger another toast.', 4000).then(() => {
      this.toast.show('I am a toast called by a callback of another toast!', 4000);
    });
  }
}
