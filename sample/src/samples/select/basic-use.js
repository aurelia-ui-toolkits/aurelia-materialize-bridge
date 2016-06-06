export class BasicUse {
  disabled = false;
  selectedValue = '';

  setSelectedValue() {
    this.selectedValue = 'item3';
  }

  toggle() {
    this.disabled = !this.disabled;
  }
}
