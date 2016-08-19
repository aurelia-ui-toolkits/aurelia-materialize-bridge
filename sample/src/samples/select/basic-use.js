export class BasicUse {
  disabled = true;
  selectedValue = '';

  setSelectedValue() {
    this.selectedValue = 'item3';
  }

  toggle() {
    this.disabled = !this.disabled;
  }
}
