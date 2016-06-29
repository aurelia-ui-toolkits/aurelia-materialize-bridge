export class AdvancedOptions {
  selectedDate = null;
  advancedOptions = {
    closeOnSelect: true,
    closeOnClear: true,
    max: new Date(),
    selectYears: 50,
    editable: true,
    showIcon: true
  };
  setDate() {
    let date = new Date();
    this.selectedDate = date;
  }
}
