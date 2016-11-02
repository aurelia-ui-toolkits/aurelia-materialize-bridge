import { inject } from 'aurelia-framework';
import { MdToastService } from 'aurelia-materialize-bridge/toast/toastService';

@inject(MdToastService)
export class Events {
  constructor(toast) {
    this.toast = toast;
  }

  agree(e) {
    this.toast.show('You agreed!', 4000);
  }

  disagree(e) {
    this.toast.show('You disagreed!', 4000);
  }

  onComplete(e) {
    this.logger.log('modal complete');
  }

  onReady(e) {
    this.logger.log('modal ready');
  }
}
