import {observable} from 'aurelia-framework';

export class RangeWithInput {
  @observable() loanAmount;
  rangeValue;

  constructor() {
    this.loanAmount = 10000.5;
    this.rangeValue = 10000.5;
  }

  loanAmountChanged(newValue) {
    this.rangeValue = newValue;
  }

  onRangeChange(e) {
    this.loanAmount = this.rangeValue;
  }
}
