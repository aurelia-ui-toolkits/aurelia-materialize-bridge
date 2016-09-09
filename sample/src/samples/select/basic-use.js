export class BasicUse {
  disabled = true;
  selectedValue = '';
  selectedValue2 = '';

  setSelectedValue() {
    this.selectedValue = 'item3';
  }

  setSelectedValue2() {
    this.selectedValue2 = 'item3';
  }

  toggle() {
    this.disabled = !this.disabled;
  }
}
