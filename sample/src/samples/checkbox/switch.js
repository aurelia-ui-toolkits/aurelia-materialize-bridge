export class Switch {
  checked = true;
  disabled = true;

  toggleDisabled() {
    this.disabled = !this.disabled;
  }
}
