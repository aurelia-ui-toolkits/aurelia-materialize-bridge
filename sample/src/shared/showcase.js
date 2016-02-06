import { Controls } from '../project-status/controls';

export class Showcase {
  constructor() {
    this.categories = new Controls().categories;
  }

  setActive(ctrl) {
    console.log(ctrl);
  }
}
