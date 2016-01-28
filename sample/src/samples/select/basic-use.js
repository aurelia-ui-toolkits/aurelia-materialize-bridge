// import { inject, ObserverLocator } from 'aurelia-framework';
//
// @inject(ObserverLocator)
export class BasicUse {
  selectedValue = '';

  // constructor(observerLocator) {
  //   this.subscription = observerLocator.getObserver(this, 'selectedValue')
  //     .subscribe(this.selectedValueChanged);
  // }
  //
  // selectedValueChanged(newValue) {
  //   console.log('select changed', newValue);
  // }
  setSelectedValue() {
    this.selectedValue = 'item3';
  }
}
